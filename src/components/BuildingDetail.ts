interface BuildingInfo {
  step: string;
  title: string;
  description: string;
  image: string;
  questions: string[];
}

export class BuildingDetail {
  private buildingData: Map<string, BuildingInfo> = new Map([
    [
      '1',
      {
        step: '1',
        title: 'Main Building – Portals & Platforms',
        description:
          'Main is the entry point for so many Vassar routines: mailroom lines, admin errands, quick lunches between classes. In this project, Main stands in for the “platform stack” that quietly structures everyday life – from course portals to email, ID cards, and campus apps.\n\nThink with Winner’s question, “Do artifacts have politics?”: the doors that unlock, the hours things are open, the flows of bodies up and down the stairs are not neutral. Main is where infrastructures, schedules, and rules decide whose time is flexible and whose is tightly managed.\n\nAs you move through Main, whose time are you following – your own rhythms, or the schedules, alerts, and deadlines pushed by digital systems? What would it mean to reclaim pockets of un-optimized time here, to treat the building not just as a hub of tasks, but as a place to slow down, linger, and notice how platforms script your day?',
        image: '/src/main.png',
        questions: [
          'Where in Main do you most feel “on the clock,” and who set that clock?',
          'Which parts of Main feel like pure infrastructure (just passing through), and which could be reclaimed as third spaces?',
          'If Main were designed around slowness instead of efficiency, what would actually look different?'
        ]
      }
    ],
    [
      '2',
      {
        step: '2',
        title: 'Library – Archives, Algorithms & Attention',
        description:
          'The library is a classic “third space”: quiet tables, group study rooms, and stacks that invite wandering. At the same time, it is saturated with algorithmic systems – discovery tools, databases, search engines – that decide which texts feel visible, relevant, or “findable.”\n\nHere, leisure overlaps with study. Maybe you come to the library to read for fun, scroll, or daydream. But Nissenbaum reminds us that computer systems embody values, and Noble shows how search results can reproduce racial and gendered hierarchies. Even when you think you are freely browsing, recommendation systems and ranking algorithms are quietly steering your attention.\n\nImagine the library as a counter-platform: a space where you can resist endless feeds and practice slower, more intentional forms of reading, research, and rest. What happens if you treat getting lost in the stacks, or finishing a chapter without checking your phone, as a form of digital refusal?',
        image: '/src/library.png',
        questions: [
          'When you “just look something up,” which systems are deciding what you see first?',
          'What is one way you could use the library as a space for nonscalable leisure (time that does not easily become content or data)?'
        ]
      }
    ],
    [
      '3',
      {
        step: '3',
        title: 'Olmsted – Classrooms & Critical Digital Lives',
        description:
          'Olmsted holds so many conversations from this course: about infrastructures, data colonialism, gig work, bias, AI, and the politics of visibility. It represents the formal classroom – where “learning about” digital systems sometimes competes with actually living inside them (laptops, notifications, tabs, Zoom, Canvas).\n\nInside Olmsted, we map out the big theories: how platforms capture data (Sadowski), how algorithms shape culture (Gillespie, Striphas), how generative AI feels “helpful” while leaning on hidden labor and energy (Bender, Crawford). But outside of class, those same systems keep running in the background of your leisure.\n\nOlmsted in this project is a hinge: the place where critique and lived experience are supposed to meet. It asks whether ideas about justice, bias, and nonscalability stay trapped in lecture slides, or whether they actually change how you choose to rest, scroll, and show up in other spaces on campus.',
        image: '/src/olmsted.png',
        questions: [
          'Think of one idea from Digital Lives that changed how you experience “free time.” Where did you feel that most strongly on campus?',
          'How could a classroom like this one actively protect pockets of slowness or reflection instead of adding more optimization to your week?'
        ]
      }
    ],
    [
      '4',
      {
        step: '4',
        title: 'Deece – Convenience, Labor & Platform Capitalism',
        description:
          'The Deece looks like an easy form of leisure: you swipe in, grab food, sit with friends, scroll between bites. But behind that convenience are complex infrastructures and labor regimes: supply chains, scheduling software, point systems, and the workers whose time is tightly organized.\n\nThink with Abbate and Pickren’s focus on infrastructure, and with Irani and Muldoon on microwork and AI data labor. The Deece stands in for platform capitalism’s promise of frictionless comfort – meals that appear as if by magic, at scale, every day. It raises the same questions as Uber Eats or DoorDash: whose work makes your break feel effortless, and under what conditions?\n\nWhen you treat the Deece as a break, whose time is actually being stretched, sped up, or standardized? How do apps, dining hours, and meal swipes discipline your day? Reimagining this space means asking how communal eating could feel less like throughput and more like shared, unhurried time – without erasing the people whose labor sustains it.',
        image: '/src/deece.png',
        questions: [
          'What kinds of labor are visible to you in the Deece, and what stays invisible but necessary?',
          'If dining were designed around care rather than throughput, what would change for workers, and what would change for you?'
        ]
      }
    ],
    [
      '5',
      {
        step: '5',
        title: 'Sunset Lake – Third Spaces, Slowness & Nonscalable Life',
        description:
          'Sunset Lake is one of the few places on campus where time can feel unstructured: hammocks, blankets, conversations that stretch past when you “should” go back inside. It represents the fragile third spaces that exist outside classrooms, dorms, and screens – places where being together is not automatically monetized, tracked, or optimized.\n\nHere, it becomes a site to think with Ray Oldenburg’s third place and Anna Tsing’s nonscalability. Some forms of care, rest, and joy do not scale well; they get thinner when you try to speed them up or turn them into content. At the same time, phones, notifications, and platforms follow you out to the water, tempting you to turn sunsets and hangouts into posts.\n\nThis stop on the map asks what forms of leisure simply do not map onto metrics, streaks, or engagement graphs. How might you protect spaces like this from becoming just another backdrop for content, and instead treat them as experiments in slowness, care, and non-productive presence?',
        image: '/src/sunsetlake.png',
        questions: [
          'Think of a moment at the lake (or a similar spot) that felt unproductive but meaningful. What made it nonscalable?',
          'What boundaries or rituals might help you keep at least some of this space off-platform?'
        ]
      }
    ],
    [
      '6',
      {
        step: '6',
        title: 'AFC – The Quantified Body & Gamified Movement',
        description:
          'The AFC is full of metrics: steps, reps, calories, heart rate, “closing your rings.” It mirrors how fitness apps, wearables, and leaderboards gamify movement and turn the body into a steady stream of data. Leisure here can feel like a self-improvement project – another dashboard to optimize rather than a playful, joyful relationship with your own body.\n\nThis is datafication at the scale of the body (Sadowski, Couldry & Mejias): each workout becomes a dataset that can be tracked, compared, and used to nudge future behavior. Algorithmic management shows up as reminders, streaks, and badges that tell you when you have been “good” or “lazy” today.\n\nIn this project, the AFC invites you to notice when exercise feels like care, and when it starts to resemble work for platforms that harvest your data. What would it look like to reclaim movement as low-stakes, goofy, or community-based – not always tracked or ranked, and not always aimed at becoming a more efficient student-worker?',
        image: '/src/afc.png',
        questions: [
          'When you move your body for fun, how different does it feel from moving to hit a metric?',
          'If you turned off tracking for a month, what would you lose—and what might you gain?'
        ]
      }
    ],
    [
      '7',
      {
        step: '7',
        title: 'Vogelstein – Aesthetics, Influence & Being Seen',
        description:
          'Vogelstein sits at the intersection of performance, images, and storytelling. It echoes the aesthetics of social media – feeds, filters, and the constant awareness of being watchable. Leisure often happens here through screen-based downtime between rehearsals, shows, or studio work, but it is also where people experiment with identity, style, and creative risk.\n\nThink with Costanza-Chock’s design justice and Noble’s algorithms of oppression: not all performances and bodies are made equally visible or valued by systems of classification and search. On platforms, some aesthetics are amplified while others are flattened or pushed to the margins. Vogelstein becomes a space to ask which versions of yourself feel “postable,” and why.\n\nIn this map, Vogelstein stands for the tension between genuine expression and algorithmic visibility: which moments do you share for friends, and which are shaped by imagined audiences, brands, or future employers? How could you treat art-making, hanging out, or even boredom here as a form of resistance to engagement metrics – a way of valuing what does not neatly convert into likes, views, or personal branding?',
        image: '/src/vogelstein.png',
        questions: [
          'What performances or creative experiments in your life never make it onto a feed—and why?',
          'How might you design a space (online or offline) where leisure and creativity are protected from metrics and self-branding?'
        ]
      }
    ]
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

    const descriptionHtml = building.description
      .split('\\n')
      .map((para) => `<p>${para}</p>`)
      .join('');

    const questionsHtml =
      building.questions && building.questions.length
        ? `
          <hr style="margin: 1.75rem 0; border: none; border-top: 1px dashed rgba(0,0,0,0.18);" />
          <h3 style="font-family: 'Tourney', cursive; font-size: 1.1rem; margin-bottom: 0.75rem;">
            Questions to sit with here
          </h3>
          <ul style="padding-left: 1.2rem; line-height: 1.7; font-size: 0.98rem;">
            ${building.questions.map((q) => `<li>${q}</li>`).join('')}
          </ul>
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
            ${descriptionHtml}
            ${questionsHtml}
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
