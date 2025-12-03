export type ImageClickCallback = (step: string) => void;

export class RoadMap {
  private onImageClick?: ImageClickCallback;

  public setImageClickCallback(callback: ImageClickCallback): void {
    this.onImageClick = callback;
  }

  public render(): string {
    return `
      <div class="roadmap-container">
<h2
  class="roadmap-title"
  style="font-size: 3rem !important; line-height: 1.1; margin-bottom: 0.6rem;"
>
   Campus RoadMap
</h2>

        <p style="max-width: 650px; margin: 0.75rem auto 1.5rem; font-size: 0.98rem; line-height: 1.6;">
          Follow this map through familiar Vassar spaces. Each stop is a prompt to notice how digital systems already
          shape your “down time” here – and to try one small, slower activity in the same place.
        </p>

        <div class="roadmap-timeline">
          <!-- Step 1: Main -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Main — Platforms & Daily Routines</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A hub for mail, dining access, and admin tasks where portals, IDs, and schedules quietly set the pace
                  of your day long before you think about “leisure.”
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/main.png"
                  alt="Main Building"
                  class="building-image clickable-image"
                  data-step="1"
                />
                <p class="roadmap-description">
                  Click Main to explore how platforms script your routines.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 2: Library -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Library — Reading for Pleasure</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A space built for focus that also makes room for slow, non-productive reading and quiet time away from feeds.
                </p>
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
                <h4 class="concepts-section-title">Olmsted — Critique vs Habit</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Home of laptops, slides, and class discussions about digital systems that you step back into as soon as class ends.
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/olmsted.png"
                  alt="Olmsted Hall"
                  class="building-image clickable-image"
                  data-step="3"
                />
                <p class="roadmap-description">
                  Click Olmsted to connect class ideas to daily habits.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 4: Deece -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Deece — Convenience & Labor</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Meals feel easy and social here, but that ease is supported by tightly scheduled, often less visible work.
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/deece.png"
                  alt="The Deece"
                  class="building-image clickable-image"
                  data-step="4"
                />
                <p class="roadmap-description">
                  Click the Deece to look at comfort and invisible labor.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 5: Sunset Lake -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Sunset Lake — Third Space & Unstructured Time</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A place where time can slow down — walking, sitting, or talking without needing to track or document it.
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/sunsetlake.png"
                  alt="Sunset Lake"
                  class="building-image clickable-image"
                  data-step="5"
                />
                <p class="roadmap-description">
                  Click the lake to think about offline breaks.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 6: AFC -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">AFC — Movement & Metrics</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A building full of counters, streaks, and goals where exercise can turn into another thing to optimize.
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/afc.png"
                  alt="AFC"
                  class="building-image clickable-image"
                  data-step="6"
                />
                <p class="roadmap-description">
                  Click the AFC to explore moving without tracking.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 7: Vogelstein -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Vogelstein — Creativity & Being Seen</h4>
                <p style="font-size: 0.95rem; line-height: 1.6%;">
                  A space for rehearsals, shows, and art-making that sits close to questions of performance, documentation, and sharing.
                </p>
              </div>
              <div class="roadmap-building">
                <img
                  src="/src/vogelstein.png"
                  alt="Vogelstein"
                  class="building-image clickable-image"
                  data-step="7"
                />
                <p class="roadmap-description">
                  Click Vogelstein to think about making without posting.
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
