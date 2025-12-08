var h=Object.defineProperty;var g=(l,e,t)=>e in l?h(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var r=(l,e,t)=>g(l,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class b{constructor(e,t){r(this,"activeTab");r(this,"onTabChange");this.activeTab=e,this.onTabChange=t}render(){return`
      <header class="sticky-header">
        <nav class="header-nav">
          <button
            class="nav-tab ${this.activeTab==="about"?"active":""}"
            data-tab="about"
          >
            Overview
          </button>
          <button
            class="nav-tab ${this.activeTab==="roadmap"?"active":""}"
            data-tab="roadmap"
          >
            Campus Map
          </button>
          <button
            class="nav-tab ${this.activeTab==="concepts"?"active":""}"
            data-tab="concepts"
          >
            Concepts & Keywords
          </button>
          <button
            class="nav-tab ${this.activeTab==="posters"?"active":""}"
            data-tab="posters"
          >
            Posters
          </button>
        </nav>
      </header>
    `}attachEventListeners(){document.querySelectorAll(".nav-tab").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.tab;a&&this.onTabChange(a)})})}updateActiveTab(e){this.activeTab=e}}class v{constructor(){r(this,"onImageClick")}setImageClickCallback(e){this.onImageClick=e}render(){return`
      <div class="roadmap-container">
        <div class="roadmap-header-image">
          <img
            src="/campusroadmap-word.png"
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
                    src="/main-word.png"
                    alt="Main"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/main.png"
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
                    src="/library-word.png"
                    alt="Library — Reading for Pleasure"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/library.png"
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
                    src="/olmsted-word.png"
                    alt="Olmsted — Critique vs Habit"
                    class="roadmap-title-word"
                  />
                </div>
          
              </div>
              <div class="roadmap-building">
                <img
                  src="/olmsted.png"
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
                    src="/deece-word.png"
                    alt="Deece — Convenience & Labor"
                    class="roadmap-title-word"
                  />
                </div>
              </div>
              <div class="roadmap-building">
                <img
                  src="/deece.png"
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
                    src="/sunsetlake-word.png"
                    alt="Sunset Lake — Third Space & Unstructured Time"
                    class="roadmap-title-word"
                  />
                </div>
            
              </div>
              <div class="roadmap-building">
                <img
                  src="/sunsetlake.png"
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
                    src="/afc-word.png"
                    alt="AFC — Movement & Metrics"
                    class="roadmap-title-word"
                  />
                </div>
          
              </div>
              <div class="roadmap-building">
                <img
                  src="/afc.png"
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
                    src="/vogelstein-word.png"
                    alt="Vogelstein — Creativity & Being Seen"
                    class="roadmap-title-word"
                  />
                </div>
             
              </div>
              <div class="roadmap-building">
                <img
                  src="/vogelstein.png"
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
    `}attachEventListeners(){document.querySelectorAll(".clickable-image").forEach(t=>{t.addEventListener("click",()=>{const a=t.getAttribute("data-step");a&&this.onImageClick&&this.onImageClick(a)})})}}class f{constructor(){r(this,"buildingData",new Map([["1",{step:"1",title:"Main",blurb:"Main looks analog, but nearly every routine here runs on digital platforms. Even when nothing feels digital, digital systems are everywhere. From scanning your ID to swiping in Retreat, your data is being collected all around you.",tryThis:"Sit in Main for 10 minutes without opening any devices. Observe boredom, conversations, and how often you want to check something.",connectedTo:["Langdon Winner – “Do Artifacts Have Politics?”","Janet Abbate – Inventing the Internet (infrastructure)","Graham Pickren – “The Global Assemblage of Digital Flow”"],image:"/src/main.png",video:"https://www.youtube.com/embed/b-r6q7ie_yA"}],["2",{step:"2",title:"Library",blurb:"The library is built for focus, but it’s also one of the few places on campus where slow, uninterrupted leisure still makes sense. Reading here doesn’t have to be productive or efficient, it can just be quiet time with a book. In a digital environment shaped by recommendations, notifications, and algorithmic nudges, the library offers a rare space for unstructured attention.",tryThis:"Pick a book just because it looks interesting and read one chapter for fun.",connectedTo:["Safiya Noble – Algorithms of Oppression","Tarleton Gillespie – “The Relevance of Algorithms”","Nissenbaum – “How Computer Systems Embody Values”"],image:"/src/library.png",video:"https://www.youtube.com/embed/juVXUPTCa00"}],["3",{step:"3",title:"Olmsted",blurb:"As a classroom building and where we have this class, consider how Olmsted is where a lot of your digital thinking happens. It’s where we learn about platforms, data, and power, often while actively using those same systems. Classes like ours depend on platforms like Moodle and Google Docs, while also educating on how they operate and the dangers that come with being too dependent on these digital systems. ",tryThis:"After class, walk outside before opening your laptop or phone. Let the class end without immediately switching to a version of digital leisure. Notice how long the urge to check something lasts before giving in.",connectedTo:["Sadowski – “When Data is Capital”","Couldry & Mejias – “Data Colonialism”","Bender et al. – “On the Dangers of Stochastic Parrots”"],image:"/src/olmsted.png",video:"https://www.youtube.com/embed/ArI6albrkuY"}],["4",{step:"4",title:"The Deece",blurb:"The dining hall is a social space which provides a natural break in the day for meals. Digital devices often interrupt this form of leisure, replacing conversation with scrolling and texting.",tryThis:"Eat one meal without your phone on the table. Just enjoy the food and whoever you’re with (or the quiet if you’re alone). Observe what changes. How was this a different experience if you’re used to using your phone while you eat?",connectedTo:["Lilly Irani – “The Cultural Work of Microwork”","Muldoon et al. – “A Typology of AI Data Work”","Srnicek – Platform Capitalism (Chapter 2)"],image:"/src/deece.png",video:"https://www.youtube.com/embed/nsSEsAZhl8Q"}],["5",{step:"5",title:"Sunset Lake",blurb:"Sunset Lake is one of the rare places on campus where time doesn’t automatically feel scheduled or optimized. It’s a space that supports wandering, sitting, walking, and being outside without a clear goal.",tryThis:"Walk one full lap around the lake at a normal pace. Try to feel present and enjoy nature and the walk.",connectedTo:["Anna Tsing – “On Nonscalability”","Ray Oldenburg – Third Places","Tsing’s nonscalable life vs optimized platforms"],image:"/src/sunsetlake.png",video:"https://www.youtube.com/embed/1PP7Sv-2yFs"}],["6",{step:"6",title:"AFC",blurb:"The AFC is filled with numbers (reps, steps, minutes, goals). Digital fitness culture turns movement into data: something to measure, record, or improve! In this environment, exercise can shift from an embodied experience to a productivity task. ",tryThis:"Move for 10 - 15 minutes without tracking anything. Just stretch, walk, lift, or move however you want. Notice how your attention shifts when you’re not counting.",connectedTo:["Sadowski – “When Data is Capital”","Couldry & Mejias – Data Colonialism and extraction","Srnicek – Platform logics applied to the body"],image:"/src/afc.png",video:"https://www.youtube.com/embed/5wfnF5y1aeA"}],["7",{step:"7",title:"Vogelstein — Making Things Without Posting",blurb:"Vogelstein is a space for performance, art, and creativity, but it’s also connected to visibility and sharing. A lot of creative work today is shaped by whether it will be documented, liked, or posted.",tryThis:"Do something creative for 10–15 minutes! Draw, write, play music, sketch ideas, or experiment with something  and don’t take a photo or post it anywhere. Let the work exist only in the moment, without an audience!",connectedTo:["Sasha Costanza-Chock – Design Justice (Introduction)","Safiya Noble – search, race, and visibility","Gillespie – Platforms and the politics of visibility"],image:"/src/vogelstein.png",video:"https://www.youtube.com/embed/uA70ZGCC1f4"}]]))}render(e){const t=this.buildingData.get(e);if(!t)return`
        <div class="building-detail-page">
          <button class="back-button" id="back-to-roadmap">← Back to map</button>
          <div class="building-detail-content">
            <h2 class="building-detail-title">Unknown Stop</h2>
            <p>We couldn&apos;t find this stop on the campus leisure map. Try going back and selecting another building.</p>
          </div>
        </div>
      `;const a=t.video?`
        <div class="building-detail-video" style="margin-top: 2rem; max-width: 720px;">
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
            <iframe
              src="${t.video}"
              title="${t.title} video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            ></iframe>
          </div>
        </div>
      `:"";return`
      <div class="building-detail-page">
        <button class="back-button" id="back-to-roadmap">← Back to map</button>
        <div class="building-detail-content">
          <h2 class="building-detail-title">${t.title}</h2>

          <div class="building-detail-image-container">
            <img
              src="${t.image}"
              alt="${t.title}"
              class="building-detail-image"
            />
          </div>

          <div class="building-detail-description">
            <p class="bd-blurb">
              ${t.blurb}
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
                ${t.tryThis}
              </p>
            </div>

            ${a}

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
                ${t.connectedTo.map(i=>`<li>${i}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(e){const t=document.getElementById("back-to-roadmap");t&&t.addEventListener("click",e)}}class y{render(){return`
      <section>
        <div class="key-concepts-title-image">
          <img
            src="/conceptskeywords-word.png"
            alt="Concepts & Keywords"
            class="key-concepts-title-word"
          />
        </div>

        <p style="max-width: 750px; margin-bottom: 1.5rem; font-size: 0.98rem; line-height: 1.7;">
          This glossary collects ideas from <em>Digital Lives</em> that sit behind the campus map.
          Click a bubble to see our definition.
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
    `}}class u{constructor(){r(this,"state");r(this,"header");r(this,"roadMap");r(this,"buildingDetail");r(this,"keyConcepts");r(this,"customTerms",[]);r(this,"currentSlide",0);r(this,"currentSlide2",0);this.state={activeTab:"about",currentPage:"roadmap"},this.header=new b(this.state.activeTab,e=>this.switchTab(e)),this.roadMap=new v,this.buildingDetail=new f,this.keyConcepts=new y,this.roadMap.setImageClickCallback(e=>this.showBuildingDetail(e)),this.init()}init(){const e=document.querySelector("#app");if(!e)throw new Error("App container not found");this.render(e),this.attachConceptTooltips(),this.attachAddConceptButton()}render(e){const t=this.state.activeTab==="roadmap"&&this.state.currentPage!=="roadmap";e.innerHTML=`
      ${this.header.render()}

      <!-- Overview / Welcome (ABOUT TAB) -->
      <main
        class="content-section"
        id="about-welcome-content"
        style="display: ${this.state.activeTab==="about"?"block":"none"}"
      >
        <div class="welcome-section">
          <div class="welcome-title-image">
            <img
              src="/title-word.png"
              alt="Leisure in the Digital Age"
              class="welcome-title-word"
            />
          </div>

          <p
            style="
              margin-top: 0.2rem;
              margin-bottom: 1.25rem;
              font-size: 0.95rem;
              letter-spacing: 0.04em;
              text-transform: uppercase;
              opacity: 0.8;
            "
          >
            <strong> STS-236 </strong> <em> digital lives </em> : a final project by Alexandra, Ella, & Elta
          </p>
          
          <!-- main intro text from your new copy -->
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.5rem;">
            This site is a small guide for noticing how your free time is shaped by digital systems.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.5rem;">
            Our campus roadmap links these ideas to familiar Vassar buildings. At each stop, you’re invited to ask:
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-left: 1rem; margin-bottom: 0.5rem;">
            <span style="display:block;">What does “rest” look like here?</span>
            <span style="display:block;">Who makes it possible?</span>
            <span style="display:block;">Whose time, data, or labor is being organized in the background?</span>
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1rem;">
            The goal isn’t to give up digital leisure, but to imagine different ways of taking a break.
          </p>

          <p
            style="
              font-size: 0.95rem;
              margin-top: 0.25rem;
              margin-bottom: 1.25rem;
              opacity: 0.85;
            "
          >
          </p>

          <div style="margin: 1.5rem 0 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">WEBSITE FEATURES:</h4>
            <ul style="font-size: 0.98rem; line-height: 1.7; padding-left: 1.2rem; margin-bottom: 0.5rem;">
              <li><strong>CAMPUS ROADMAP:</strong> Click each building to learn more about relevant ideas!</li>
              <li><strong>CONCEPTS & KEYWORDS:</strong> Study keywords to build your digital literacy.</li>
              <li><strong>POSTERS:</strong> Explore a project by our peers!</li>

              </ul>
          </div>


         <!-- Expandable Section (your new text) -->
          <div style="margin-top: 1.5rem;">
            <button
              id="expand-shift-btn"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 1.25rem 1.5rem;
                background: rgba(255, 230, 199, 0.5);
                border: 2px solid var(--hover-accent);
                border-radius: 12px;
                font-weight: 600;
                font-size: 1.05rem;
                cursor: pointer;
                transition: all 0.2s ease;
                color: var(--warm-ink);
              "
            >
              <span>How “taking a break” has changed : </span>
              <span
                id="expand-icon"
                style="font-size: 1.3rem; transition: transform 0.3s ease;"
              >▼</span>
            </button>
            <div
              id="shift-content"
              style="
                display: none;
                margin-top: 1rem;
                padding: 1.5rem;
                background: rgba(255, 230, 199, 0.3);
                border-radius: 12px;
                border-left: 4px solid var(--hover-accent);
                animation: slideDown 0.3s ease;
              "
            >
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Before digital platforms, leisure often meant active, self-chosen participation: reading, crafts, games,
                hanging out in common rooms or cafés.
              </p>
              <p style="line-height: 1.7; margin-bottom: 0.75rem;">
                Today, much of our rest is filtered through platforms, recommendation systems, and metrics. Breaks turn
                into scrolling, autoplay, and personalized feeds designed to keep your attention. Your “free time” is
                also valuable data that can be tracked, sorted, and sold.
              </p>
              <p style="line-height: 1.7;">
                This project asks what is gained (and what is lost) when rest is shaped by infrastructures and
                algorithms, and where on campus you can still make time that feels slower, less “efficient”, and more
                your own.
              </p>
            </div>
          </div>

          <!-- Timeline + Door layout (immediately after features) -->
          <div
            class="timeline-section"
            style="display: ${this.state.activeTab==="about"?"flex":"none"}; margin-top: 2rem;"
          >
            <div class="timeline-container">
              <div class="timeline-line"></div>
            
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>INVISIBLE SYSTEMS</strong><br>
                    clouds, cables, algorithms, and labor sit beneath "seamless" leisure
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>DATA AS POWER</strong><br>
                    online activity becomes extractable data and influence
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>PRECARITY & INEQUALITY</strong><br>
                    platform labor and code embed and scale old hierarchies
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>NO NEUTRAL AI</strong><br>
                    systems amplify existing social biases rather than objective truth
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-badge">
                  <span class="badge-icon">&nbsp;</span>
                  <div class="badge-text">
                    <strong>SLOWING DOWN</strong><br>
                    reintroducing mindful practices back into leisure
                  </div>
                </div>
              </div>
            </div>

            <!-- Door image as second column -->
            <div class="timeline-door">
              <img
                id="door-toggle"
                src="/door.png"
                alt="Sketch of a door"
                data-closed-src="/door.png"
                data-open-src="/1.gif"
                style="
                  max-width: 700px;
                  width: 100%;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                "
              /> 
            </div>
          </div>

            <p style="
                padding: 0.25rem 0.7rem;
                border-radius: 999px;
                background: rgba(255, 230, 199, 0.95);
                border: 1px solid rgba(154, 81, 37, 0.6);
                font-size: 0.7rem;
                font-family: 'Monospace', monospace;
                letter-spacing: 0.06em;
                text-transform: lowercase;
                color: var(--warm-ink);
                box-shadow: 0 2px 4px rgba(0,0,0,0.15);
                text-align: center;
                margin-top: 0.1rem;
                margin-left: 45rem;
                margin-right: 3rem;
                display: inline-block;
              ">
                Click on the door to watch a video snippet from <a href="https://www.youtube.com/watch?v=BFvVWWp14d4" target="_blank" rel="noopener noreferrer" style="color: var(--warm-ink); ">
Bundled, Buried & Behind Closed Doors </a> documentary
              </p>


          <!-- Info cards section: three small cards -->
          <div class="info-cards" style="margin-top: 3rem;">
            <div class="card">
              <div class="card-accent accent-pink"></div>
              <div class="card-icon" aria-hidden="true">What is Leisure</div>
              <p class="card-body">
                "It should also be noted that not only an opportunity to choose to do something in free time 
                makes that chosen activity leisure but also a choice not to do something is an expression of freedom..."
              </p>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10011693/" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
            <div class="card">
              <div class="card-accent accent-blue"></div>
              <div class="card-icon" aria-hidden="true">Algorithmic Anxiety</div>
              <p class="card-body">
                "It can feel as though every app is trying to guess what you want before your brain has time to 
                come up with its own answer, like an obnoxious party guest who finishes your sentences as you speak them..." 
              </p>
              <a href="https://www.newyorker.com/culture/infinite-scroll/the-age-of-algorithmic-anxiety" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
            <div class="card">
              <div class="card-accent accent-yellow"></div>
              <div class="card-icon" aria-hidden="true">The Third Space</div>
              <p class="card-body">
                "First Space is the space we live in, our comfortable surroundings. The Second Space is the space that, 
                outside of our home, we spend most of our time, usually the place of work. Then there’s Third Space."
              </p>
              <a href="https://medium.com/@caine_chan/rediscovering-connection-the-importance-of-third-spaces-in-a-digital-world-75f5167c358f" target="_blank" rel="noopener noreferrer"><button class="card-cta">Read More</button></a>
            </div>
          </div>

          <!-- External readings (expandable like shift-content) -->
          <div style="margin-top: 1.5rem;">
            <button
              id="expand-readings-btn"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 1.25rem 1.5rem;
                background: rgba(255, 230, 199, 0.5);
                border: 2px solid var(--hover-accent);
                border-radius: 12px;
                font-weight: 600;
                font-size: 1.05rem;
                cursor: pointer;
                transition: all 0.2s ease;
                color: var(--warm-ink);
              "
            >
              <span>External readings about leisure in the digital age:</span>
              <span
                id="expand-readings-icon"
                style="font-size: 1.3rem; transition: transform 0.3s ease;"
              >▼</span>
            </button>
            <div
              id="readings-content"
              style="
                display: none;
                margin-top: 1rem;
                padding: 1.5rem;
                background: rgba(255, 230, 199, 0.3);
                border-radius: 12px;
                border-left: 4px solid var(--hover-accent);
                animation: slideDown 0.3s ease;
              "
            >
              <ul style="font-size: 0.95rem; line-height: 1.7; padding-left: 1.2rem;">
                <a href="https://files.eric.ed.gov/fulltext/EJ1409784.pdf" target="_blank" rel="noopener noreferrer"> <li><em>Digital Leisure: Transformation of Leisure Activities</em> by Ömer Faruk Tutar</li></a>
                <a href="https://washingtonbeerblog.com/the-digitalization-of-leisure-and-its-social-implications/" target="_blank" rel="noopener noreferrer"><li><em>The Digitalization of Leisure and Its Social Implications</em></li></a>
                <a href="https://medium.com/unhcr-innovation-service/entertainment-for-well-being-why-the-future-of-digital-in-humanitarianism-will-be-shaped-by-e53402e202d7" target="_blank" rel="noopener noreferrer"><li><em>Entertainment for well-being: Why leisure will shape the future of digital in humanitarianism</em></li></a>
                <a href="https://www.sciencedirect.com/science/article/pii/S147383762500036X" target="_blank" rel="noopener noreferrer"><li>
                  <em>Digital leisure use and psychological well-being among recreation management students:
                  The mediating role of social media engagement</em> by Kubra Asan
                </li></a>
                <a href="https://www.researchgate.net/publication/274698150_Digital_leisure_study_The_consumption_experience_habits_and_social_uses" target="_blank" rel="noopener noreferrer"><li>
                  <em>Digital leisure study: The consumption experience, habits and social uses</em> by Laura Rojas de Francisco
                </li></a>
                <a href="https://www.nortisjournal.com/index.php/pub/article/view/3/8" target="_blank" rel="noopener noreferrer"><li><em>Digital Recreation and Artificial Leisure: A Philosophical Inquiry</em> by Rojhat Aydin</li></a>
              </ul>
            </div>
          </div>

            </div>
          </div>
        </div>
      </main>

      <!-- Campus Roadmap (ROADMAP TAB: MAP VIEW) -->
      <div
        id="about-roadmap-content"
        style="display: ${this.state.activeTab==="roadmap"&&!t?"block":"none"}"
      >
        <div class="roadmap-section">
          ${this.roadMap.render()}
        </div>
      </div>

      <!-- Building Detail (ROADMAP TAB: DETAIL VIEW) -->
      <main
        class="content-section building-detail-main"
        id="building-detail-content"
        style="display: ${this.state.activeTab==="roadmap"&&t?"block":"none"}"
      >
        ${this.state.activeTab==="roadmap"&&t?this.buildingDetail.render(this.state.currentPage):""}
      </main>

      <!-- Concepts & Keywords (CONCEPTS TAB) -->
      <main
        class="content-section key-concepts-main"
        id="about-key-concepts-content"
        style="display: ${this.state.activeTab==="concepts"?"block":"none"}"
      >
        ${this.keyConcepts.render()}
      </main>

      <!-- Posters Slideshow (POSTERS TAB) -->
      <main
        class="content-section posters-main"
        id="posters-content"
        style="display: ${this.state.activeTab==="posters"?"block":"none"}"
      >
        <div
          class="posters-title-image"
          style="margin-bottom: 2rem; text-align: left;"
        >
          <img
            src="/posters-word.png"
            alt="Posters"
            class="posters-title-word"
            style="max-width: 650px; width: 100%; height: auto; display: block;"
          />
        </div>

          <h2
    style="
      margin-bottom: 2rem;
      font-weight: 500;
      font-size: 1.05rem;
      opacity: 0.85;
      letter-spacing: 0.02em;
    "
  >
    Thanks to our peers for making these posters:
  </h2>


        <div class="slideshow-container">
          <div class="slide active">
            <img src="/page1.jpg" alt="Poster 1">
          </div>
          <div class="slide">
            <img src="/page 2.jpg" alt="Poster 2">
          </div>
          <div class="slide">
            <img src="/page 3.jpg" alt="Poster 3">
          </div>
          
          <button class="prev-slide" aria-label="Previous slide">❮</button>
          <button class="next-slide" aria-label="Next slide">❯</button>
          
          <div class="slide-dots">
            <span class="dot active" data-slide="0"></span>
            <span class="dot" data-slide="1"></span>
            <span class="dot" data-slide="2"></span>
          </div>
        </div>

        <div class="slideshow-container slideshow-container-2" style="margin-top: 3rem;">
          <div class="slide-2 active">
            <img src="/YellowChat1.png" alt="Yellow Chat 1">
          </div>
          <div class="slide-2">
            <img src="/YellowChat2.png" alt="Yellow Chat 2">
          </div>
          <div class="slide-2">
            <img src="/YellowChat3.png" alt="Yellow Chat 3">
          </div>
          <div class="slide-2">
            <img src="/YellowChat4.png" alt="Yellow Chat 4">
          </div>
          <div class="slide-2">
            <img src="/YellowChat5.png" alt="Yellow Chat 5">
          </div>
          
          <button class="prev-slide-2" aria-label="Previous slide">❮</button>
          <button class="next-slide-2" aria-label="Next slide">❯</button>
          
          <div class="slide-dots">
            <span class="dot-2 active" data-slide="0"></span>
            <span class="dot-2" data-slide="1"></span>
            <span class="dot-2" data-slide="2"></span>
            <span class="dot-2" data-slide="3"></span>
            <span class="dot-2" data-slide="4"></span>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; ${new Date().getFullYear()} Leisure in the Digital Age · Digital Lives</p>
      </footer>
    `,this.header.attachEventListeners(),this.state.activeTab==="about"&&(this.attachExpandButton(),this.attachReadingsExpandButton(),this.attachDoorToggle()),this.state.activeTab==="roadmap"&&!t&&this.roadMap.attachEventListeners(),this.state.activeTab==="roadmap"&&t&&this.buildingDetail.attachEventListeners(()=>this.backToRoadmap()),this.attachConceptTooltips(),this.attachAddConceptButton(),this.renderCustomTerms(),this.state.activeTab==="posters"&&(this.attachSlideshowListeners(),this.attachSecondSlideshowListeners())}attachExpandButton(){const e=document.getElementById("expand-shift-btn"),t=document.getElementById("shift-content"),a=document.getElementById("expand-icon");e&&t&&a&&e.addEventListener("click",()=>{const i=t.style.display==="block";t.style.display=i?"none":"block",a.style.transform=i?"rotate(0deg)":"rotate(180deg)",e.style.background=i?"rgba(255, 230, 199, 0.5)":"rgba(255, 230, 199, 0.8)"})}attachReadingsExpandButton(){const e=document.getElementById("expand-readings-btn"),t=document.getElementById("readings-content"),a=document.getElementById("expand-readings-icon");e&&t&&a&&e.addEventListener("click",()=>{const i=t.style.display==="block";t.style.display=i?"none":"block",a.style.transform=i?"rotate(0deg)":"rotate(180deg)",e.style.background=i?"rgba(255, 230, 199, 0.5)":"rgba(255, 230, 199, 0.8)"})}attachDoorToggle(){const e=document.getElementById("door-toggle");if(!e)return;const t=e.dataset.closedSrc||e.getAttribute("src")||"",a=e.dataset.openSrc||t;e.onclick=()=>{e.getAttribute("src")===t?(e.setAttribute("src",a),e.classList.add("gif-open")):(e.setAttribute("src",t),e.classList.remove("gif-open"))}}attachConceptTooltips(){const e=document.querySelectorAll(".concept-has-definition");document.querySelectorAll(".concept-modal-overlay").forEach(t=>t.remove()),e.forEach(t=>{const a=t.dataset.term,i=t.dataset.definition;if(!a||!i)return;const s=o=>{o.stopPropagation(),document.querySelectorAll(".concept-modal-overlay").forEach(c=>c.remove());const n=document.createElement("div");n.className="concept-modal-overlay";const d=document.createElement("div");d.className="concept-modal",d.innerHTML=`
          <div class="concept-modal-title">${a}</div>
          <div class="concept-modal-body">${i}</div>
          <button class="concept-modal-close">Close</button>
        `,n.appendChild(d),document.body.appendChild(n),n.addEventListener("click",c=>{c.target===n&&n.remove()});const m=d.querySelector(".concept-modal-close");m==null||m.addEventListener("click",()=>n.remove());const p=c=>{c.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",p))};document.addEventListener("keydown",p)};t.addEventListener("click",s),t.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s(o))}),t.setAttribute("tabindex","0"),t.style.cursor="pointer"})}showBuildingDetail(e){this.state.currentPage=e,this.render(document.querySelector("#app"))}backToRoadmap(){this.state.currentPage="roadmap",this.render(document.querySelector("#app"))}switchTab(e){this.state.activeTab=e,this.state.currentPage="roadmap","updateActiveTab"in this.header&&typeof this.header.updateActiveTab=="function"&&this.header.updateActiveTab(e),this.render(document.querySelector("#app"))}attachAddConceptButton(){const e=document.querySelector(".add-concept-btn");e&&e.addEventListener("click",()=>{this.showAddTermModal()})}showAddTermModal(){document.querySelectorAll(".add-term-modal-overlay").forEach(s=>s.remove());const e=document.createElement("div");e.className="add-term-modal-overlay";const t=document.createElement("div");t.className="add-term-modal",t.innerHTML=`
      <h3 class="add-term-modal-title">Add Custom Term</h3>
      <form class="add-term-form">
        <div class="form-group">
          <label for="term-input">Term</label>
          <input type="text" id="term-input" placeholder="e.g., Metaverse" required />
        </div>
        <div class="form-group">
          <label for="definition-input">Definition</label>
          <textarea
            id="definition-input"
            placeholder="Enter a simple definition..."
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-buttons">
          <button type="button" class="cancel-btn">Cancel</button>
          <button type="submit" class="submit-btn">Add Term</button>
        </div>
      </form>
    `,e.appendChild(t),document.body.appendChild(e),t.querySelector(".add-term-form").addEventListener("submit",s=>{s.preventDefault();const o=document.getElementById("term-input"),n=document.getElementById("definition-input");o.value.trim()&&n.value.trim()&&(this.customTerms.push({term:o.value.trim(),definition:n.value.trim()}),e.remove(),this.renderCustomTerms())});const i=t.querySelector(".cancel-btn");i==null||i.addEventListener("click",()=>e.remove()),e.addEventListener("click",s=>{s.target===e&&e.remove()}),setTimeout(()=>{var s;(s=document.getElementById("term-input"))==null||s.focus()},100)}renderCustomTerms(){const e=document.getElementById("custom-concepts-section"),t=document.getElementById("custom-concepts-bubbles");if(!(!e||!t)){if(this.customTerms.length===0){e.style.display="none";return}e.style.display="block",t.innerHTML=this.customTerms.map(({term:a,definition:i})=>`<span class="concept-bubble concept-has-definition" data-term="${a}" data-definition="${i}">${a}</span>`).join(""),this.attachConceptTooltips()}}attachSlideshowListeners(){const e=document.querySelectorAll(".slide"),t=document.querySelectorAll(".dot"),a=document.querySelector(".prev-slide"),i=document.querySelector(".next-slide"),s=n=>{n>=e.length&&(this.currentSlide=0),n<0&&(this.currentSlide=e.length-1),e.forEach(d=>d.classList.remove("active")),t.forEach(d=>d.classList.remove("active")),e[this.currentSlide].classList.add("active"),t[this.currentSlide].classList.add("active")};a==null||a.addEventListener("click",()=>{this.currentSlide--,s(this.currentSlide)}),i==null||i.addEventListener("click",()=>{this.currentSlide++,s(this.currentSlide)}),t.forEach((n,d)=>{n.addEventListener("click",()=>{this.currentSlide=d,s(this.currentSlide)})});const o=n=>{this.state.activeTab==="posters"&&(n.key==="ArrowLeft"?(this.currentSlide--,s(this.currentSlide)):n.key==="ArrowRight"&&(this.currentSlide++,s(this.currentSlide)))};document.addEventListener("keydown",o)}attachSecondSlideshowListeners(){const e=document.querySelectorAll(".slide-2"),t=document.querySelectorAll(".dot-2"),a=document.querySelector(".prev-slide-2"),i=document.querySelector(".next-slide-2"),s=o=>{o>=e.length&&(this.currentSlide2=0),o<0&&(this.currentSlide2=e.length-1),e.forEach(n=>n.classList.remove("active")),t.forEach(n=>n.classList.remove("active")),e[this.currentSlide2].classList.add("active"),t[this.currentSlide2].classList.add("active")};a==null||a.addEventListener("click",()=>{this.currentSlide2--,s(this.currentSlide2)}),i==null||i.addEventListener("click",()=>{this.currentSlide2++,s(this.currentSlide2)}),t.forEach((o,n)=>{o.addEventListener("click",()=>{this.currentSlide2=n,s(this.currentSlide2)})})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{new u}):new u;
