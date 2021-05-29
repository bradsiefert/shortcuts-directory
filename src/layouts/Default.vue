<template>
  <div>
    <section class="hero">
      <div class="hero-header">
        <div class="top-bar"></div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container super-skinny">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <g-image alt="Shortcuts Directory Logo" src="@/assets/images/logo.svg" />
              </a>

              <a
                role="button" class="navbar-burger burger" :class="{ 'is-active': showNav }" aria-label="menu" 
                aria-expanded="false" @click="showNav = !showNav"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div class="navbar-menu is-shadowless" :class="{ 'is-active': showNav } ">
              <div class="navbar-end">
                <g-link class="navbar-item" to="/">Collections</g-link>
                <g-link class="navbar-item" to="/about">About</g-link>
                <g-link class="navbar-item" to="/submitalink">Submit A Link</g-link>
              </div>
            </div>
          </div>
        </nav>
      </div><!-- /hero-header -->

      <div class="hero-body">
        <div class="container super-skinny has-text-centered">
          <h1 class="title is-2 has-text-white mb-3">
            {{ heroTitle }}
          </h1>
          <div class="subtitle has-text-info is-6 mb-5">
            {{ heroSubtitle }} 
          </div>
        </div>
      </div><!-- /hero-body -->
    </section>

    <transition name="fade" appear>
      <main>
        <div class="ph">
          <a href="https://www.producthunt.com/posts/shortcuts-directory?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shortcuts-directory" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=210803&theme=light" alt="Shortcuts Directory - Curated collections of the best links about Siri Shortcuts | Product Hunt Embed" />
          </a>
        </div>

        <slot/>
      </main>
    </transition>
    
    <footer>
      <p class="has-text-centered">
        <small>
          <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a> | Last Update: <date>2021-05-29</date> | Made by 
          <a target="_blank" href="https://bradsiefert.com" title="Brad Siefert's Design Portfolio" rel="noreferrer">Brad Siefert</a>
          <a target="_blank" href="https://twitter.com/bksiefert" title="Brad Siefert's Twitter" rel="noreferrer">
          <font-awesome :icon="['fab', 'twitter']" class="ml-3"/></a>
        </small>
      </p>
    </footer>

  </div>
</template>

<script>
  export default {
    props: {
      heroTitle: String,
      heroSubtitle: String,
    },
    data: () => ({
      showNav: false, // This is to make the navbar open/close on mobile.
    })
  };
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

  // Hero
  .top-bar {
    background-image: linear-gradient(270deg, #9876F8 0%, #FF85B8 100%);
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.32);
    height: 4px;
  }

  .hero {
    min-height: 480px;
    background-image: url('../assets/images/confetti.png'), linear-gradient(0deg, #7162B3 0%, #212C70 53%, #1B2357 100%);
    background-position: bottom center;
    background-size: contain, cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 767px) {
    .hero {
      background-position: 5% center;
      background-size: cover;
    }
  }

  .hero-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // Navbar
  .navbar {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    font-size: 1.125rem;
    font-weight:   800;
  }

  .navbar-item img {
    max-height: none;
  }

  .navbar-item {
    padding: 0.5rem 1rem;
  }

  .navbar-burger.burger {
    color: #FFA7ED;
  }

  @media (max-width: 1023px) {
    .navbar-brand img {
      width: 192px;
    }
  }
</style>
