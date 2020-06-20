<template>
  <Layout 
    heroTitle="Submit a Link" 
    heroSubtitle="Did I miss something? Did you find something new? Please send it along! The Internet is large and 
    I'm bound to miss a link or two. Any help is appreciated."
  >
  <section class="section content">
    <div class="container tiny">
      <hr />
      <h2 class="title is-4">Send a Link</h2>

      <form 
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div class="field">
          <label for="Contact Name" class="label">Name</label>
          <div class="control">
            <input name="Contact Name" class="input" type="text" placeholder="Your Name (optional)">
          </div>
        </div>

        <div class="field">
          <label for="" class="label">Email</label>
          <div class="control">
            <input name="Email Address" class="input" type="email" placeholder="name@email.com (optional)">
          </div>
        </div>

        <div class="field">
          <label for="URL" class="label">URL to Send</label>
          <div class="control">
            <input name="URL" class="input" type="text" placeholder="https://">
          </div>
        </div>

        <div class="field">
          <label for="Message" class="label">Message</label>
          <textarea name="Message" class="textarea" placeholder="Send a message if you'd like. (optional)"></textarea>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link is-medium is-fullwidth" type="submit">Send it ✅</button>
          </div>
        </div>
      </form>

    </div>
  </section>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Submit a Link'
  },
  data: () => ({
    showNav: false,
  }),
  data() {
    return {
      formData: {},
    }
  }
};
</script>