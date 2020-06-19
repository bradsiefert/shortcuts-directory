<template lang="html">
  <aside class="menu">
    <p class="menu-label">
      Categories
    </p>
    <ul class="menu-list">
      <li><g-link to="/" exact>Start Here</g-link></li>
      <li><g-link to="/gallerysites">Gallery Sites</g-link></li>
      <li><g-link to="/enthusiastcreators">Enthusiast Creators</g-link></li>
      <li><g-link to="/extensionapps">Extension Apps</g-link></li>
      <li><g-link to="/podcasts">Podcasts</g-link></li>
      <li><g-link to="/training">Paid Training</g-link></li>
      <li><g-link to="/communities">Communities</g-link></li>
      <li><g-link to="/newsandblogs">News & Blogs</g-link></li>
      <li><g-link to="/powertools">Power Tools</g-link></li>
      <li><g-link to="/international">International</g-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Categories'
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
