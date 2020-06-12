// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Import Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&family=Inter:wght@400;600;800;900&display=swap'
  })
}

import '~/assets/scss/styles.scss'

import DefaultLayout from '~/layouts/Default.vue'