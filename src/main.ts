import './style.css';
import { Header } from './components/Header';
import { RoadMap } from './components/RoadMap';
import { BuildingDetail } from './components/BuildingDetail';
import { KeyConcepts } from './components/KeyConcepts';

interface AppState {
  activeTab: string;   // 'about' | 'roadmap' | 'concepts' | 'posters'
  currentPage: string; // 'roadmap' or building step number ("1"..."7")
}

class App {
  private state: AppState;
  private header: Header;
  private roadMap: RoadMap;
  private buildingDetail: BuildingDetail;
  private keyConcepts: KeyConcepts;
  private customTerms: Array<{ term: string; definition: string }> = [];

  private currentSlide = 0;
  private currentSlide2 = 0;

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
          <div class="welcome-title-image">
            <img
              src="/title-word.png"
              alt="Leisure in the Digital Age"
              class="welcome-title-word"
            />
          </div>

          <p
            style="
              margin-top: 0.2rem;
              margin-bottom: 1.25rem;
              font-size: 0.95rem;
              letter-spacing: 0.04em;
              text-transform: uppercase;
              opacity: 0.8;
            "
          >
            <strong> STS-236 </strong> <em> digital lives </em> : a final project by Alexandra, Ella, & Elta
          </p>
          
          <!-- main intro text from your new copy -->
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.5rem;">
            This site is a small guide for noticing how your free time is shaped by digital systems.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.5rem;">
            Our campus roadmap links these ideas to familiar Vassar buildings. At each stop, you’re invited to ask:
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-left: 1rem; margin-bottom: 0.5rem;">
            <span style="display:block;">What does “rest” look like here?</span>
            <span style="display:block;">Who makes it possible?</span>
            <span style="display:block;">Whose time, data, or labor is being organized in the background?</span>
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">
            The goal isn’t to give up digital leisure, but to imagine different ways of taking a break.
          </p>

          <p
            style="
              font-size: 0.95rem;
              margin-top: 0.25rem;
              margin-bottom: 1.25rem;
              opacity: 0.85;
            "
          >
          </p>

          <div style="margin: 1.5rem 0 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">WEBSITE FEATURES:</h4>
            <ul style="font-size: 0.98rem; line-height: 1.7; padding-left: 1.2rem; margin-bottom: 0.5rem;">
              <li><strong>CAMPUS ROADMAP:</strong> Click each building to learn more about relevant ideas!</li>
              <li><strong>CONCEPTS & KEYWORDS:</strong> Study keywords to build your digital literacy.</li>
              <li><strong>POSTERS:</strong> Explore a project by our peers!</li>

              </ul>
          </div>


         <!-- Expandable Section (your new text) -->
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
              <span>How “taking a break” has changed : </span>
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
                Before digital platforms, leisure often meant active, self-chosen participation: reading, crafts, games,
                hanging out in common rooms or cafés.
              </p>
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Today, much of our rest is filtered through platforms, recommendation systems, and metrics. Breaks turn
                into scrolling, autoplay, and personalized feeds designed to keep your attention. Your “free time” is
                also valuable data that can be tracked, sorted, and sold.
              </p>
              <p style="line-height: 1.7;">
                This project asks what is gained (and what is lost) when rest is shaped by infrastructures and
                algorithms, and where on campus you can still make time that feels slower, less “efficient”, and more
                your own.
              </p>
            </div>
          </div>

          <!-- Timeline + Door layout (immediately after features) -->
          <div
            class="timeline-section"
            style="display: ${this.state.activeTab === 'about' ? 'flex' : 'none'}; margin-top: 2rem;"
          >
            <div class="timeline-container">
              <div class="timeline-line"></div>
            
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>INVISIBLE SYSTEMS</strong><br>
                    clouds, cables, algorithms, and labor sit beneath "seamless" leisure
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>DATA AS POWER</strong><br>
                    online activity becomes extractable data and influence
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>PRECARITY & INEQUALITY</strong><br>
                    platform labor and code embed and scale old hierarchies
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>NO NEUTRAL AI</strong><br>
                    systems amplify existing social biases rather than objective truth
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>SLOWING DOWN</strong><br>
                    reintroducing mindful practices back into leisure
                  </div>
                </div>
              </div>
            </div>

            <!-- Door image as second column -->
            <div class="timeline-door">
              <img
                id="door-toggle"
                src="/door.png"
                alt="Sketch of a door"
                data-closed-src="/door.png"
                data-open-src="/1.gif"
                style="
                  max-width: 700px;
                  width: 100%;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                "
              /> 
            </div>
          </div>

            <p style="
                padding: 0.25rem 0.7rem;
                border-radius: 999px;
                background: rgba(255, 230, 199, 0.95);
                border: 1px solid rgba(154, 81, 37, 0.6);
                font-size: 0.7rem;
                font-family: 'Monospace', monospace;
                letter-spacing: 0.06em;
                text-transform: lowercase;
                color: var(--warm-ink);
                box-shadow: 0 2px 4px rgba(0,0,0,0.15);
                text-align: center;
                margin-top: 0.1rem;
                margin-left: 45rem;
                margin-right: 3rem;
                display: inline-block;
              ">
                Click on the door to watch a video snippet from <a href="https://www.youtube.com/watch?v=BFvVWWp14d4" target="_blank" rel="noopener noreferrer" style="color: var(--warm-ink); ">
Bundled, Buried & Behind Closed Doors </a> documentary
              </p>


          <!-- Info cards section: three small cards -->
          <div class="info-cards" style="margin-top: 3rem;">
            <div class="card">
              <div class="card-accent accent-pink"></div>
              <div class="card-icon" aria-hidden="true">What is Leisure</div>
              <p class="card-body">
                "... In other words, a sense of freedom more than anything else defines what leisure is to people."
                </p>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10011693/" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
            <div class="card">
              <div class="card-accent accent-blue"></div>
              <div class="card-icon" aria-hidden="true">Algorithmic Anxiety</div>
              <p class="card-body">
                "It can feel as though every app is trying to guess what you want before your brain has time to 
                come up with its own answer, like an obnoxious party guest who finishes your sentences as you speak them..." 
              </p>
              <a href="https://www.newyorker.com/culture/infinite-scroll/the-age-of-algorithmic-anxiety" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
            <div class="card">
              <div class="card-accent accent-yellow"></div>
              <div class="card-icon" aria-hidden="true">The Third Space</div>
              <p class="card-body">
                "These small steps help me reconnect with the world around me, fostering vital social connections that technology can never replace."
              </p>
              <a href="https://medium.com/@caine_chan/rediscovering-connection-the-importance-of-third-spaces-in-a-digital-world-75f5167c358f" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
          </div>

          <!-- External readings (expandable like shift-content) -->
          <div style="margin-top: 1.5rem;">
            <button
              id="expand-readings-btn"
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
              <span>External readings about leisure in the digital age:</span>
              <span
                id="expand-readings-icon"
                style="font-size: 1.3rem; transition: transform 0.3s ease;"
              >▼</span>
            </button>
            <div
              id="readings-content"
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
              <ul style="font-size: 0.95rem; line-height: 1.7; padding-left: 1.2rem;">
                <a href="https://files.eric.ed.gov/fulltext/EJ1409784.pdf" target="_blank" rel="noopener noreferrer"> <li><em>Digital Leisure: Transformation of Leisure Activities</em> by Ömer Faruk Tutar</li></a>
                <a href="https://washingtonbeerblog.com/the-digitalization-of-leisure-and-its-social-implications/" target="_blank" rel="noopener noreferrer"><li><em>The Digitalization of Leisure and Its Social Implications</em></li></a>
                <a href="https://medium.com/unhcr-innovation-service/entertainment-for-well-being-why-the-future-of-digital-in-humanitarianism-will-be-shaped-by-e53402e202d7" target="_blank" rel="noopener noreferrer"><li><em>Entertainment for well-being: Why leisure will shape the future of digital in humanitarianism</em></li></a>
                <a href="https://www.sciencedirect.com/science/article/pii/S147383762500036X" target="_blank" rel="noopener noreferrer"><li>
                  <em>Digital leisure use and psychological well-being among recreation management students:
                  The mediating role of social media engagement</em> by Kubra Asan
                </li></a>
                <a href="https://www.researchgate.net/publication/274698150_Digital_leisure_study_The_consumption_experience_habits_and_social_uses" target="_blank" rel="noopener noreferrer"><li>
                  <em>Digital leisure study: The consumption experience, habits and social uses</em> by Laura Rojas de Francisco
                </li></a>
                <a href="https://www.nortisjournal.com/index.php/pub/article/view/3/8" target="_blank" rel="noopener noreferrer"><li><em>Digital Recreation and Artificial Leisure: A Philosophical Inquiry</em> by Rojhat Aydin</li></a>
              </ul>
            </div>
          </div>

            </div>
          </div>
        </div>
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
        <div
          class="posters-title-image"
          style="margin-bottom: 2rem; text-align: left;"
        >
          <img
            src="/posters-word.png"
            alt="Posters"
            class="posters-title-word"
            style="max-width: 650px; width: 100%; height: auto; display: block;"
          />
        </div>

          <p
    style="
      margin-bottom: 2rem;
      font-weight: 500;
      font-size: 1.05rem;
      opacity: 0.85;
      letter-spacing: 0.02em;
    "
  <p>
  Want to see more work from our peers in STS-236 Digital Lives?<br>
  Check out these posters made by Sofia and JD!
</p>



        <div class="slideshow-container">
          <div class="slide active">
            <img src="/page1.jpg" alt="Poster 1">
          </div>
          <div class="slide">
            <img src="/page 2.jpg" alt="Poster 2">
          </div>
          <div class="slide">
            <img src="/page 3.jpg" alt="Poster 3">
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
            <img src="/YellowChat1.png" alt="Yellow Chat 1">
          </div>
          <div class="slide-2">
            <img src="/YellowChat2.png" alt="Yellow Chat 2">
          </div>
          <div class="slide-2">
            <img src="/YellowChat3.png" alt="Yellow Chat 3">
          </div>
          <div class="slide-2">
            <img src="/YellowChat4.png" alt="Yellow Chat 4">
          </div>
          <div class="slide-2">
            <img src="/YellowChat5.png" alt="Yellow Chat 5">
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

      <footer>
        <p>&copy; ${new Date().getFullYear()} Leisure in the Digital Age · Digital Lives</p>
      </footer>
    `;

    // Reattach header tab listeners
    this.header.attachEventListeners();

    // Overview-specific behavior
    if (this.state.activeTab === 'about') {
      this.attachExpandButton();
      this.attachReadingsExpandButton();
      this.attachDoorToggle();
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

    // Posters tab: slideshows
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

  private attachReadingsExpandButton(): void {
    const expandBtn = document.getElementById('expand-readings-btn');
    const readingsContent = document.getElementById('readings-content');
    const expandIcon = document.getElementById('expand-readings-icon');

    if (expandBtn && readingsContent && expandIcon) {
      expandBtn.addEventListener('click', () => {
        const isExpanded = readingsContent.style.display === 'block';
        readingsContent.style.display = isExpanded ? 'none' : 'block';
        expandIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        expandBtn.style.background = isExpanded
          ? 'rgba(255, 230, 199, 0.5)'
          : 'rgba(255, 230, 199, 0.8)';
      });
    }
  }

  private attachDoorToggle(): void {
    const doorImg = document.getElementById('door-toggle') as HTMLImageElement | null;
    if (!doorImg) return;

    const closedSrc = doorImg.dataset.closedSrc || doorImg.getAttribute('src') || '';
    const openSrc = doorImg.dataset.openSrc || closedSrc;

    doorImg.onclick = () => {
      const currentSrc = doorImg.getAttribute('src');
      if (currentSrc === closedSrc) {
        doorImg.setAttribute('src', openSrc);
        doorImg.classList.add('gif-open');
      } else {
        doorImg.setAttribute('src', closedSrc);
        doorImg.classList.remove('gif-open');
      }
    };
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
    this.state.currentPage = 'roadmap';

    // keep header in sync
    if ('updateActiveTab' in this.header && typeof (this.header as { updateActiveTab?: (tab: string) => void }).updateActiveTab === 'function') {
      (this.header as { updateActiveTab: (tab: string) => void }).updateActiveTab(tabName);
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