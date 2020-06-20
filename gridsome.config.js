// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shortcuts Directory',
  siteDescription: "Curated collections of the best links about Apple's Shortcuts app.",
  siteUrl: 'https://shortcuts.link',
  titleTemplate: `Shortcuts Directory / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_KEY, // required
        base: process.env.AIRTABLE_BASE, // required
        tables: [
          {
            name: 'Links', // required
            typeName: 'Link', // required
            select: {
              sort: [{field: "Sorting Order ID", direction: "asc"}],
            },
          },
        ],
      },
    },
  ],
}
