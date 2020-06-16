<template>
  <Layout 
    heroTitle="About this Directory" 
    heroSubtitle="Learn a bit about why I decided to make this directory of links."
  >
    <section class="section">
      <div class="container tiny">
        <hr />
        <h2 class="title is-4">Origin</h2>
        <a target="_blank" href="https://twitter.com/maxlind/status/1264958953336823809">
          <g-image alt="Max Lind's Tweet" src="@/assets/images/max-tweet.jpg" class="mb-3"/>
        </a>
        <p>
          A really sharp guy, <a target="_new" href="https://twitter.com/maxlind">Max Lind</a> tweeted what you see 
          above. I found myself thinking about the phrase "manually curated directories" over and over for the next 
          few days. I couldn't stop thinking about it. That tweet got me excited and I knew that I had to create 
          this site. I love Shortcuts, I think it's one of the most exciting programming platforms right now, but 
          I'm worried that people don't know where to start when it comes to creating their own shortcuts. 
        </p>

        <hr />
        <h2 class="title is-4">About Me</h2>

        <div class="columns is-centered">
          <div class="column is-12">
            <article class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="image is-96x96">
                    <g-image 
                      class="is-rounded" 
                      src="@/assets/images/brad-siefert-photo.jpg" 
                      alt="Photo of Brad Siefert"
                    />
                  </p>
                </div>

                <div class="level-item">
                  <div class="title is-4 ml-2"><small>Hi, I’m Brad. 👋🏻</small></div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <p>
          I&#8217;m a Chicago based UI/UX designer and photographer who loves creating technology that makes 
          people&#8217;s lives more efficient. I&#8217;ve struggled to learn programming for many years and learning 
          to program using the Shortcuts app clicked for me in a way that no other programming language did before. 
          It has enabled me to create all sorts of automations and shortcuts that make my life so much easier. For 
          more info about me, <a target="_new" href="https://brad.si/">please check out my website</a>.
        </p>

        <hr />
        <h2 class="title is-4">Colophon</h2>
        <p>
          This site was designed in <a target="_new" href="https://www.sketch.com">Sketch</a> by Bohemian Coding. 
          It&#8217;s frontend was coded using <a target="_new" href="https://gridsome.org">Gridsome</a> which is 
          built on <a target="_new" href="https://vuejs.org">VueJS</a>. The site&#8217;s backend is maintained in 
          <a target="_new" href="https://airtable.com">Airtable</a>. The type is set in 
          <a target="_new" href="https://fonts.google.com/specimen/Inter">Inter</a> and 
          <a target="_new" href="https://fonts.google.com/specimen/IBM+Plex+Mono">IBM Plex Mono</a> which are 
          available from Google Fonts. This 
          <a target="_new" href="https://gridsome.org/starters/airtable-events-starter/">Gridsome + Airtable</a> 
          starter was incredibly helpful and <a target="_new" href="https://kro.ski">Kris Kroski</a> helped get 
          me unstuck when I ran into all sorts of little issues.
        </p>
        <hr class="mb-0"/>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  data: () => ({
    showNav: false,
  })
};
</script>