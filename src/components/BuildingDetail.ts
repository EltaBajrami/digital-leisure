interface BuildingInfo {
  step: string;
  title: string;
  blurb: string;
  tryThis: string;
  connectedTo: string[];
  image: string;
  video: string; // YouTube embed URL
}

export class BuildingDetail {
  private buildingData: Map<string, BuildingInfo> = new Map([
    [
      '1',
      {
        step: '1',
        title: 'Main — Platforms & Daily Routines',
        blurb:
          'Main is where a lot of your daily systems pass through at once: mail, dining access, admin errands, schedules, and campus tech. Even when nothing feels especially digital, your time here is shaped by portals, IDs, notifications, and deadlines moving in the background.',
        tryThis:
          'Sit somewhere in Main for 10 minutes without opening Moodle, Gmail, or your phone. Just sit, wait, or people-watch.',
        connectedTo: [
          'Langdon Winner – “Do Artifacts Have Politics?”',
          'Janet Abbate – Inventing the Internet (infrastructure)',
          'Graham Pickren – “The Global Assemblage of Digital Flow”',
        ],
        image: '/src/main.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_MAIN', // TODO: replace
      },
    ],
    [
      '2',
      {
        step: '2',
        title: 'Library — Reading for Pleasure',
        blurb:
          'The library is built for focus, but it’s also one of the few places on campus where slow, uninterrupted leisure still makes sense. Reading here doesn’t have to be productive or efficient — it can just be quiet time with a book.',
        tryThis:
          'Pick a book just because it looks interesting and read one chapter for fun — not for class, not for notes.',
        connectedTo: [
          'Safiya Noble – Algorithms of Oppression',
          'Tarleton Gillespie – “The Relevance of Algorithms”',
          'Nissenbaum – “How Computer Systems Embody Values”',
        ],
        image: '/src/library.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_LIBRARY', // TODO: replace
      },
    ],
    [
      '3',
      {
        step: '3',
        title: 'Olmsted — Thinking Beyond the Screen',
        blurb:
          'Olmsted is where most of your digital thinking happens — laptops open, slides projected, tabs multiplying. It’s where you learn about platforms, data, and power, often while actively using those same systems.',
        tryThis:
          'After class, walk outside before opening your laptop or phone. Let the class end without immediately switching tabs.',
        connectedTo: [
          'Sadowski – “When Data is Capital”',
          'Couldry & Mejias – “Data Colonialism”',
          'Bender et al. – “On the Dangers of Stochastic Parrots”',
        ],
        image: '/src/olmsted.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_OLMSTED', // TODO: replace
      },
    ],
    [
      '4',
      {
        step: '4',
        title: 'Deece — Eating Without Distraction',
        blurb:
          'The Deece feels like downtime, but it runs on tight schedules, labor systems, and swipe-based efficiency. It’s one of the clearest places where convenience and speed quietly shape how you experience rest.',
        tryThis:
          'Eat one full meal without scrolling, watching, or listening to anything. Just eat and talk — or eat quietly.',
        connectedTo: [
          'Lilly Irani – “The Cultural Work of Microwork”',
          'Muldoon et al. – “A Typology of AI Data Work”',
          'Srnicek – Platform Capitalism (Chapter 2)',
        ],
        image: '/src/deece.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_DEECE', // TODO: replace
      },
    ],
    [
      '5',
      {
        step: '5',
        title: 'Sunset Lake — Unstructured Time & Being Outdoors',
        blurb:
          'Sunset Lake is one of the rare places on campus where time doesn’t automatically feel scheduled or optimized. It’s a space that supports wandering, sitting, walking, and being outside without a clear goal.',
        tryThis:
          'Walk one full lap around the lake at a normal pace. Don’t time it and don’t listen to anything — just walk.',
        connectedTo: [
          'Anna Tsing – “On Nonscalability”',
          'Ray Oldenburg – Third Places',
          'Tsing’s nonscalable life vs optimized platforms',
        ],
        image: '/src/sunsetlake.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_LAKE', // TODO: replace
      },
    ],
    [
      '6',
      {
        step: '6',
        title: 'AFC — Movement Without Metrics',
        blurb:
          'The AFC is full of numbers — reps, steps, timers, streaks. Movement here often becomes something to measure or “complete,” rather than something you just do for how it feels.',
        tryThis:
          'Go to the gym and move for 10–15 minutes without tracking anything — no timer, no streak, no app.',
        connectedTo: [
          'Sadowski – “When Data is Capital”',
          'Couldry & Mejias – Data Colonialism and extraction',
          'Srnicek – Platform logics applied to the body',
        ],
        image: '/src/afc.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_AFC', // TODO: replace
      },
    ],
    [
      '7',
      {
        step: '7',
        title: 'Vogelstein — Making Things Without Posting',
        blurb:
          'Vogelstein is a space for performance, art, and creativity, but it’s also connected to visibility and sharing. A lot of creative work today is shaped by whether it will be documented, liked, or posted.',
        tryThis:
          'Do something creative for 10–15 minutes — draw, write, play music, sketch ideas, or experiment with something — and don’t take a photo or post it anywhere.',
        connectedTo: [
          'Sasha Costanza-Chock – Design Justice (Introduction)',
          'Safiya Noble – search, race, and visibility',
          'Gillespie – Platforms and the politics of visibility',
        ],
        image: '/src/vogelstein.png',
        video: 'https://www.youtube.com/embed/VIDEO_ID_VOGEL', // TODO: replace
      },
    ],
  ]);

  public render(step: string): string {
    const building = this.buildingData.get(step);

    if (!building) {
      return `
        <div class="building-detail-page">
          <button class="back-button" id="back-to-roadmap">← Back to map</button>
          <div class="building-detail-content">
            <h2 class="building-detail-title">Unknown Stop</h2>
            <p>We couldn&apos;t find this stop on the campus leisure map. Try going back and selecting another building.</p>
          </div>
        </div>
      `;
    }

    const videoSection = building.video
      ? `
        <div class="building-detail-video" style="margin-top: 2rem; max-width: 720px;">
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
            <iframe
              src="${building.video}"
              title="${building.title} video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            ></iframe>
          </div>
        </div>
      `
      : '';

    return `
      <div class="building-detail-page">
        <button class="back-button" id="back-to-roadmap">← Back to map</button>
        <div class="building-detail-content">
          <h2 class="building-detail-title">${building.title}</h2>

          <div class="building-detail-image-container">
            <img
              src="${building.image}"
              alt="${building.title}"
              class="building-detail-image"
            />
          </div>

          <div class="building-detail-description">
            <p class="bd-blurb">
              ${building.blurb}
            </p>

            <div class="bd-try" style="margin-top: 1.25rem;">
              <div
                class="bd-try-label"
                style="
                  font-weight: 600;
                  font-size: 0.9rem;
                  letter-spacing: 0.04em;
                  text-transform: uppercase;
                  margin-bottom: 0.35rem;
                "
              >
                Try this here
              </div>
              <p class="bd-try-text" style="font-size: 0.98rem; line-height: 1.6;">
                ${building.tryThis}
              </p>
            </div>

            ${videoSection}

            <div class="bd-sources" style="margin-top: 1.5rem;">
              <div
                class="bd-sources-label"
                style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.3rem;"
              >
                Connected to:
              </div>
              <ul
                class="bd-sources-list"
                style="list-style: disc; padding-left: 1.2rem; font-size: 0.95rem; line-height: 1.6;"
              >
                ${building.connectedTo.map((text) => `<li>${text}</li>`).join('')}
              </ul>
            </div>
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
