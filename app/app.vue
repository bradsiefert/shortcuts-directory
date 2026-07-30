<template>
  <section class="hero">
    <div class="hero-header">
      <div class="top-bar"></div>
      <div class="container mt-6 super-skinny">
        <div class="has-text-centered">
          <img
            alt="Shortcuts Directory Logo"
            src="@/assets/images/logo.svg"
          />
        </div>
      </div>
    </div><!-- /hero-header -->

    <div class="hero-body">
      <div class="container super-skinny has-text-centered">
        <h1 class="title is-size-1 is-size-3-mobile has-text-white mb-3">
          Curated collections of the best links about  Shortcuts
        </h1>
        <div class="subtitle has-text-info is-size-4 is-size-5-mobile mb-5">
          Apple’s Shortcuts app (aka Siri Shortcuts) is an exciting platform for automating tasks. This directory is my attempt to collect all the best Shortcuts resources.
        </div>
      </div>
    </div><!-- /hero-body -->
  </section>

  <main class="content">
    <div class="container skinny">
      <div class="column">
        <div>
          <hr class="divider">
          <h2 class="title is-size-3">Start Here</h2>
          <p class="is-size-5">
            New to Shortcuts? These links are the best places to start. Each link is full of great resources to help you learn more about Shortcuts, especially for beginners. Some highlights are: <a target="_new" href="https://support.apple.com/guide/shortcuts/welcome/ios">Apple's Shortcuts User Guide</a>, the <a target="_new" href="https://www.reddit.com/r/shortcuts/">Shortcuts subreddit</a>, <a target="_new" href="https://www.macstories.net/shortcuts/">MacStories's Shortcuts Archive</a>, and <a target="_new" href="https://matthewcassinelli.com/sirishortcuts/library/">Matthew Cassinelli's Shortcuts Library</a>. Each have examples to check out and customize to fit your needs.
          </p>

          <p class="is-size-5">
            A previous version of this site accepted submissions for great links about Shortcuts. Unfortunately, the framework I use to build the site broke and rebuilding it is not something I currently have time for. I'm updating this page to link to my Airtable database that is admittedly out of date, but still has great information. I hope to eventually find time to rebuild it someday. To those starting their Shortcuts journey, best of luck. ✌️
          </p>
          <hr class="divider">
        </div>
      </div>
    </div>
    <div class="container-fluid px-3">
      <iframe class="airtable-embed" title="An embed of an Airtable database of links about Shortcuts" src="https://airtable.com/embed/appnNmiH4U5ICrJJe/shrIb2h07RQo1JcI2?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="768" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>

    <div class="ph">
      <a href="https://www.producthunt.com/posts/shortcuts-directory?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shortcuts-directory" target="_blank">
        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=210803&theme=light" alt="Shortcuts Directory - Curated collections of the best links about Siri Shortcuts | Product Hunt Embed" />
      </a>
    </div>
  </main>

  <footer>
    <p class="has-text-centered">
      <small>
        <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a> | Updated: 2024-12-28 | Made by
        <a target="_blank" href="https://bradsiefert.com" title="Brad Siefert's Design Portfolio" rel="noreferrer">Brad Siefert</a>
      </small>
    </p>
  </footer>
</template>
