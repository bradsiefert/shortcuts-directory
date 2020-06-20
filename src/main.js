// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'

// Adding FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
library.add(faTwitter)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Import FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon)
  // Import Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&display=swap'
  }),
  // Facebook Graph API Sharing Tiles
  // head.meta.push({ property: 'og:type', content: 'article'}),
  // head.meta.push({ property: 'og:url', content: 'https://shortcuts.directory'}),
  // head.meta.push({ property: 'og:title', content: 'Shortcuts Directory'}),
  // head.meta.push({ property: 'og:description', content: 'Curated collections of the best links about Apple&apos;s Shortcuts app.'}),
  // head.meta.push({ property: 'og:image', content: 'https://shortcuts-directory.netlify.app/sharingtile.jpg'})
}