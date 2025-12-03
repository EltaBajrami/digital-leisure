export class KeyConcepts {
  public render(): string {
    return `
      <div class="key-concepts-wrapper">
        <button class="add-concept-btn" aria-label="Add custom term" title="Add your own term">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <h3 class="key-concepts-title">Key Concepts</h3>
      <h4 class="concepts-section-title">Technical</h4>
      <div class="concepts-bubbles">
        <span class="concept-bubble concept-has-definition" data-term="AWS" data-definition="Amazon Web Services – Amazon's on-demand computers and storage that run apps on the internet.">AWS</span>
        <span class="concept-bubble concept-has-definition" data-term="Cloud" data-definition="Using someone else’s computers over the internet instead of running everything on your own device.">Cloud</span>
        <span class="concept-bubble concept-has-definition" data-term="DoorDash" data-definition="An app where you order food or items and gig workers deliver them to you.">DoorDash</span>
        <span class="concept-bubble concept-has-definition" data-term="Uber" data-definition="A ride-hailing app that lets you book drivers using your phone instead of a taxi.">Uber</span>
        <span class="concept-bubble concept-has-definition" data-term="IoT" data-definition="Internet of Things – everyday objects like lights or watches that can connect to the internet.">IoT</span>
        <span class="concept-bubble concept-has-definition" data-term="AI" data-definition="Artificial Intelligence – software that can learn from data and make decisions or create content.">AI</span>
        <span class="concept-bubble concept-has-definition" data-term="Neural Link" data-definition="A brain–computer interface idea where a device in your head talks directly with computers.">Neural Link</span>
      </div>
      <h4 class="concepts-section-title">Concepts</h4>
      <div class="concepts-bubbles">
        <span class="concept-bubble concept-has-definition" data-term="Reification" data-definition="Making something abstract or theoretical feel real and tangible—turning ideas into concrete objects or experiences.">Reification</span>
        <span class="concept-bubble concept-has-definition" data-term="Gamification" data-definition="Adding game-like elements (points, badges, levels) to non-game activities to make them more engaging and fun.">Gamification</span>
        <span class="concept-bubble concept-has-definition" data-term="Datafication" data-definition="___">Datafication</span>
      </div>
      <div id="custom-concepts-section" style="display: none;">
        <h4 class="concepts-section-title">My Custom Terms</h4>
        <div class="concepts-bubbles" id="custom-concepts-bubbles"></div>
      </div>
    `;
  }
}

