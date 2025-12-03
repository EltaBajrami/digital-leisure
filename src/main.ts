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
          <p class="welcome-title">LEISURE IN THE DIGITAL AGE</p>
          <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1rem;">Investigating how digital technologies, gamification, and algorithmic systems are reshaping leisure, pleasure, and fulfillment in contemporary life!!</p>
          <div style="margin-top: 2rem;">
            <button id="expand-shift-btn" style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 1.25rem 1.5rem; background: rgba(255, 230, 199, 0.5); border: 2px solid var(--hover-accent); border-radius: 12px; font-weight: 600; font-size: 1.05rem; cursor: pointer; transition: all 0.2s ease; color: var(--warm-ink);">
              <span>Shift from TRADITIONAL LEISURE to DIGITAL-AGE LEISURE →</span>
              <span id="expand-icon" style="font-size: 1.3rem; transition: transform 0.3s ease;">▼</span>
            </button>
            <div id="shift-content" style="display: none; margin-top: 1rem; padding: 1.5rem; background: rgba(255, 230, 199, 0.3); border-radius: 12px; border-left: 4px solid var(--hover-accent); animation: slideDown 0.3s ease;">
              <p style="line-height: 1.6;">Platforms redefine relaxation as easy, passive, entertaining consumption—no longer primarily about reflection, creativity, or social connection. Measured by efficiency, reward, and low effort, often quantified via engagement metrics!</p>
            </div>
          </div>
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
        <h2 style="font-family: 'Satisfy', cursive; font-size: 2.2rem; margin-bottom: 2rem; color: var(--warm-ink);">DIGITAL-AGE LEISURE</h2>
        
        <div style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 230, 199, 0.3); border-radius: 12px;">
          <p style="font-weight: 600; margin-bottom: 0.75rem;">Increasingly defined by immediate gratification and constant novelty:</p>
          <ul style="line-height: 1.8; padding-left: 1.5rem;">
            <li>Algorithms prioritize content that stimulates attention, dopamine, or engagement</li>
            <li>"Rest" can feel boring without digital entertainment</li>
            <li>It's becoming harder to choose free time that isn't planned or optimized by apps</li>
          </ul>
        </div>

        <h3 style="font-family: 'Satisfy', cursive; font-size: 1.7rem; margin: 2rem 0 1rem; color: var(--warm-ink);">How Platforms Mediate Leisure</h3>
        <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
          <div style="padding: 1rem; background: rgba(255, 255, 255, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>Recommendation Algorithms:</strong> TikTok, YouTube, Instagram feed content based on predicted preferences
          </div>
          <div style="padding: 1rem; background: rgba(255, 255, 255, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>Push Notifications / Infinite Scroll:</strong> Encourage longer engagement sessions
          </div>
          <div style="padding: 1rem; background: rgba(255, 255, 255, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>Personalized Ads / Sponsored Content:</strong> Monetize attention, guiding choices
          </div>
          <div style="padding: 1rem; background: rgba(255, 255, 255, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>Social Media Challenges:</strong> Streaks, badges, rewards incentivize repeated interaction
          </div>
        </div>

        <h3 style="font-family: 'Satisfy', cursive; font-size: 1.7rem; margin: 2rem 0 1rem; color: var(--warm-ink);">The Effortless Enjoyment Culture</h3>
        <p style="line-height: 1.7; margin-bottom: 1.5rem;">Society increasingly values efficiency, automation, and eliminating menial labor. People rely on AI and smart systems (ChatGPT, scheduling assistants, smart home devices) to handle tasks they don't want to do themselves. This preference for convenience can reduce engagement with "slower" activities.</p>
        
        <div style="display: grid; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="padding: 1.5rem; background: rgba(255, 240, 230, 0.5); border-radius: 12px;">
            <h4 style="font-weight: 600; margin-bottom: 0.75rem; color: var(--hover-accent);">📱 TikTok's FYP</h4>
            <p style="line-height: 1.6;">The algorithm automatically serves an endless stream of videos tailored to your past behavior, requiring no effort to find content. Users can "relax" by passively scrolling for hours, while the platform optimizes engagement and collects data. The activity feels like leisure, but it's largely passive, with minimal creative or reflective involvement.</p>
          </div>
          <div style="padding: 1.5rem; background: rgba(255, 240, 230, 0.5); border-radius: 12px;">
            <h4 style="font-weight: 600; margin-bottom: 0.75rem; color: var(--hover-accent);">🎵 Spotify AI-Generated Playlists</h4>
            <p style="line-height: 1.6;">"Daily Mix" or "Discover Weekly" automatically curates music based on listening habits. Users can enjoy new music without searching or curating themselves, reinforcing leisure as effortless consumption.</p>
          </div>
        </div>

        <h3 style="font-family: 'Satisfy', cursive; font-size: 1.7rem; margin: 2rem 0 1rem; color: var(--warm-ink);">Blurred Lines & Deeper Questions</h3>
        <p style="line-height: 1.7; margin-bottom: 1rem;">Gamified systems blur the line between work and play, conditioning users to seek only immediately fun or rewarding activities. Immersive technologies (VR, AR) transform how people experience presence, pleasure, and participation.</p>
        
        <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(194, 106, 61, 0.1); border-radius: 12px; border: 2px dashed var(--hover-accent);">
          <p style="font-weight: 600; margin-bottom: 1rem;">The shifting meaning of satisfaction and fulfillment raises questions about:</p>
          <ul style="line-height: 1.8; padding-left: 1.5rem;">
            <li>Autonomy, attention, and trade-offs between convenience, entertainment, and privacy</li>
            <li>How digital leisure intersects with social, political, and economic power structures</li>
            <li>Labor practices, data exploitation, and algorithmic influence</li>
            <li>Gigwork, microwork, content moderation—user activity fuels algorithms, advertising, platform profits</li>
          </ul>
        </div>

        <h3 style="font-family: 'Satisfy', cursive; font-size: 1.7rem; margin: 2.5rem 0 1rem; color: var(--warm-ink);">The Missing Third Space</h3>
        <div style="padding: 1.5rem; background: rgba(255, 230, 199, 0.4); border-radius: 12px; margin-bottom: 1.5rem;">
          <p style="line-height: 1.7; margin-bottom: 1rem;"><strong>Concept from sociologist Ray Oldenburg:</strong> Informal, neutral spaces outside home (first space) and work (second space) where people gather, relax, socialize, or engage creatively. Examples: cafes, parks, community centers, libraries.</p>
          <p style="line-height: 1.7;">These spaces allow for autonomy, unstructured activity, reflection, and meaningful social interaction—leisure that isn't optimized or monetized.</p>
        </div>
        
        <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.6); border-radius: 12px; margin-bottom: 1.5rem;">
          <p style="font-weight: 600; margin-bottom: 0.75rem;">Digital platforms try to fill that gap, claiming to offer connection and relaxation, but:</p>
          <ul style="line-height: 1.8; padding-left: 1.5rem;">
            <li>They're algorithmically structured, steering attention</li>
            <li>Relaxation becomes curated, not self-directed</li>
            <li>Activity but NOT the agency that traditional third spaces provided</li>
          </ul>
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(194, 106, 61, 0.15); border-radius: 12px;">
          <p style="font-weight: 600; margin-bottom: 1rem; color: var(--hover-accent);">CONSEQUENCES OF THE MISSING THIRD SPACE:</p>
          <ul style="line-height: 1.8; padding-left: 1.5rem;">
            <li>Losing self-directed creativity and social intimacy</li>
            <li>Dependence on platforms to define what counts as fun or relaxing</li>
            <li>Reduced opportunities for authentic presence</li>
            <li>Leisure becomes another metric of productivity: "Am I efficiently entertained?"</li>
          </ul>
        </div>
      </main>
      <main class="content-section" id="traditional-content" style="display: ${this.state.activeTab === 'traditional' ? 'block' : 'none'}">
        <h2 style="font-family: 'Satisfy', cursive; font-size: 2.2rem; margin-bottom: 2rem; color: var(--warm-ink);">TRADITIONAL LEISURE</h2>
        
        <div style="padding: 1.5rem; background: rgba(255, 230, 199, 0.3); border-radius: 12px; margin-bottom: 2rem;">
          <p style="line-height: 1.7; font-size: 1.05rem;">Often involved <strong>active engagement</strong>—skill-building, reflection, or social interaction through activities like reading, crafts, sports, and board games.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.5); border-radius: 12px; border-top: 4px solid var(--hover-accent);">
            <h3 style="font-family: 'Satisfy', cursive; font-size: 1.4rem; margin-bottom: 1rem; color: var(--warm-ink);">Stimulation as Intrinsic</h3>
            <p style="line-height: 1.7;">Not constant! Enjoyment comes from mastery or participation, not necessarily external rewards.</p>
          </div>
          <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.5); border-radius: 12px; border-top: 4px solid var(--hover-accent);">
            <h3 style="font-family: 'Satisfy', cursive; font-size: 1.4rem; margin-bottom: 1rem; color: var(--warm-ink);">Self-Directed Choice</h3>
            <p style="line-height: 1.7;">Activities chosen based on personal interest and available time, not algorithmic suggestion or push notifications.</p>
          </div>
        </div>

        <h3 style="font-family: 'Satisfy', cursive; font-size: 1.7rem; margin: 2rem 0 1rem; color: var(--warm-ink);">Examples of Traditional Leisure</h3>
        <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
          <div style="padding: 1rem; background: rgba(255, 240, 230, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>📚 Reading:</strong> Sustained focus, imagination, personal pacing
          </div>
          <div style="padding: 1rem; background: rgba(255, 240, 230, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>🎨 Crafts & Hobbies:</strong> Skill development, tangible creation, patience
          </div>
          <div style="padding: 1rem; background: rgba(255, 240, 230, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>⚽ Sports & Physical Play:</strong> Embodied engagement, social bonds, practice
          </div>
          <div style="padding: 1rem; background: rgba(255, 240, 230, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>🎲 Board Games & Social Games:</strong> Face-to-face interaction, strategy, shared experience
          </div>
          <div style="padding: 1rem; background: rgba(255, 240, 230, 0.5); border-radius: 8px; border-left: 3px solid var(--hover-accent);">
            <strong>☕ Third Spaces:</strong> Cafes, parks, libraries—unstructured, autonomous, reflective
          </div>
        </div>

        <div style="margin-top: 2.5rem; padding: 1.5rem; background: rgba(194, 106, 61, 0.1); border-radius: 12px; border: 2px dashed var(--hover-accent);">
          <p style="font-weight: 600; margin-bottom: 1rem; font-size: 1.1rem;">Key Difference:</p>
          <p style="line-height: 1.7;">Traditional leisure prioritized <strong>depth, autonomy, and meaningful engagement</strong>. Digital-age leisure often prioritizes <strong>convenience, constant stimulation, and algorithmic curation</strong>—shifting the meaning of relaxation from active participation to passive consumption.</p>
        </div>
      </main>
      <footer>
        <p>&copy; ${new Date().getFullYear()} Digital Literacy Website</p>
      </footer>
    `;
    
    // Reattach event listeners after render
    this.header.attachEventListeners();
    if (!isBuildingDetail && this.state.activeTab === 'about') {
      this.roadMap.attachEventListeners();
      this.attachExpandButton();
    }
    if (isBuildingDetail) {
      this.buildingDetail.attachEventListeners(() => this.backToRoadmap());
    }

    // Reattach tooltips after each render
    this.attachConceptTooltips();
    this.attachAddConceptButton();
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
        expandBtn.style.background = isExpanded ? 'rgba(255, 230, 199, 0.5)' : 'rgba(255, 230, 199, 0.8)';
      });
    }
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

