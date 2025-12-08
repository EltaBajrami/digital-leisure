export type ImageClickCallback = (step: string) => void;

export class RoadMap {
  private onImageClick?: ImageClickCallback;

  public setImageClickCallback(callback: ImageClickCallback): void {
    this.onImageClick = callback;
  }

  public render(): string {
    return `
      <div class="roadmap-container">
        <div class="roadmap-header-image">
          <img
            src="/src/campusroadmap-word.png"
            alt="Campus RoadMap"
            class="roadmap-header-word"
          />
        </div>

        <p style="max-width: 650px; margin: 0.75rem auto 1.5rem; font-size: 0.98rem; line-height: 1.6;">
          Follow this map through familiar Vassar spaces. Each stop is a prompt to notice how digital systems already
          shape your leisure!
        </p>

        <div class="roadmap-timeline">
          <!-- Step 1: Main -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/main-word.png"
                    alt="Main"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/main.png"
                  alt="Main Building"
                  class="building-image clickable-image"
                  data-step="1"
                />
                <p class="roadmap-description">
                  Click Main to explore how digital systems are integrated into aspects of our everyday lives.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 2: Library -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/library-word.png"
                    alt="Library — Reading for Pleasure"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/library.png"
                  alt="Vassar Library"
                  class="building-image clickable-image"
                  data-step="2"
                />
                <p class="roadmap-description">
                  Click the library to think about discovery and attention.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 3: Olmsted -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/olmsted-word.png"
                    alt="Olmsted — Critique vs Habit"
                    class="roadmap-title-word"
                  />
                </div>
          
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/olmsted.png"
                  alt="Olmsted Hall"
                  class="building-image clickable-image"
                  data-step="3"
                />
                <p class="roadmap-description">
                  Click Olmsted to connect leisure and education.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 4: Deece -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/deece-word.png"
                    alt="Deece — Convenience & Labor"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/deece.png"
                  alt="The Deece"
                  class="building-image clickable-image"
                  data-step="4"
                />
                <p class="roadmap-description">
                  Click the Deece to look at how digital systems often interupt natural forms of leisure.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 5: Sunset Lake -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/sunsetlake-word.png"
                    alt="Sunset Lake — Third Space & Unstructured Time"
                    class="roadmap-title-word"
                  />
                </div>
            
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/sunsetlake.png"
                  alt="Sunset Lake"
                  class="building-image clickable-image"
                  data-step="5"
                />
                <p class="roadmap-description">
                  Click the lake to think about nature and offline breaks.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 6: AFC -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/afc-word.png"
                    alt="AFC — Movement & Metrics"
                    class="roadmap-title-word"
                  />
                </div>
          
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/afc.png"
                  alt="AFC"
                  class="building-image clickable-image"
                  data-step="6"
                />
                <p class="roadmap-description">
                  Click the AFC to explore movement. 
                </p>
              </div>
            </div>
          </section>s

          <!-- Step 7: Vogelstein -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/src/vogelstein-word.png"
                    alt="Vogelstein — Creativity & Being Seen"
                    class="roadmap-title-word"
                  />
                </div>
             
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/vogelstein.png"
                  alt="Vogelstein"
                  class="building-image clickable-image"
                  data-step="7"
                />
                <p class="roadmap-description">
                  Click Vogelstein to think about digital-age creativity .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  public attachEventListeners(): void {
    const images = document.querySelectorAll<HTMLImageElement>('.clickable-image');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        const step = image.getAttribute('data-step');
        if (step && this.onImageClick) {
          this.onImageClick(step);
        }
      });
    });
  }
}