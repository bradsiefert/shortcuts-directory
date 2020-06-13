<template>
  <Layout 
    heroTitle="Submit a Link" 
    heroSubtitle="Did I miss something? Did you find something new? Please send it along! The Internet is large and 
    I'm bound to miss a link or two. Any help is appreciated."
  >
  <section class="section">
    <div class="container tiny">
      <div class="content">
        <div class="divider"></div>
        <h2 class="title is-3">Send Me a Link</h2>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
          </div>
          <p class="help"><em>Optional</em></p>
        </div>
        
        <div class="field">
          <label class="label">Link</label>
          <div class="control">
            <input class="input" type="text" placeholder="https://">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Message</label>
          <textarea class="textarea" placeholder="Send a message if you'd like. (Optional)"></textarea>
        </div>
        
        <div class="field">
          <div class="control">
            <button class="button is-link is-medium is-fullwidth">Send Link</button>
          </div>
        </div>
      </div>

    </div>
  </section>
  </Layout>
</template>

<script>
import HeroBody from '@/components/HeroBody.vue'

export default {
  components: {
    HeroBody
  },
  data: () => ({
    showNav: false,
  })
};
</script>