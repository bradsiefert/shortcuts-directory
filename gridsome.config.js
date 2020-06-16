// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shortcuts Directory',
  siteDescription: "A curated collection of the best links about Apple's Shortcuts app.",
  siteUrl: 'https://shortcuts.link',
  titleTemplate: `Shortcuts Directory / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter'],
            }]
          ]
        }
      }
    }
  ]
}
