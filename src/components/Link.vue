<template lang="html">
  <div class="box link">
    <div class="link-status">{{link.status}}</div>
    <article class="media mb-2">
      <figure class="media-left">
        <p class="image is-48x48">
          <g-link :to="link.url" :title="`Link to ${link.linkName}`">
            <g-image :src="link.iconShort" :alt="`Logo for ${link.linkName}`" />
          </g-link>
        </p>
      </figure>
      <div class="media-content">
        <g-link :to="link.url">
          <p class="title is-6 has-text-dark">{{link.linkName}}</p>
        </g-link>
      </div>
    </article>
    <p class="link-description">
      {{link.description}}
    </p>
    <p class="link-urls my-0">
      <ul>
        <li><g-link :to="link.url" rel="noreferrer">
          &rarr; {{link.urlDomain}}
        </g-link></li>
      </ul>
    </p>
  </div>
</template>


<script>
export default {
  name: 'Link',
  props: {
    link: Object
  }
}
</script>