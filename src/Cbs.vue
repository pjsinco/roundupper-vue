<template lang="pug">
  div
    div.row
      rupper-header
      div.col-xs-offset-4.col-xs-4
        select-template(v-on:template-selected="handleTemplateSelect")
          option(value="cbs-expiration" selected) Expiration Notice

    div.row
      hr
      transition(name="fade" appear mode="out-in")
        component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

    include ./views/includes/toast
</template>

<script>
  import topMatter from './components/top-matter.vue'
  import rupperHeader from './components/header.vue'
  import selectTemplate from './components/select-template.vue'
  import cbsExpiration from './components/cbs/expiration.vue'

  export default {

    name: 'cbs',

    components: {
      'rupper-header': rupperHeader,
      'select-template': selectTemplate,
      'cbs-expiration': cbsExpiration,
    },


    methods: {
      handleTemplateSelect: function(template) {
        this.currentTemplate = template;
      },

      toastClose: function() {
        document.getElementById('toastContainer').classList.remove('active')
      },
    },

    data: function() {
      return {
        currentTemplate: 'cbs-expiration',
      }
    }


  }


</script>
