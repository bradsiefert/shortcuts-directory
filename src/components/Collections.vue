<template lang="html">
  <aside class="menu">
    <p class="menu-label">
      Collections
    </p>
    <ul class="menu-list">
      <li><g-link title="Start Here" to="/" exact>Start Here</g-link></li>
      <li><g-link title="Gallery Sites" to="/gallerysites">Gallery Sites</g-link></li>
      <li><g-link title="Enthusiast Creators" to="/extensionapps">Extension Apps</g-link></li>
      <li><g-link title="Enthusiast Creators" to="/enthusiastcreators">Enthusiast Creators</g-link></li>
      <li><g-link title="Podcasts" to="/podcasts">Podcasts</g-link></li>
      <li><g-link title="Paid Training" to="/training">Paid Training</g-link></li>
      <li><g-link title="Communities" to="/communities">Communities</g-link></li>
      <li><g-link title="News & Blogs" to="/newsandblogs">News & Blogs</g-link></li>
      <li><g-link title="Power Tools" to="/powertools">Power Tools</g-link></li>
      <li><g-link title="History" to="/history">History</g-link></li>
      <li><g-link title="International" to="/international">International</g-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Collections'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  // Menu
  .menu {
    font-size: 0.9375rem;
  }

  .menu-label {
    font-size: 0.875rem;
    color: $dark;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 800;
    border-radius: 1rem;
  }

  .menu-list a {
    line-height: 1.0625rem;
    border-radius: 4rem;
  }

  .menu-list a:active {
    color: #9876F8;
    background-color: #FAF8FF;
    border-radius: 1rem;
  }

  .menu-label:not(:last-child) {
    font-weight: 0.5rem;
  }

  .menu-list > li > a.active {
    color: #9876F8;
    background-color: #FAF8FF;
  }
</style>
