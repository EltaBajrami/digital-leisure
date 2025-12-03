export type ImageClickCallback = (step: string) => void;

export class RoadMap {
  private onImageClick?: ImageClickCallback;

  public setImageClickCallback(callback: ImageClickCallback): void {
    this.onImageClick = callback;
  }
  public render(): string {
    return `
      <div class="roadmap-container">
        <h3 class="roadmap-title">Vassar Leisure Roadmap</h3>
<p style="margin-bottom: 1.5rem; font-size: 1rem; max-width: 520px;">
  A campus map that links buildings, digital systems, and the ways you rest, scroll, study, and socialize at Vassar.
</p>

        <div class="roadmap-timeline">
          <!-- Timeline line -->
          <div class="timeline-line"></div>

          <!-- Step 1 -->
          <div class="roadmap-step" style="top: 0px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/main.png" alt="Main" class="building-image clickable-image" data-step="1"/>
                <p class="roadmap-description">Main</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="roadmap-step" style="top: 280px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/library.png" alt="Library" class="building-image clickable-image" data-step="2" />
                <p class="roadmap-description">Library</p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="roadmap-step" style="top: 560px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/olmsted.png" alt="Olmsted Building" class="building-image clickable-image" data-step="3" />
                <p class="roadmap-description">Olmsted</p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="roadmap-step" style="top: 840px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/deece.png" alt="Deece" class="building-image clickable-image" data-step="4" />
                <p class="roadmap-description"> Deece </p>
              </div>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="roadmap-step" style="top: 1120px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/sunsetlake.png" alt="Sunset Lake" class="building-image clickable-image" data-step="5" />
                <p class="roadmap-description">Sunset Lake</p>
              </div>
            </div>
          </div>

          <!-- Step 6 -->
          <div class="roadmap-step" style="top: 1400px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-right">
              <div class="roadmap-building">
                <img src="/src/afc.png" alt="AFC" class="building-image clickable-image" data-step="6" />
                <p class="roadmap-description"> AFC </p>
              </div>
            </div>
          </div>

          <!-- Step 7 -->
          <div class="roadmap-step" style="top: 1600px;">
            <div class="roadmap-marker marker-red"></div>
            <div class="roadmap-item roadmap-left">
              <div class="roadmap-building">
                <img src="/src/vogelstein.png" alt="Vogelstein" class="building-image clickable-image" data-step="7" />
                <p class="roadmap-description">Vogelstein</p>
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


