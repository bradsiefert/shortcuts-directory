# Shortcuts Directory Readme

## Development Stack
This site uses [https://gridsome.org](Gridsome) which is a static site generator based on VueJS. I love it! It’s wonderful to work with. It’s pretty young, but hopefully it’ll grow up strong over the coming years. 

Here’s an overview of the site’s development stack:

### Frontend 

1. Install Gridsome CLI `npm install --global @gridsome/cli` 
2. Clone this repository from Github.
3. Navigate to the project’s folder
3. Run `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### Backend
1. The backend database is hosted at [https://airtable.com](Airtable), which is a no-code tool for creating spreadsheets and databases. The backend can be viewed here:  [Shortcuts Directory Airtable](https://airtable.com/shrgyzEaEUZDg2pim)
2. The data is imported into Gridsome using the plugin `@gridsome/source-airtable` plugin
3. Airtable has web request rate limits that make it not a bad option as a pure backend web server. This site, and the Gridsome/Airtable plugin, bake in the data whenever the site is built on the server. This makes it so the site is very quick because it doesn’t have to request data from Airtable’s servers.
4. Every time the data in Airtable changes, the site needs to be rebuilt to pull in the latest data. I do this by making a trivial change like adding a comment to the bottom of my `main.js` file.   


### Deployment and Hosting
This site is deployed and hosted at [https://netlify.com](Netlify). Every new push to the main branch of the repo creates a new build of the site. For more information, check out Netlify’s documentation. 