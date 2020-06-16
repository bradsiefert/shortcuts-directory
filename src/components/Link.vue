<template lang="html">
  <div class="column is-half">
    <div class="box link">
      <div class="link-status">Active</div>
      <article class="media mb-2">
        <figure class="media-left">
          <p class="image is-48x48">
            <a href="">
              <g-image src="@/assets/images/link-default-avatar.png" />
            </a>
          </p>
        </figure>
        <div class="media-content">
          <a href="">
            <p class="title is-6 has-text-dark">Data Jar</p>
          </a>
        </div>
      </article>
      <p class="link-description">
        Data Jar is a data store designed to be used with Shortcuts. The data store lets you persist 
        key-value pairs.
      </p>
      <p class="link-urls">
        <ul>
          <li><a href="">&rarr; datajar.app</a></li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>