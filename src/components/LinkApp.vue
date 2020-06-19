<template lang="html">
  <div class="box link app">
    <div class="link-status">{{link.status}}</div>
    <article class="media mb-2">
      <figure class="media-left">
        <p class="image is-48x48">
          <g-link :to="link.url">
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
    <p class="link-developer">by {{link.appDeveloper}}</p>
    <p class="link-description">
      {{link.description}}
    </p>
    <p class="link-urls my-0">
      <ul>
        <li><g-link :to="link.url">&rarr; {{link.urlDomain}}</g-link></li>
        <li><a class="app-store" href="/">&rarr; App Store</a></li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LinkApp',
  props: {
    link: Object
  }
}
</script>