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
  }

  private render(container: HTMLElement): void {
    const isBuildingDetail = this.state.currentPage !== 'roadmap' && this.state.activeTab === 'about';
    
    container.innerHTML = `
      ${this.header.render()}
      <main class="content-section" id="about-welcome-content" style="display: ${this.state.activeTab === 'about' && !isBuildingDetail ? 'block' : 'none'}">
        <div class="welcome-section">
          <p class="welcome-title">Welcome to our Digital Literacy Website!</p>
          <p>The purpose of this website is to educate and inform students about digital leisure</p>
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
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });
} else {
  new App();
}

