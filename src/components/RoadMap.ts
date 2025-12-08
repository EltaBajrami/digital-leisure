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
            src="/campusroadmap-word.png"
            alt="Campus RoadMap"
            class="roadmap-header-word"
            loading="lazy"
          />
        </div>

        <p class="roadmap-intro">
          Follow this map through familiar Vassar spaces. <br> Each stop is a prompt to notice how digital systems already
          shape your leisure.
        </p>

        <div class="roadmap-timeline">
          <!-- Step 1: Main -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/main-word.png"
                    alt="Main — Digital routines"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In Main, digital infrastructure quietly runs everything.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/main.png"
                  alt="Main Building"
                  class="building-image clickable-image"
                  data-step="1"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click Main to explore how digital systems quietly organize everyday campus routines.
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
                    src="/library-word.png"
                    alt="Library — Reading for Pleasure"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In the Library, slow reading and deep focus still belong.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/library.png"
                  alt="Vassar Library"
                  class="building-image clickable-image"
                  data-step="2"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click the library to think about discovery, attention, and reading outside the algorithm.
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
                    src="/olmsted-word.png"
                    alt="Olmsted — Critique vs Habit"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In Olmsted, we learn with the same systems we critique.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/olmsted.png"
                  alt="Olmsted Hall"
                  class="building-image clickable-image"
                  data-step="3"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click Olmsted to connect leisure, learning, and the platforms that support both.
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
                    src="/deece-word.png"
                    alt="Deece — Convenience & Labor"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In the Deece, meals can be shared without phones.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/deece.png"
                  alt="The Deece"
                  class="building-image clickable-image"
                  data-step="4"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click the Deece to look at how digital systems interrupt natural pauses for rest and conversation.
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
                    src="/sunsetlake-word.png"
                    alt="Sunset Lake — Third Space & Unstructured Time"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">At Sunset Lake, time is unstructured and not optimized.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/sunsetlake.png"
                  alt="Sunset Lake"
                  class="building-image clickable-image"
                  data-step="5"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click the lake to think about nature, third places, and offline breaks from optimization.
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
                    src="/afc-word.png"
                    alt="AFC — Movement & Metrics"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In the AFC, movement doesn’t have to be tracked or counted.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/afc.png"
                  alt="Athletic and Fitness Center"
                  class="building-image clickable-image"
                  data-step="6"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click the AFC to explore how tracking and numbers change the experience of moving your body.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 7: Vogelstein -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <div class="roadmap-title-image">
                  <img
                    src="/vogelstein-word.png"
                    alt="Vogelstein — Creativity & Being Seen"
                    class="roadmap-title-word"
                    loading="lazy"
                  />
                </div>
                <p class="roadmap-tldr">In Vogelstein, you can create without ever posting.</p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/vogelstein.png"
                  alt="Vogelstein Center for Drama and Film"
                  class="building-image clickable-image"
                  data-step="7"
                  role="button"
                  tabindex="0"
                  loading="lazy"
                />
                <p class="roadmap-description">
                  Click Vogelstein to think about creativity in a digital age where everything can be documented.
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
      const handler = () => {
        const step = image.getAttribute('data-step');
        if (step && this.onImageClick) {
          this.onImageClick(step);
        }
      };

      image.addEventListener('click', handler);
      image.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handler();
        }
      });
    });
  }
}
