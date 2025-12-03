export class KeyConcepts {
  public render(): string {
    return `
      <section>
        <h2 class="key-concepts-title">Concepts & Keywords</h2>
        <p style="max-width: 720px; margin-bottom: 1.5rem; font-size: 0.98rem; line-height: 1.7;">
          These terms come from <em>Digital Lives</em> and run quietly underneath the campus map. Click a bubble to see
          a plain-language definition and a small hint about how it shows up in everyday leisure.
        </p>

        <!-- Infrastructures & Platforms -->
        <h3 class="concepts-section-title">Infrastructures & Platforms</h3>
        <div class="concepts-bubbles">
          <span
            class="concept-bubble concept-has-definition"
            data-term="Infrastructure"
            data-definition="The physical and organizational systems that make digital life possible: cables, data centers, undersea fiber, logistics, standards. Often invisible until something breaks, but they shape who gets access to connection, speed, and convenience."
          >
            Infrastructure
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Platform"
            data-definition="A business model and technical architecture that connects different groups (users, advertisers, workers, developers) and sets the rules of interaction. Platforms extract data and value from those interactions while presenting themselves as neutral, open space."
          >
            Platform
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Platform Capitalism"
            data-definition="An economic system where a small number of platform companies (like Uber, Google, Amazon, TikTok) control key digital infrastructures and monetize data, labor, and attention at massive scale."
          >
            Platform Capitalism
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Third Space"
            data-definition="Informal, neutral spaces outside home and work (cafés, parks, libraries) where people gather, socialize, and rest without being directly managed. A key site for thinking about what leisure looks like when it is not fully optimized or monetized."
          >
            Third Space
          </span>
        </div>

        <!-- Data, Algorithms & AI -->
        <h3 class="concepts-section-title">Data, Algorithms & AI</h3>
        <div class="concepts-bubbles">
          <span
            class="concept-bubble concept-has-definition"
            data-term="Datafication"
            data-definition="The process of turning more and more aspects of life into data that can be stored, analyzed, and monetized. Likes, steps, playlists, locations, study habits, even moods become numbers that platforms can act on."
          >
            Datafication
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Algorithm"
            data-definition="A set of rules or procedures for processing data and making decisions. In digital platforms, algorithms sort feeds, recommend content, set prices, match workers with gigs, and decide what becomes visible or remains hidden."
          >
            Algorithm
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Algorithmic Bias"
            data-definition="When algorithmic systems reproduce or amplify existing social inequalities—around race, gender, class, caste, ability—because of the data they are trained on and the assumptions built into their design."
          >
            Algorithmic Bias
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Generative AI"
            data-definition="Models that can produce text, images, audio, or code based on patterns in training data. They can feel helpful or magical, but they also rely on enormous datasets, energy use, and human labor that often remains invisible."
          >
            Generative AI
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="AI Slop"
            data-definition="Low-quality, repetitive, or misleading content produced at scale by generative AI tools. It can flood feeds, search results, and study spaces, making it harder to find trustworthy information and slowing down critical thinking."
          >
            AI Slop
          </span>
        </div>

        <!-- Labor, Management & Visibility -->
        <h3 class="concepts-section-title">Labor, Management & Visibility</h3>
        <div class="concepts-bubbles">
          <span
            class="concept-bubble concept-has-definition"
            data-term="Algorithmic Management"
            data-definition="The use of algorithms to supervise, evaluate, and direct workers—assigning tasks, tracking performance, setting pay or penalties. It shows up in gig platforms, content moderation, and even student dashboards."
          >
            Algorithmic Management
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Gig Work"
            data-definition="Short-term, task-based, or on-demand work mediated by platforms (ride-hailing, delivery, microwork). Often framed as flexible, but usually precarious, low-paid, and highly surveilled."
          >
            Gig Work
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Invisible Labor"
            data-definition="Forms of work that are necessary but often ignored: content moderation, data labeling, server maintenance, emotional labor in customer service, or the work of keeping communities safe online."
          >
            Invisible Labor
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Politics of Visibility"
            data-definition="The power to decide who and what appears in search results, feeds, recommendations, and trending lists—and who is ignored, shadow-banned, or misrepresented."
          >
            Politics of Visibility
          </span>
        </div>

        <!-- Time, Slowness & Nonscalability -->
        <h3 class="concepts-section-title">Time, Slowness & Nonscalability</h3>
        <div class="concepts-bubbles">
          <span
            class="concept-bubble concept-has-definition"
            data-term="Nonscalability"
            data-definition="Anna Tsing’s idea that not everything in the living world can be expanded, standardized, or optimized without damage. Some forms of life, care, and leisure only make sense at small, messy, local scales."
          >
            Nonscalability
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Attention"
            data-definition="A limited resource that platforms compete for. Metrics like watch time, session length, and streaks are ways of measuring and capturing attention—often at the expense of rest or focus."
          >
            Attention
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Slowness"
            data-definition="An intentional refusal to keep pace with optimization and constant updates. Slowness can mean unscheduled time, deep reading, wandering, or hanging out without producing content or data."
          >
            Slowness
          </span>
        </div>

        <!-- Custom student terms -->
        <section id="custom-concepts-section" style="display:none; margin-top: 2.5rem;">
          <h3 class="concepts-section-title">Your Terms</h3>
          <p style="max-width: 620px; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
            Use the “+” button in the corner to add your own keywords from the course or from your digital life.
            They will appear here as additional bubbles with pop-up definitions.
          </p>
          <div id="custom-concepts-bubbles" class="concepts-bubbles"></div>
        </section>
      </section>
    `;
  }
}
