// src/components/Header.ts

export class Header {
  private activeTab: string;
  private onTabChange: (tabName: string) => void;

  constructor(activeTab: string, onTabChange: (tabName: string) => void) {
    this.activeTab = activeTab;
    this.onTabChange = onTabChange;
  }

  public render(): string {
    return `
      <header class="sticky-header">
        <nav class="header-nav">
          <button
            class="nav-tab ${this.activeTab === 'about' ? 'active' : ''}"
            data-tab="about"
          >
            Overview
          </button>
          <button
            class="nav-tab ${this.activeTab === 'roadmap' ? 'active' : ''}"
            data-tab="roadmap"
          >
            Campus Map
          </button>
          <button
            class="nav-tab ${this.activeTab === 'concepts' ? 'active' : ''}"
            data-tab="concepts"
          >
            Concepts & Keywords
          </button>
        </nav>
      </header>
    `;
  }

  public attachEventListeners(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.nav-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        if (tabName) {
          this.onTabChange(tabName);
        }
      });
    });
  }

  public updateActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}