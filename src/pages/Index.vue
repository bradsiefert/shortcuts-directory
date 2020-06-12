<template>
  <Layout 
    :heroTitle="title" 
    heroSubtitle="Apple’s Shortcuts app (formerly Siri Shortcuts) is an exciting platform for automation 
      and vivamus interdum sapien sapien, sit amet tempus justo lacinia ut. Pellentesque habitant morbi 
      tristique senectus egestas."
  >

    <div class="container skinny">
      <div class="divider"></div>

      <div class="columns">
        <div class="column is-one-quarter">
          <aside class="menu">
            <p class="menu-label">
              Categories
            </p>
            <ul class="menu-list">
              <li><a>Start Here</a></li>
              <li><a>News & Blogs</a></li>
              <li><a>Galleries</a></li>
              <li><a>Podcasts</a></li>
              <li><a>Paid Training</a></li>
              <li><a>Expert/Enthusiast Creators</a></li>
              <li><a>Extension Apps</a></li>
              <li><a>Power Tools</a></li>
              <li><a>Communities</a></li>
              <li><a>International</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <div class="title is-3">Start Here</div>
          <p>
            New to Shortcuts? These links are the best places to start. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. In faucibus justo sed pulvinar hendrerit. Vivamus interdum sapien sapien, sit amet tempus 
            justo lacinia ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
            egestas. 
          </p>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  data () {
    return {
      title: "Curated lists of the best links about Shortcuts"
    }
  }
}
</script>
