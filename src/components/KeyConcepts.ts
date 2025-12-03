export class KeyConcepts {
  public render(): string {
    return `
      <section>
        <h2 class="key-concepts-title">Concepts & Keywords</h2>
        <p style="max-width: 720px; margin-bottom: 1.5rem; font-size: 0.98rem; line-height: 1.7;">
          This glossary collects ideas from <em>Digital Lives</em> that sit behind the campus map.
          Click a bubble to see a plain-language definition and a quick note about how it shows up
          in everyday rest, distraction, or downtime.
        </p>

        <!-- Infrastructures & Platforms -->
        <h3 class="concepts-section-title">Infrastructures & Platforms</h3>
        <div class="concepts-bubbles">
          <span
            class="concept-bubble concept-has-definition"
            data-term="Infrastructure"
            data-definition="The physical and organizational systems that make digital life possible: cables, data centers, undersea fiber, buildings, standards, and logistics. Usually invisible when things work, but they quietly shape who gets access, speed, and stability."
          >
            Infrastructure
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Platform"
            data-definition="A technical and business setup that connects different groups, like users, advertisers, workers, and developers. Platforms set the rules for how people interact and extract value and data from those interactions while often appearing neutral."
          >
            Platform
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Platform Capitalism"
            data-definition="An economic system where a small number of platform companies control key digital infrastructures and make money by organizing data, labor, and attention at very large scale."
          >
            Platform Capitalism
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Third Space"
            data-definition="Informal spaces outside home and formal work or school, like cafés, parks, residence hall lounges, and libraries. These are places where people gather, rest, and socialize without being fully scheduled or monitored."
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
            data-definition="The process of turning more and more parts of life into data that can be stored, analyzed, and sold. Likes, steps, playlists, locations, study habits, and moods all become numbers that platforms can act on."
          >
            Datafication
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Algorithm"
            data-definition="A set of rules for processing data and making decisions. On platforms, algorithms sort feeds, recommend content, match people with jobs or rides, and decide what is pushed to the top or buried."
          >
            Algorithm
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Algorithmic Bias"
            data-definition="When algorithmic systems reproduce or amplify existing inequalities around race, gender, class, caste, ability, and more. This can come from the data they are trained on and the design choices built into them."
          >
            Algorithmic Bias
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Generative AI"
            data-definition="Models that can produce text, images, audio, or code based on patterns in training data. They can feel helpful or creative, but they depend on huge datasets, energy use, and often hidden human labor."
          >
            Generative AI
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="AI Slop"
            data-definition="Low-quality, repetitive, or misleading content produced at scale by generative AI tools. It can flood feeds and search results, making it harder to find careful, reliable, or human-made work."
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
            data-definition="The use of algorithms to supervise and direct workers. Software assigns tasks, tracks performance, sets ratings, and can reward or punish people in gig platforms, warehouses, call centers, and even education tools."
          >
            Algorithmic Management
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Gig Work"
            data-definition="Short-term, task-based, or on-demand work coordinated by platforms, like ride-hailing, delivery, or microwork. Often marketed as flexible but usually unstable, closely tracked, and low paid."
          >
            Gig Work
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Invisible Labor"
            data-definition="Work that is necessary but rarely seen or credited. Examples include content moderation, data labeling, server maintenance, informal tech support, and the emotional work of keeping communities safe online."
          >
            Invisible Labor
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Politics of Visibility"
            data-definition="The power to decide who and what appears in feeds, search results, and trending lists, and who is ignored, down-ranked, or misrepresented. Visibility comes with opportunities; invisibility can mean exclusion."
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
            data-definition="Anna Tsing’s idea that not everything can be endlessly scaled, standardized, or optimized without harm. Some forms of life, care, and leisure only really work in small, specific, and sometimes messy settings."
          >
            Nonscalability
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Attention"
            data-definition="A limited mental resource that platforms compete for. Metrics like watch time, streaks, and session length are ways to measure and capture attention, often pulling against rest, focus, or boredom."
          >
            Attention
          </span>

          <span
            class="concept-bubble concept-has-definition"
            data-term="Slowness"
            data-definition="Choosing not to keep up with constant optimization and updates. Slowness can mean unscheduled time, deep reading, wandering, crafts, or hanging out without performing or producing data."
          >
            Slowness
          </span>
        </div>

        <!-- Custom student terms -->
        <section id="custom-concepts-section" style="display:none; margin-top: 2.5rem;">
          <h3 class="concepts-section-title">Your Terms</h3>
          <p style="max-width: 620px; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
            Use the add-term button to include your own keywords from the course or from your digital life.
            They will appear here as extra bubbles with pop-up definitions.
          </p>
          <div id="custom-concepts-bubbles" class="concepts-bubbles"></div>
        </section>
      </section>
    `;
  }
}
