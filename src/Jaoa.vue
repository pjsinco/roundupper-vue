<template lang="pug">
  div
    div.row
      rupper-header
      div.col-xs-offset-4.col-xs-4
        select-template(v-on:template-selected="handleTemplateSelect")
          option(value="jaoa-article" selected) Article
          option(value="jaoa-banner") Banner
          option(value="jaoa-intro") Intro

    div.row
      hr
      transition(name="fade" appear mode="out-in")
        component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

    include ./views/includes/toast
    
</template>

<script>

  import rupperHeader from './components/header.vue'
  import selectTemplate from './components/select-template.vue'
  import jaoaArticle from './components/jaoa/article.vue'
  import jaoaBanner from './components/jaoa/banner.vue'
  import jaoaIntro from './components/jaoa/intro.vue'

  export default {

    name: 'jaoa',

    components: {
      'rupper-header': rupperHeader,
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
