// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Shortcuts Directory',
      meta: [
        { name: 'description', content: "Curated collections of the best links about Apple's Shortcuts app." },
        { property: "og:image", content: 'https://shortcuts.directory/sharingtile.jpg' },
      ],
    }
  },
  css: [
    '@/assets/scss/styles.scss'
  ],

  compatibilityDate: '2026-07-30'
})
