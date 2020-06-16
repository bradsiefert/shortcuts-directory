<template lang="html">
  <div class="hero-body">
    <div class="container super-skinny has-text-centered">
      <h1 class="title is-1 has-text-white" style="margin-bottom: 32px;">
        {{ herotitle }}
      </h1>
      <div class="subtitle mb-6" style="color: #54AEFF;">
        {{ herosubtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBody',
  props: {
    herotitle: String,
    herosubtitle: String
  }
}
</script>