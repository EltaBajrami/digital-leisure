import './style.css';
import { Header } from './components/Header';
import { RoadMap } from './components/RoadMap';
import { BuildingDetail } from './components/BuildingDetail';
import { KeyConcepts } from './components/KeyConcepts';

interface AppState {
  activeTab: string;   // 'about' | 'roadmap' | 'concepts'
  currentPage: string; // 'roadmap' or building step number ('1'–'7')
}

class App {
  private state: AppState;
  private header: Header;
  private roadMap: RoadMap;
  private buildingDetail: BuildingDetail;
  private keyConcepts: KeyConcepts;
  private customTerms: Array<{ term: string; definition: string }> = [];

  constructor() {
    this.state = {
      activeTab: 'about',   // start on Overview
      currentPage: 'roadmap'
    };

    this.header = new Header(this.state.activeTab, (tabName) => this.switchTab(tabName));
    this.roadMap = new RoadMap();
    this.buildingDetail = new BuildingDetail();
    this.keyConcepts = new KeyConcepts();

    this.roadMap.setImageClickCallback((step) => this.showBuildingDetail(step));
    this.init();
  }

  private init(): void {
    const app = document.querySelector<HTMLDivElement>('#app');
    if (!app) {
      throw new Error('App container not found');
    }

    this.render(app);
    this.attachConceptTooltips();
    this.attachAddConceptButton();
  }

  private render(container: HTMLElement): void {
    // detail view lives under the "Campus Roadmap" tab
    const isBuildingDetail =
      this.state.activeTab === 'roadmap' && this.state.currentPage !== 'roadmap';

    container.innerHTML = `
      ${this.header.render()}

      <!-- OVERVIEW TAB -->
      <main
        class="content-section"
        id="about-welcome-content"
        style="display: ${this.state.activeTab === 'about' ? 'block' : 'none'}"
      >
        <div class="welcome-section">
          <p class="welcome-title">Leisure in the Digital Age</p>
          
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.75rem;">
            This site is a small field guide for reimagining leisure at Vassar. It takes ideas from
            <em>Digital Lives</em>—infrastructure, platform capitalism, datafication, algorithmic management,
            AI, and nonscalability—and drops them into the spaces where you actually spend your time.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">
            The campus roadmap connects course concepts to familiar buildings. Each stop asks:
            <span style="font-style: italic;">What does “rest” look like here? Who makes it possible? Whose time,
            data, or labor is being optimized?</span> The goal is not to reject digital leisure, but to notice how it
            is structured—and to imagine slower, less efficient, more self-directed forms of pleasure.
          </p>

          <div style="margin: 1.5rem 0 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">How to use this site</h4>
            <ul style="font-size: 0.98rem; line-height: 1.7; padding-left: 1.2rem; margin-bottom: 0.5rem;">
              <li><strong>Walk the map:</strong> Click each building to see how digital systems are shaping leisure there.</li>
              <li><strong>Compare modes of rest:</strong> Use the tabs to move between the campus map and key concepts.</li>
              <li><strong>Play with concepts:</strong> Explore the keyword bubbles, or add your own terms and definitions.</li>
            </ul>
          </div>

          <div style="margin-top: 1.5rem;">
            <button
              id="expand-shift-btn"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 1.25rem 1.5rem;
                background: rgba(255, 230, 199, 0.5);
                border: 2px solid var(--hover-accent);
                border-radius: 12px;
                font-weight: 600;
                font-size: 1.05rem;
                cursor: pointer;
                transition: all 0.2s ease;
                color: var(--warm-ink);
              "
            >
              <span>From traditional leisure to platformed rest →</span>
              <span id="expand-icon" style="font-size: 1.3rem; transition: transform 0.3s ease;">▼</span>
            </button>
            <div
              id="shift-content"
              style="
                display: none;
                margin-top: 1rem;
                padding: 1.5rem;
                background: rgba(255, 230, 199, 0.3);
                border-radius: 12px;
                border-left: 4px solid var(--hover-accent);
                animation: slideDown 0.3s ease;
              "
            >
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Traditional leisure often meant <strong>active, self-directed participation</strong>: reading, crafts,
                pickup games, long conversations in third spaces. Stimulation was not constant; satisfaction came from
                mastery, presence, or shared time.
              </p>
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Digital-age leisure is increasingly organized by <strong>platforms, algorithms, and metrics</strong>.
                Rest becomes an endless scroll or auto-generated playlist, optimized for engagement rather than reflection.
              </p>
              <p style="line-height: 1.7;">
                This website asks what is gained—and what is lost—when your “breaks” are scripted by infrastructures,
                recommendation systems, and data extraction. Where on campus can you still practice slow, messy,
                unproductive forms of rest?
              </p>
            </div>
          </div>
        </div>
      </main>

      <!-- CAMPUS ROADMAP TAB: map view -->
      <main
        class="content-section roadmap-main"
        id="about-roadmap-content"
        style="display: ${this.state.activeTab === 'roadmap' && !isBuildingDetail ? 'block' : 'none'}"
      >
        <div class="roadmap-section">
          ${this.roadMap.render()}
        </div>
      </main>

      <!-- CAMPUS ROADMAP TAB: building detail view -->
      <main
        class="content-section building-detail-main"
        id="building-detail-content"
        style="display: ${isBuildingDetail ? 'block' : 'none'}"
      >
        ${isBuildingDetail ? this.buildingDetail.render(this.state.currentPage) : ''}
      </main>

      <!-- CONCEPTS TAB -->
      <main
        class="content-section key-concepts-main"
        id="about-key-concepts-content"
        style="display: ${this.state.activeTab === 'concepts' ? 'block' : 'none'}"
      >
        ${this.keyConcepts.render()}
      </main>

      <footer>
        <p>&copy; ${new Date().getFullYear()} Digital Literacy Website</p>
      </footer>
    `;

    // Reattach event listeners after render
    this.header.attachEventListeners();

    // Only attach roadmap listeners when we're on the map view
    if (this.state.activeTab === 'roadmap' && !isBuildingDetail) {
      this.roadMap.attachEventListeners();
    }

    // Attach back button in detail view
    if (isBuildingDetail) {
      this.buildingDetail.attachEventListeners(() => this.backToRoadmap());
    }

    // Tooltips + add-term modal
    this.attachConceptTooltips();
    this.attachAddConceptButton();
    this.attachExpandButton();
    this.renderCustomTerms();
  }

  private attachExpandButton(): void {
    const expandBtn = document.getElementById('expand-shift-btn');
    const shiftContent = document.getElementById('shift-content');
    const expandIcon = document.getElementById('expand-icon');

    if (expandBtn && shiftContent && expandIcon) {
      expandBtn.addEventListener('click', () => {
        const isExpanded = shiftContent.style.display === 'block';
        shiftContent.style.display = isExpanded ? 'none' : 'block';
        expandIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        expandBtn.style.background = isExpanded
          ? 'rgba(255, 230, 199, 0.5)'
          : 'rgba(255, 230, 199, 0.8)';
      });
    }
  }

  // Modal popup for concept definitions
  private attachConceptTooltips(): void {
    const bubbles = document.querySelectorAll<HTMLElement>('.concept-has-definition');
    // remove any existing modals
    document.querySelectorAll('.concept-modal-overlay').forEach((m) => m.remove());

    bubbles.forEach((bubble) => {
      const term = bubble.dataset.term;
      const definition = bubble.dataset.definition;
      if (!term || !definition) return;

      const showModal = (ev: Event) => {
        ev.stopPropagation();
        // Close any existing modal
        document.querySelectorAll('.concept-modal-overlay').forEach((m) => m.remove());

        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'concept-modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'concept-modal';
        modal.innerHTML = `
          <div class="concept-modal-title">${term}</div>
          <div class="concept-modal-body">${definition}</div>
          <button class="concept-modal-close">Close</button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.remove();
          }
        });

        // Close on close button click
        const closeBtn = modal.querySelector('.concept-modal-close');
        closeBtn?.addEventListener('click', () => overlay.remove());

        // Close on Escape key
        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', handleEscape);
          }
        };
        document.addEventListener('keydown', handleEscape);
      };

      bubble.addEventListener('click', showModal);

      bubble.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          showModal(ev);
        }
      });

      bubble.setAttribute('tabindex', '0');
      bubble.style.cursor = 'pointer';
    });
  }

  private showBuildingDetail(step: string): void {
    // make sure we're in the roadmap tab when opening a detail view
    this.state.activeTab = 'roadmap';
    this.state.currentPage = step;
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private backToRoadmap(): void {
    this.state.activeTab = 'roadmap';
    this.state.currentPage = 'roadmap';
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private switchTab(tabName: string): void {
    this.state.activeTab = tabName;
    this.state.currentPage = 'roadmap'; // reset detail view when switching tabs
    // header already updates itself in Header.attachEventListeners()
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private attachAddConceptButton(): void {
    const addBtn = document.querySelector('.add-concept-btn');
    if (!addBtn) return;

    addBtn.addEventListener('click', () => {
      this.showAddTermModal();
    });
  }

  private showAddTermModal(): void {
    // Remove any existing modal
    document.querySelectorAll('.add-term-modal-overlay').forEach((m) => m.remove());

    const overlay = document.createElement('div');
    overlay.className = 'add-term-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'add-term-modal';
    modal.innerHTML = `
      <h3 class="add-term-modal-title">Add Custom Term</h3>
      <form class="add-term-form">
        <div class="form-group">
          <label for="term-input">Term</label>
          <input type="text" id="term-input" placeholder="e.g., Metaverse" required />
        </div>
        <div class="form-group">
          <label for="definition-input">Definition</label>
          <textarea id="definition-input" placeholder="Enter a simple definition..." rows="4" required></textarea>
        </div>
        <div class="form-buttons">
          <button type="button" class="cancel-btn">Cancel</button>
          <button type="submit" class="submit-btn">Add Term</button>
        </div>
      </form>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Handle form submission
    const form = modal.querySelector('.add-term-form') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const termInput = document.getElementById('term-input') as HTMLInputElement;
      const defInput = document.getElementById('definition-input') as HTMLTextAreaElement;

      if (termInput.value.trim() && defInput.value.trim()) {
        this.customTerms.push({
          term: termInput.value.trim(),
          definition: defInput.value.trim()
        });
        overlay.remove();
        this.renderCustomTerms();
      }
    });

    // Cancel button
    const cancelBtn = modal.querySelector('.cancel-btn');
    cancelBtn?.addEventListener('click', () => overlay.remove());

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    // Focus first input
    setTimeout(() => {
      (document.getElementById('term-input') as HTMLInputElement)?.focus();
    }, 100);
  }

  private renderCustomTerms(): void {
    const section = document.getElementById('custom-concepts-section');
    const container = document.getElementById('custom-concepts-bubbles');

    if (!section || !container) return;

    if (this.customTerms.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    container.innerHTML = this.customTerms
      .map(
        ({ term, definition }) =>
          `<span class="concept-bubble concept-has-definition" data-term="${term}" data-definition="${definition}">${term}</span>`
      )
      .join('');

    // Reattach tooltips for custom terms
    this.attachConceptTooltips();
  }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });
} else {
  new App();
}
