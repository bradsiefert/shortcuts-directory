<template>
  <Layout 
    :heroTitle="title" 
    heroSubtitle="Apple’s Shortcuts app (aka Siri Shortcuts) is an exciting platform for automating tasks. 
    This directory is my attempt to collect all the best Shortcuts resources. I hope it helps you find and create 
    shortcuts to make your life better."
  >
    <section class="section">
      <div class="container skinny">
        <hr class="divider">

        <div class="columns">
          <div class="column is-one-quarter-desktop is-one-fifth-tablet">
            <Collections />
          </div>

          <div class="column">
            <div class="content">
              <hr class="divider is-hidden-tablet">
              <h2 class="title is-4">Extension Apps</h2>
            </div>

            <!-- Inner Columns Begin -->
            <div class="columns is-multiline">

              <div class="column is-half" v-for="edge in $page.links.edges" :key="edge.node.id">
                <LinkApp :link="edge.node"/> 
              </div>

            </div><!-- /columns is-multiline-->
          </div>
        </div><!-- /columns -->

      </div><!-- /container -->
    </section>
  </Layout>
</template>

<page-query>
query Links {
  links: allLink (
    filter: { category: { contains: "Apps" } }
    sortBy: "sortingOrderId" order: ASC
  ) {
    edges {
      node {
        id
        linkName
        description
        url
        category
        status
        appStoreUrl
        appDeveloper
        urlShort
        urlDomain
        iconShort
        sortingOrderId
      }
    }
  }
}
</page-query>

<script>
import Layout from '@/layouts/Default.vue'
import Collections from '@/components/Collections.vue'
import LinkApp from '@/components/LinkApp.vue'

export default {
  metaInfo: {
    title: 'Extension Apps'
  },
  components: {
    Collections, Layout, LinkApp
  },
  data () {
    return {
      title: "Curated collections of the best links about Shortcuts"
    }
  }
}
</script>
