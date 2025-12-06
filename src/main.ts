import './style.css';
import { Header } from './components/Header';
import { RoadMap } from './components/RoadMap';
import { BuildingDetail } from './components/BuildingDetail';
import { KeyConcepts } from './components/KeyConcepts';

interface AppState {
  activeTab: string;   // 'about' | 'roadmap' | 'concepts'
  currentPage: string; // 'roadmap' or building step number ("1"..."7")
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
      activeTab: 'about',
      currentPage: 'roadmap',
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
    // building detail only makes sense on the roadmap tab
    const isBuildingDetail =
      this.state.activeTab === 'roadmap' && this.state.currentPage !== 'roadmap';

    container.innerHTML = `
      ${this.header.render()}

      <!-- Overview / Welcome (ABOUT TAB) -->
      <main
        class="content-section"
        id="about-welcome-content"
        style="display: ${this.state.activeTab === 'about' ? 'block' : 'none'}"
      >
        <div class="welcome-section">
          <p class="welcome-title">Exploring Digital-Age Leisure!</p>
          
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.75rem;">
            This site is a small guide for noticing how your free time is shaped by digital systems.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">
            Our campus roadmap links these ideas to familiar Vassar buildings. At each stop, you’re invited to ask:
            <span style="font-style: italic;">What does “rest” look like here? Who makes it possible? Whose time,
            data, or labor is being organized in the background?</span> The goal isn’t to give up digital leisure,
            but to see how it’s structured and to imagine slower, more self-directed ways of taking a break.
          </p>

          <div style="margin: 1.5rem 0 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">WEBSITE FEATURES:</h4>
            <ul style="font-size: 0.98rem; line-height: 1.7; padding-left: 1.2rem; margin-bottom: 0.5rem;">
              <li><strong>CAMPUS ROADMAP:</strong> Click each building to learn more about relevant ideas!</li>
              <li><strong>CONCEPTS & KEYWORDS:</strong> Study keywords to build your digtal literacy.</li>
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
              <span>How “taking a break” has changed →</span>
              <span
                id="expand-icon"
                style="font-size: 1.3rem; transition: transform 0.3s ease;"
              >▼</span>
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
                Before digital platforms, leisure often meant <strong>active, self-chosen participation</strong>:
                reading, crafts, games, hanging out in common rooms or cafés. There were pauses and pockets
                of boredom. Time felt slower, and “fun” didn’t always come with notifications.
              </p>
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Now, a lot of rest runs through <strong>platforms, recommendation systems, and metrics</strong>.
                Breaks turn into scrolling, autoplay, and personalized feeds designed to keep your attention.
                Your “free time” is also valuable data that can be tracked, sorted, and sold.
              </p>
              <p style="line-height: 1.7;">
                This project asks what is gained (and what is lost) when rest is managed by infrastructures and
                algorithms, and where on campus you can still make time that feels slower, less "efficient",
                and more your own.
              </p>
            </div>
          </div>
        </div>
        
        <footer style="text-align: center; margin-top: 3rem; padding: 2rem 0; color: rgba(0,0,0,0.65);">
          <p>STS-236 Digital Lives: A Final Project by Alexandra, Ella, & Elta</p>
        </footer>

        <!-- Info cards section: three small cards -->
        <div class="info-cards" style="margin-top: 1rem;">
          <div class="card">
            <div class="card-accent accent-pink"></div>
            <div class="card-icon" aria-hidden="true">01</div>
            <p class="card-title">Algorithmic Leisure</p>
            <p class="card-body">Leisure becomes passive, optimized by platforms. Engagement is measured, novelty constant, and rest is curated rather than chosen.</p>
            <button class="card-cta">Read Me</button>
          </div>
          <div class="card">
            <div class="card-accent accent-blue"></div>
            <div class="card-icon" aria-hidden="true">02</div>
            <h4 class="card-title">Engagement Systems</h4>
            <p class="card-body">Recommendations, notifications, and infinite scroll shape attention. Gamified streaks and rewards redefine what counts as “fun.”</p>
            <button class="card-cta">Read Me</button>
          </div>
          <div class="card">
            <div class="card-accent accent-yellow"></div>
            <div class="card-icon" aria-hidden="true">03</div>
            <h4 class="card-title">The Third Space</h4>
            <p class="card-body">Cafés, parks, and libraries foster slow, social leisure. Online, agency gives way to curation—activity without autonomy.</p>
            <button class="card-cta">Read Me</button>
          </div>
        </div>

        <!-- Connected narrative (condensed intro tying all sections together) -->
        <section style="margin-top: 2rem;">
          <h3 style="font-family: 'Bungee Shade', cursive; color: var(--warm-ink); margin-bottom: 1rem;">Leisure in the Digital Age</h3>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">In the past, leisure lived in quiet corners—books, parks, game nights, craft tables. It did not chase metrics or novelty. Value came from doing: creativity, reflection, skill, and social presence. Today, platforms rewrite free time as effortless, passive, frictionless consumption.</p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">Recommendation engines, notifications, and infinite scroll orchestrate attention. Gamified streaks and rewards condition return. Apps promise convenience; AI removes friction. Leisure becomes optimized, entertaining, and efficient—curated by systems rather than self-directed.</p>
          <p style="font-size: 1.05rem; line-height: 1.8;">As third spaces disappear, digital platforms offer activity without agency. We risk losing slow creativity and social intimacy, while “fun” becomes a product shaped by engagement metrics. Our projects—podcasts, mini-documentaries, museum exhibits, and platform audits—explore this shift and ask how rest can become slower, shared, and truly self-directed again.</p>
        </section>
      </main>

      <!-- Campus Roadmap (ROADMAP TAB: MAP VIEW) -->
      <div
        id="about-roadmap-content"
        style="display: ${
          this.state.activeTab === 'roadmap' && !isBuildingDetail ? 'block' : 'none'
        }"
      >
        <div class="roadmap-section">
          ${this.roadMap.render()}
        </div>
      </div>

      <!-- Building Detail (ROADMAP TAB: DETAIL VIEW) -->
      <main
        class="content-section building-detail-main"
        id="building-detail-content"
        style="display: ${
          this.state.activeTab === 'roadmap' && isBuildingDetail ? 'block' : 'none'
        }"
      >
        ${
          this.state.activeTab === 'roadmap' && isBuildingDetail
            ? this.buildingDetail.render(this.state.currentPage)
            : ''
        }
      </main>

      <!-- Concepts & Keywords (CONCEPTS TAB) -->
      <main
        class="content-section key-concepts-main"
        id="about-key-concepts-content"
        style="display: ${this.state.activeTab === 'concepts' ? 'block' : 'none'}"
      >
        ${this.keyConcepts.render()}
      </main>

      <!-- Posters Slideshow (POSTERS TAB) -->
      <main
        class="content-section posters-main"
        id="posters-content"
        style="display: ${this.state.activeTab === 'posters' ? 'block' : 'none'}"
      >
        <h2 class="posters-title" style="font-family: 'Bungee Shade', cursive; font-size: 2.2rem; margin-bottom: 2rem; color: var(--warm-ink); text-align: left;">Search Engines</h2>
        <div class="slideshow-container">
          <div class="slide active">
            <img src="src/page1.jpg" alt="Poster 1">
          </div>
          <div class="slide">
            <img src="src/page 2.jpg" alt="Poster 2">
          </div>
          <div class="slide">
            <img src="src/page 3.jpg" alt="Poster 3">
          </div>
          
          <button class="prev-slide" aria-label="Previous slide">❮</button>
          <button class="next-slide" aria-label="Next slide">❯</button>
          
          <div class="slide-dots">
            <span class="dot active" data-slide="0"></span>
            <span class="dot" data-slide="1"></span>
            <span class="dot" data-slide="2"></span>
          </div>
        </div>

        <div class="slideshow-container slideshow-container-2" style="margin-top: 3rem;">
          <div class="slide-2 active">
            <img src="src/YellowChat1.png" alt="Yellow Chat 1">
          </div>
          <div class="slide-2">
            <img src="src/YellowChat2.png" alt="Yellow Chat 2">
          </div>
          <div class="slide-2">
            <img src="src/YellowChat3.png" alt="Yellow Chat 3">
          </div>
          <div class="slide-2">
            <img src="src/YellowChat4.png" alt="Yellow Chat 4">
          </div>
          <div class="slide-2">
            <img src="src/YellowChat5.png" alt="Yellow Chat 5">
          </div>
          
          <button class="prev-slide-2" aria-label="Previous slide">❮</button>
          <button class="next-slide-2" aria-label="Next slide">❯</button>
          
          <div class="slide-dots">
            <span class="dot-2 active" data-slide="0"></span>
            <span class="dot-2" data-slide="1"></span>
            <span class="dot-2" data-slide="2"></span>
            <span class="dot-2" data-slide="3"></span>
            <span class="dot-2" data-slide="4"></span>
          </div>
        </div>
      </main>
    `;

    // Reattach header tab listeners
    this.header.attachEventListeners();

    // Overview-specific behavior
    if (this.state.activeTab === 'about') {
      this.attachExpandButton();
    }

    // Roadmap: map or detail
    if (this.state.activeTab === 'roadmap' && !isBuildingDetail) {
      this.roadMap.attachEventListeners();
    }
    if (this.state.activeTab === 'roadmap' && isBuildingDetail) {
      this.buildingDetail.attachEventListeners(() => this.backToRoadmap());
    }

    // Concepts tab: tooltips + add-term modal
    this.attachConceptTooltips();
    this.attachAddConceptButton();
    this.renderCustomTerms();

    // Posters tab: slideshow
    if (this.state.activeTab === 'posters') {
      this.attachSlideshowListeners();
      this.attachSecondSlideshowListeners();
    }
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
    this.state.currentPage = step;
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private backToRoadmap(): void {
    this.state.currentPage = 'roadmap';
    this.render(document.querySelector<HTMLDivElement>('#app')!);
  }

  private switchTab(tabName: string): void {
    this.state.activeTab = tabName;

    // when switching tabs, reset roadmap to map view
    if (tabName === 'roadmap') {
      this.state.currentPage = 'roadmap';
    } else {
      this.state.currentPage = 'roadmap';
    }

    // keep header in sync
    if ((this.header as any).updateActiveTab) {
      (this.header as any).updateActiveTab(tabName);
    }

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
          <textarea
            id="definition-input"
            placeholder="Enter a simple definition..."
            rows="4"
            required
          ></textarea>
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
          definition: defInput.value.trim(),
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

  private currentSlide = 0;

  private attachSlideshowListeners(): void {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    const dots = document.querySelectorAll<HTMLElement>('.dot');
    const prevBtn = document.querySelector<HTMLButtonElement>('.prev-slide');
    const nextBtn = document.querySelector<HTMLButtonElement>('.next-slide');

    const showSlide = (n: number) => {
      if (n >= slides.length) this.currentSlide = 0;
      if (n < 0) this.currentSlide = slides.length - 1;

      slides.forEach((slide) => slide.classList.remove('active'));
      dots.forEach((dot) => dot.classList.remove('active'));

      slides[this.currentSlide].classList.add('active');
      dots[this.currentSlide].classList.add('active');
    };

    prevBtn?.addEventListener('click', () => {
      this.currentSlide--;
      showSlide(this.currentSlide);
    });

    nextBtn?.addEventListener('click', () => {
      this.currentSlide++;
      showSlide(this.currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentSlide = index;
        showSlide(this.currentSlide);
      });
    });

    // Keyboard navigation
    const handleKeyboard = (e: KeyboardEvent) => {
      if (this.state.activeTab === 'posters') {
        if (e.key === 'ArrowLeft') {
          this.currentSlide--;
          showSlide(this.currentSlide);
        } else if (e.key === 'ArrowRight') {
          this.currentSlide++;
          showSlide(this.currentSlide);
        }
      }
    };
    document.addEventListener('keydown', handleKeyboard);
  }

  private currentSlide2 = 0;

  private attachSecondSlideshowListeners(): void {
    const slides = document.querySelectorAll<HTMLElement>('.slide-2');
    const dots = document.querySelectorAll<HTMLElement>('.dot-2');
    const prevBtn = document.querySelector<HTMLButtonElement>('.prev-slide-2');
    const nextBtn = document.querySelector<HTMLButtonElement>('.next-slide-2');

    const showSlide = (n: number) => {
      if (n >= slides.length) this.currentSlide2 = 0;
      if (n < 0) this.currentSlide2 = slides.length - 1;

      slides.forEach((slide) => slide.classList.remove('active'));
      dots.forEach((dot) => dot.classList.remove('active'));

      slides[this.currentSlide2].classList.add('active');
      dots[this.currentSlide2].classList.add('active');
    };

    prevBtn?.addEventListener('click', () => {
      this.currentSlide2--;
      showSlide(this.currentSlide2);
    });

    nextBtn?.addEventListener('click', () => {
      this.currentSlide2++;
      showSlide(this.currentSlide2);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentSlide2 = index;
        showSlide(this.currentSlide2);
      });
    });
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
