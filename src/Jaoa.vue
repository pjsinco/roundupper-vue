<template lang="pug">
div.blank
  navbar(templateName="JAOA")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      option(value="jaoa-article" selected) Article
      option(value="jaoa-banner") Banner
      option(value="jaoa-intro") Intro

  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import jaoaArticle from './components/jaoa/article.vue'
  import jaoaBanner from './components/jaoa/banner.vue'
  import jaoaIntro from './components/jaoa/intro.vue'

  export default {

    name: 'jaoa',

    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'jaoa-article': jaoaArticle,
      'jaoa-banner': jaoaBanner,
      'jaoa-intro': jaoaIntro,
    },

    methods: {

      handleTemplateSelect: function(template) {
        this.currentTemplate = template;
      },

      toastClose: function() {
        document.getElementById('toastContainer').classList.remove('active')
      },

    },

    data () {
      return {
        currentTemplate: 'jaoa-article',
      }
    }

  }
</script>

<style>
</style>
