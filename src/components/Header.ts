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
            Campus Roadmap
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

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        if (!tabName) return;

        this.setActiveTab(tabName);
        this.onTabChange(tabName);
      });
    });
  }

  private setActiveTab(tabName: string): void {
    this.activeTab = tabName;

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
