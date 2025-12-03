export type ImageClickCallback = (step: string) => void;

export class RoadMap {
  private onImageClick?: ImageClickCallback;

  public setImageClickCallback(callback: ImageClickCallback): void {
    this.onImageClick = callback;
  }
  public render(): string {
    return `
      <div class="roadmap-container">
        <h3 class="roadmap-title">Road Map</h3>
        <div class="roadmap-timeline">
          <!-- Timeline line -->
          <div class="timeline-line"></div>

          <!-- Step 1 -->
          <div class="roadmap-step" style="top: 0px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/main.jpeg" alt="Main Building" class="building-image clickable-image" data-step="1"/>
                <p class="roadmap-description">(Clickable image of main building showing main content from the source related to our project)</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="roadmap-step" style="top: 280px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/lib.jpeg" alt="Library Building" class="building-image clickable-image" data-step="2" />
                <p class="roadmap-description">Image of the library where (when they click they can find 'resources' about digital leisure like you find resources on a library)</p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="roadmap-step" style="top: 560px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/olmsted.jpeg" alt="Olmsted Building" class="building-image clickable-image" data-step="3" />
                <p class="roadmap-description">(Olmsted building)</p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="roadmap-step" style="top: 840px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/deece.jpeg" alt="Deece Building" class="building-image clickable-image" data-step="4" />
                <p class="roadmap-description"> Deece building</p>
              </div>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="roadmap-step" style="top: 1120px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/lake.jpeg" alt="Sunset Lake" class="building-image clickable-image" data-step="5" />
                <p class="roadmap-description">Sunset Lake</p>
              </div>
            </div>
          </div>

          <!-- Step 6 -->
          <div class="roadmap-step" style="top: 1400px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/afc.jpeg" alt="AFC Building" class="building-image clickable-image" data-step="6" />
                <p class="roadmap-description"> AFC building</p>
              </div>
            </div>
          </div>

          <!-- Step 7 -->
          <div class="roadmap-step" style="top: 1600px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/vogel.jpeg" alt="Vogelstein Building" class="building-image clickable-image" data-step="7" />
                <p class="roadmap-description">Vogelstein Building</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  public attachEventListeners(): void {
    const images = document.querySelectorAll<HTMLImageElement>('.clickable-image');
    images.forEach(image => {
      image.addEventListener('click', () => {
        const step = image.getAttribute('data-step');
        if (step && this.onImageClick) {
          this.onImageClick(step);
        }
      });
    });
  }
}


