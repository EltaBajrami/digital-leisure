interface BuildingInfo {
  step: string;
  title: string;
  description: string;
  image: string;
}

export class BuildingDetail {
  private buildingData: Map<string, BuildingInfo> = new Map([
    ['1', {
      step: '1',
      title: 'Main Building',
      description: 'This is the main building of our digital literacy project. It serves as the central hub where students can access the primary content and resources related to digital leisure. The building represents the foundation of our educational initiative, providing comprehensive information about digital literacy and modern leisure activities.',
      image: '/src/vassar_main.jpg'
    }],
    ['2', {
      step: '2',
      title: 'Library Building',
      description: 'The library building is a comprehensive resource center where students can find extensive materials about digital leisure. Just like a traditional library, this digital space offers curated resources, research materials, and educational content to help students explore and understand various aspects of digital leisure activities.',
      image: '/src/vassar_main.jpg'
    }],
    ['3', {
      step: '3',
      title: 'Olmsted Building',
      description: 'The Olmsted building is dedicated to exploring traditional and modern leisure activities. This building provides insights into how leisure has evolved over time, comparing traditional forms of recreation with contemporary digital leisure experiences.',
      image: '/src/vassar_main.jpg'
    }],
    ['4', {
      step: '4',
      title: 'Vassar Building',
      description: 'This Vassar building focuses on the intersection of education and digital leisure. It provides resources and information about how digital leisure activities can be integrated into educational contexts, promoting both learning and recreation.',
      image: '/src/vassar_main.jpg'
    }],
    ['5', {
      step: '5',
      title: 'Vassar Building',
      description: 'Another important Vassar building that explores the social aspects of digital leisure. This building examines how digital leisure activities create communities, foster connections, and contribute to social well-being in the digital age.',
      image: '/src/vassar_main.jpg'
    }],
    ['6', {
      step: '6',
      title: 'Vassar Building',
      description: 'This final Vassar building represents the future of digital leisure. It provides forward-looking perspectives on emerging trends, technologies, and practices in digital leisure, helping students prepare for the evolving landscape of digital recreation.',
      image: '/src/vassar_main.jpg'
    }]
  ]);

  public render(step: string): string {
    const building = this.buildingData.get(step);
    if (!building) {
      return '<p>Building not found</p>';
    }

    return `
      <div class="building-detail-page">
        <button class="back-button" id="back-to-roadmap">← Back to Roadmap</button>
        <div class="building-detail-content">
          <h2 class="building-detail-title">${building.title}</h2>
          <div class="building-detail-image-container">
            <img src="${building.image}" alt="${building.title}" class="building-detail-image" />
          </div>
          <div class="building-detail-description">
            <p>${building.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  public attachEventListeners(onBack: () => void): void {
    const backButton = document.getElementById('back-to-roadmap');
    if (backButton) {
      backButton.addEventListener('click', onBack);
    }
  }
}

