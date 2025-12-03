export type TabChangeCallback = (tabName: string) => void;

export class Header {
  private activeTab: string;
  private onTabChange: TabChangeCallback;

  constructor(activeTab: string, onTabChange: TabChangeCallback) {
    this.activeTab = activeTab;
    this.onTabChange = onTabChange;
  }

  public render(): string {
    return `
      <header class="sticky-header">
        <nav class="header-nav">
          <button class="nav-tab ${this.activeTab === 'about' ? 'active' : ''}" data-tab="about">
            Overview
          </button>
          <button class="nav-tab ${this.activeTab === 'modern' ? 'active' : ''}" data-tab="modern">
            Digital-Age Leisure
          </button>
          <button class="nav-tab ${this.activeTab === 'traditional' ? 'active' : ''}" data-tab="traditional">
            Traditional Leisure
          </button>

           <button class="nav-tab ${this.activeTab === 'posters' ? 'active' : ''}" data-tab="posters">
            Posters
          </button>
        </nav>
      </header>
    `;
  }

  public attachEventListeners(): void {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        if (tabName) {
          this.onTabChange(tabName);
        }
      });
    });
  }

  public updateActiveTab(tabName: string): void {
    this.activeTab = tabName;
    
    // Update active tab styling
    const tabs = document.querySelectorAll<HTMLButtonElement>('.nav-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
}

