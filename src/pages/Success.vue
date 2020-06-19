<template>
  <Layout 
    heroTitle="Submit a Link" 
    heroSubtitle="Did I miss something? Did you find something new? Please send it along! The Internet is large and 
    I'm bound to miss a link or two. Any help is appreciated."
  >
  <section class="section content">
    <div class="container tiny">
      <hr />
      <h2 class="title is-4">Link sent</h2>
      <p>
        Thanks for reaching out.
      </p>

    </div>
  </section>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Form Success'
  },
  data: () => ({
    showNav: false,
  })
};
</script>