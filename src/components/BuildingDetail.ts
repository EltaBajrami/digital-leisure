interface BuildingInfo {
  step: string;
  title: string;
  titleImage: string;
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
        title: 'Main',
        titleImage: '/main-word.png',
        blurb:
          'Main looks analog, but nearly every routine here runs on digital platforms. Even when nothing feels digital, digital systems are everywhere. From scanning your ID to swiping in Retreat, your data is being collected all around you.',
        tryThis:
          'Sit in Main for 10 minutes without opening any devices. Observe boredom, conversations, and how often you want to check something.',
        connectedTo: [
          'Langdon Winner – “Do Artifacts Have Politics?”',
          'Janet Abbate – Inventing the Internet (infrastructure)',
          'Graham Pickren – “The Global Assemblage of Digital Flow”',
        ],
        image: '/main.png',
        video: 'https://www.youtube.com/embed/b-r6q7ie_yA',
      },
    ],
    [
      '2',
      {
        step: '2',
        title: 'Library',
        titleImage: '/library-word.png',
        blurb:
          "The library is built for focus, but it's also one of the few places on campus where slow, uninterrupted leisure still makes sense. Reading here doesn't have to be productive or efficient, it can just be quiet time with a book. In a digital environment shaped by recommendations, notifications, and algorithmic nudges, the library offers a rare space for unstructured attention.",
        tryThis:
          'Pick a book just because it looks interesting and read one chapter for fun.',
        connectedTo: [
          'Safiya Noble – Algorithms of Oppression',
          'Tarleton Gillespie – “The Relevance of Algorithms”',
          'Nissenbaum – “How Computer Systems Embody Values”',
        ],
        image: '/library.png',
        video: 'https://www.youtube.com/embed/juVXUPTCa00',
      },
    ],
    [
      '3',
      {
        step: '3',
        title: 'Olmsted',
        titleImage: '/olmsted-word.png',
        blurb:
          "As a classroom building and where we have this class, consider how Olmsted is where a lot of your digital thinking happens. It's where we learn about platforms, data, and power, often while actively using those same systems. Classes like ours depend on platforms like Moodle and Google Docs, while also educating on how they operate and the dangers that come with being too dependent on these digital systems. ",
        tryThis:
          'After class, walk outside before opening your laptop or phone. Let the class end without immediately switching to a version of digital leisure. Notice how long the urge to check something lasts before giving in.',
        connectedTo: [
          'Sadowski – “When Data is Capital”',
          'Couldry & Mejias – “Data Colonialism”',
          'Bender et al. – “On the Dangers of Stochastic Parrots”',
        ],
        image: '/olmsted.png',
        video: 'https://www.youtube.com/embed/ArI6albrkuY',
      },
    ],
    [
      '4',
      {
        step: '4',
        title: 'The Deece',
        titleImage: '/deece-word.png',
        blurb:
          'The dining hall is a social space which provides a natural break in the day for meals. Digital devices often interrupt this form of leisure, replacing conversation with scrolling and texting.',
        tryThis:
          'Eat one meal without your phone on the table. Just enjoy the food and whoever you’re with (or the quiet if you’re alone). Observe what changes. How was this a different experience if you’re used to using your phone while you eat?',
        connectedTo: [
          'Lilly Irani – “The Cultural Work of Microwork”',
          'Muldoon et al. – “A Typology of AI Data Work”',
          'Srnicek – Platform Capitalism (Chapter 2)',
        ],
        image: '/deece.png',
        video: 'https://www.youtube.com/embed/nsSEsAZhl8Q',
      },
    ],
    [
      '5',
      {
        step: '5',
        title: 'Sunset Lake',
        titleImage: '/sunsetlake-word.png',
        blurb:
          "Sunset Lake is one of the rare places on campus where time doesn't automatically feel scheduled or optimized. It's a space that supports wandering, sitting, walking, and being outside without a clear goal.",
        tryThis:
          'Walk one full lap around the lake at a normal pace. Try to feel present and enjoy nature and the walk.',
        connectedTo: [
          'Anna Tsing – “On Nonscalability”',
          'Ray Oldenburg – Third Places',
          'Tsing’s nonscalable life vs optimized platforms',
        ],
        image: '/sunsetlake.png',
        video: 'https://www.youtube.com/embed/1PP7Sv-2yFs',
      },
    ],
    [
      '6',
      {
        step: '6',
        title: 'AFC',
        titleImage: '/afc-word.png',
        blurb:
          'The AFC is filled with numbers (reps, steps, minutes, goals). Digital fitness culture turns movement into data: something to measure, record, or improve! In this environment, exercise can shift from an embodied experience to a productivity task. ',
        tryThis:
          'Move for 10 - 15 minutes without tracking anything. Just stretch, walk, lift, or move however you want. Notice how your attention shifts when you’re not counting.',
        connectedTo: [
          'Sadowski – “When Data is Capital”',
          'Couldry & Mejias – Data Colonialism and extraction',
          'Srnicek – Platform logics applied to the body',
        ],
        image: '/afc.png',
        video: 'https://www.youtube.com/embed/5wfnF5y1aeA',
      },
    ],
    [
      '7',
      {
        step: '7',
        title: 'Vogelstein — Making Things Without Posting',
        titleImage: '/vogelstein-word.png',
        blurb:
          "Vogelstein is a space for performance, art, and creativity, but it's also connected to visibility and sharing. A lot of creative work today is shaped by whether it will be documented, liked, or posted.",
        tryThis:
          'Do something creative for 10–15 minutes! Draw, write, play music, sketch ideas, or experiment with something  and don’t take a photo or post it anywhere. Let the work exist only in the moment, without an audience!',
        connectedTo: [
          'Sasha Costanza-Chock – Design Justice (Introduction)',
          'Safiya Noble – search, race, and visibility',
          'Gillespie – Platforms and the politics of visibility',
        ],
        image: '/vogelstein.png',
        video: 'https://www.youtube.com/embed/uA70ZGCC1f4',
      },
    ],
  ]);

  private videoText: Record<string, string> = {
    '1': 'This video looks at how digital platforms shape the way people connect, and how being constantly “online” doesn’t always lead to feeling present or close to others. It reflects on the gap between connection, attention, and real social experience in everyday life.',
    '2': 'This video argues that reading trains patience and focus in a world built around constant digital stimulation. It describes reading as a form of resistance against the constant urge to check phones and apps.',
    '3': 'This video explains how technology is racing ahead faster than education can keep up, creating gaps in knowledge and power. It warns that when only a few people understand how digital systems work, inequality grows and the rest of society is left behind.',
    '4': 'This video shows how the digital world has woven itself into the way we buy and think about food, from delivery apps to online groceries. It explains how constant nudges and deals can change what we eat, who we eat with, and how money and connection flow through a neighborhood.',
    '5': 'This video reflects on how modern life has pulled many people away from a felt connection to the land and their own bodies. It suggests that slowing down, breathing, and paying attention to bodily experience are ways of re-grounding ourselves in nature and rebuilding a sense of belonging.',
    '6': 'This video explains how many digital systems are designed to pull our attention through tracking, clicks, and constant feedback. It suggests that quick hits of satisfaction from data don’t lead to long-term well-being, and that meaning comes from choosing how we engage rather than being driven by numbers.',
    '7': 'This video shows how AI is becoming part of the creative process, blurring the line between human imagination and machine generation. It raises questions about originality, authorship, and what it means to create when images are produced from massive existing data sets. It suggests that making art today is not just aesthetic, but also ethical and political.',
  };

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
          <p style="margin-top: 0.75rem; font-size: 0.95rem; line-height: 1.6;">
            ${this.videoText[step] || ''}
          </p>
        </div>
      `
      : '';

    return `
      <div class="building-detail-page">
        <button class="back-button" id="back-to-roadmap">← Back to map</button>
        <div class="building-detail-content">
          <div style="text-align: center; margin-bottom: 1.5rem;">
            <img
              src="${building.titleImage}"
              alt="${building.title}"
              style="max-width: 500px; width: 100%; height: auto; display: block; margin: 0 auto;"
            />
          </div>

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
