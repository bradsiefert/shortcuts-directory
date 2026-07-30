# Shortcuts Directory Setup Instructions
This is the site I built to showcase curated collections of links about Apple Shortcuts app. It originally used Gridsome, but it was abandoned so I created a simple archive page pointing to my Airtable database.

---

## Setup the site locally
Make sure to install the dependencies:

1. Clone the site's repository
2. In your terminal app, install the site's dependancies. (I use npm as my package manger to manage dependancies.):
```bash
npm install
```
3. In your terminal app, start the development server
```bash
npm run dev
```
This will on start the local development server at: http://localhost:3000

4. Navigate to the local development server in your web browser and confirm the site is running locally.

## Dealing with the production/live site
The website is hosted at [Netlify](https://netlify.com) and has continuous integration setup with the Github repository. Anytime a change is pushed to a branch, the site is rebuilt and published on Netlify.

If the change is pushed to the `master` branch, it will immediate go live to the internet at shortcuts.directory. If the change is pushed to any other branch, the change will create a Deploy Preview in Netlify where the changes can be reviewed. The changes on that branch must be merged into the `master` branch for them to be built and to go live on the production site (shortcuts.directory).

## Nuxt 4 production build options
Nuxt has a these options for building or previewing the site.

Locally preview production build:

```bash
npm run preview
```

Build the application for production:

```bash
npm run build
```
