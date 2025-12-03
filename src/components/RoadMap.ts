export type ImageClickCallback = (step: string) => void;

export class RoadMap {
  private onImageClick?: ImageClickCallback;

  public setImageClickCallback(callback: ImageClickCallback): void {
    this.onImageClick = callback;
  }

  public render(): string {
    return `
      <div class="roadmap-container">
        <h3 class="roadmap-title">Campus Leisure Map</h3>
        <p style="max-width: 650px; margin: 0.75rem auto 1.5rem; font-size: 0.98rem; line-height: 1.6;">
          Follow this map through familiar Vassar spaces. Each stop is a prompt to notice how digital systems already
          shape your “down time” here – and to imagine slower, less optimized forms of leisure in the very same places.
          Click any building to open a deeper reflection.
        </p>

        <div class="roadmap-timeline">
          <!-- Step 1: Main -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Main – Portals & Platforms</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A hub of mail, meetings, and campus logistics. Think about how ID cards, email, and apps quietly
                  choreograph your movements long before you call any of it “leisure.”
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
                <h4 class="concepts-section-title">Library – Archives & Algorithms</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A classic third space that is also saturated with search engines, databases, and recommendation
                  systems that shape what you read, research – and even how you take breaks.
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
                  Click the library to think about attention, discovery, and rest.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 3: Olmsted -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Olmsted – Classrooms & Critical Digital Lives</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Home of lectures, laptops, and this very course. How do ideas about infrastructure, bias, and gig
                  work travel back out into the ways you actually spend time on campus?
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
                  Click Olmsted to connect classroom theory to daily rhythms.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 4: Deece -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Deece – Convenience, Labor & Platform Capitalism</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Meals feel like downtime, but behind swipe access and buffet ease are invisible schedules, supply
                  chains, and workers. What does “relaxation” mean in a space built on tightly managed time?
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
                  Click the Deece to zoom in on convenience and hidden labor.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 5: Sunset Lake -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Sunset Lake – Third Spaces & Slowness</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Hammocks, blankets, long conversations: a rare campus space where time can stretch. How do phones and
                  feeds enter even here – and what might it feel like to be offline together?
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
                  Click the lake to think about third spaces and nonscalable life.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 6: AFC -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">AFC – Quantified Bodies & Gamified Rest</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  A building full of metrics, streaks, and leaderboards. When does movement feel like care, and when
                  does it become another productivity project for fitness platforms and wearables?
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
                  Click the AFC to explore the pull of quantification.
                </p>
              </div>
            </div>
          </section>

          <!-- Step 7: Vogelstein -->
          <section class="roadmap-step">
            <div class="roadmap-row">
              <div class="roadmap-item">
                <h4 class="concepts-section-title">Vogelstein – Aesthetics, Influence & Being Seen</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">
                  Performance, images, and experimentation live here – just like on social platforms. What kinds of
                  expression feel “postable,” and what stays off the grid?
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
                  Click Vogelstein to sit with visibility, creativity, and leisure.
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
