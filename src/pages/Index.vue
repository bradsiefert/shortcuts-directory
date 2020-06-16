<template>
  <Layout 
    :heroTitle="title" 
    heroSubtitle="Apple’s Shortcuts app (formerly Siri Shortcuts) is an exciting platform for automating tasks. 
    This directory is my attempt to collect all the best Shortcuts resources. I hope it helps you find and create 
    shortcuts to make your life better."
  >
    <section class="section">
      <div class="container skinny">
        <hr class="divider"></hr>

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

          <div class="column is-three-quarters">
            <div class="content">
              <hr class="divider is-hidden-tablet"></hr>
              <h2 class="title is-4 mb-3">Start Here</h2>
              <p>
                New to Shortcuts? These links are the best places to start. These links are each full of great resources to help you learn about Shortcuts, especially for beginners. The Shortcuts User Guide is Apple's user manual for the Shortcuts app. The Shortcuts subreddit is a good place to ask questions or search or solutions if you're having issues. Matthew Cassinelli and MacStories each have hundreds of shortcuts on their sites for you to check out and customize to fit your needs.
              </p>
            </div>

            <!-- Inner Columns -->
            <div class="columns is-multiline is-mobile">
              <!-- Box for App -->
              <div class="column is-half">
                <div class="box link">
                  <article class="media mb-2">
                    <figure class="media-left">
                      <p class="image is-48x48">
                        <a href="">
                          <g-image src="@/assets/images/link-default-avatar.png" />
                        </a>
                      </p>
                    </figure>
                    <div class="media-content">
                      <a href="">
                        <p class="title is-6 has-text-dark">Data Jar</p>
                      </a>
                    </div>
                  </article>
                  <p class="link-developer is-3">by Simon B. Støvring</p>
                  <p class="link-description">
                    Data Jar is a data store designed to be used with Shortcuts. The data store lets you persist 
                    key-value pairs.
                  </p>
                  <p class="link-urls">
                    <ul>
                      <li><a href="">&rarr; datajar.app</a></li>
                      <li><a class="app-store" href="">&rarr; App Store</a></li>
                    </ul>
                  </p>
                </div>
              </div>
              
              <!-- Box for Link -->
              <div class="column is-half">
                <div class="box link">
                  <article class="media mb-2">
                    <figure class="media-left">
                      <p class="image is-48x48">
                        <g-image src="@/assets/images/link-default-avatar.png" />
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="title is-6 has-text-dark">Data Jar</div>
                    </div>
                  </article>
                  <p class="link-description">
                    Data Jar is a data store designed to be used with Shortcuts. The data store lets you persist 
                    key-value pairs.
                  </p>
                  <p class="link-urls">
                    <ul>
                      <li><a href="">&rarr; datajar.app</a></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Inner Columns -->

        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      title: "Curated lists of the best links about Shortcuts"
    }
  }
}
</script>
