<template>
  <div>
    <section class="hero">
      <div class="hero-header">
        <div class="top-bar"></div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container skinny">
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
                <g-link class="navbar-item" to="/">Links</g-link>
                <g-link class="navbar-item" to="/about">About</g-link>
                <g-link class="navbar-item" to="/submitalink">Submit A Link</g-link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container super-skinny has-text-centered">
          <h1 class="title is-1 has-text-white" style="margin-bottom: 32px;">
            {{ heroTitle }}
          </h1>
          <div class="subtitle mb-6" style="color: #54AEFF;">
            {{ heroSubtitle }} 
          </div>
        </div>
      </div>
    </section>

    <main>
      <slot/>
    </main>

  </div>
</template>

<script>
export default {
  props: {
    heroTitle: String,
    heroSubtitle: String,
  },
  data: () => ({
    showNav: false,
  })
};
</script>

<style lang="scss">
  .hero {
    min-height: 560px;
    background-image: url('../assets/images/confetti.png'), linear-gradient(0deg, #7162B3 0%, #212C70 53%, #1B2357 100%);
    background-position: bottom center;
    background-size: contain, cover;
    background-repeat: no-repeat;
    margin-bottom: 3rem;
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

  .top-bar {
    background-image: linear-gradient(270deg, #9876F8 0%, #FF85B8 100%);
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.32);
    height: 4px;
  }

  .navbar {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    font-size: 1.125rem;
    font-weight: 800;
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
