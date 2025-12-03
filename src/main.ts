import './style.css';
import { Header } from './components/Header';
import { RoadMap } from './components/RoadMap';
import { BuildingDetail } from './components/BuildingDetail';
import { KeyConcepts } from './components/KeyConcepts';

interface AppState {
  activeTab: string;
  currentPage: string; // 'roadmap' or building step number
}

class App {
  private state: AppState;
  private header: Header;
  private roadMap: RoadMap;
  private buildingDetail: BuildingDetail;
  private keyConcepts: KeyConcepts;
  private customTerms: Array<{term: string, definition: string}> = [];

  constructor() {
    this.state = {
      activeTab: 'about',
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
    const isBuildingDetail = this.state.currentPage !== 'roadmap' && this.state.activeTab === 'about';
    
    container.innerHTML = `
      ${this.header.render()}
      <main class="content-section" id="about-welcome-content" style="display: ${this.state.activeTab === 'about' && !isBuildingDetail ? 'block' : 'none'}">
        <div class="welcome-section">
          <p class="welcome-title">All about Digital Leisure</p>
          <p>...and how the digital is stripping away the joy of simple pleasures.</p>
        </div>
      </main>
      <main class="content-section roadmap-main" id="about-roadmap-content" style="display: ${this.state.activeTab === 'about' && !isBuildingDetail ? 'block' : 'none'}">
        <div class="roadmap-section">
          ${this.roadMap.render()}
        </div>
      </main>
      <main class="content-section key-concepts-main" id="about-key-concepts-content" style="display: ${this.state.activeTab === 'about' && !isBuildingDetail ? 'block' : 'none'}">
        ${this.keyConcepts.render()}
      </main>
      <main class="content-section building-detail-main" id="building-detail-content" style="display: ${isBuildingDetail ? 'block' : 'none'}">
        ${isBuildingDetail ? this.buildingDetail.render(this.state.currentPage) : ''}
      </main>
      <main class="content-section" id="modern-content" style="display: ${this.state.activeTab === 'modern' ? 'block' : 'none'}">
        <h2>Modern Leisure</h2>
        <p>Explore modern leisure activities and experiences.</p>
      </main>
      <main class="content-section" id="traditional-content" style="display: ${this.state.activeTab === 'traditional' ? 'block' : 'none'}">
        <h2>Traditional Leisure</h2>
        <p>Discover traditional leisure activities and cultural experiences.</p>
      </main>
      <footer>
        <p>&copy; ${new Date().getFullYear()} Digital Literacy Website</p>
      </footer>
    `;
    
    // Reattach event listeners after render
    this.header.attachEventListeners();
    if (!isBuildingDetail && this.state.activeTab === 'about') {
      this.roadMap.attachEventListeners();
    }
    if (isBuildingDetail) {
      this.buildingDetail.attachEventListeners(() => this.backToRoadmap());
    }

    // Reattach tooltips after each render
    this.attachConceptTooltips();
    this.attachAddConceptButton();
    this.renderCustomTerms();
  }

  // Modal popup for concept definitions
  private attachConceptTooltips(): void {
    const bubbles = document.querySelectorAll<HTMLElement>('.concept-has-definition');
    // remove any existing modals
    document.querySelectorAll('.concept-modal-overlay').forEach(m => m.remove());

    bubbles.forEach(bubble => {
      const term = bubble.dataset.term;
      const definition = bubble.dataset.definition;
      if (!term || !definition) return;

      const showModal = (ev: Event) => {
        ev.stopPropagation();
        // Close any existing modal
        document.querySelectorAll('.concept-modal-overlay').forEach(m => m.remove());

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
    this.state.currentPage = step;
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }
  
  private backToRoadmap(): void {
    this.state.currentPage = 'roadmap';
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private switchTab(tabName: string): void {
    this.state.activeTab = tabName;
    this.state.currentPage = 'roadmap'; // Reset to roadmap when switching tabs
    this.header.updateActiveTab(tabName);
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
    document.querySelectorAll('.add-term-modal-overlay').forEach(m => m.remove());

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
    container.innerHTML = this.customTerms.map(({term, definition}) => 
      `<span class="concept-bubble concept-has-definition" data-term="${term}" data-definition="${definition}">${term}</span>`
    ).join('');

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

