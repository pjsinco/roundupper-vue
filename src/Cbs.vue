<template lang="pug">
  div.blank
    navbar(templateName="Certifying Board Services")
      select-template(slot="select" v-on:template-selected="handleTemplateSelect")
        option(value="cbs-expiration" selected) Expiration Notice

    transition(name="fade" appear mode="out-in")
      component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

    include ./views/includes/toast
</template>

<script>
  import rupperHeader from './components/header.vue'
  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import cbsExpiration from './components/cbs/expiration.vue'

  export default {

    name: 'cbs',

    components: {
      'rupper-header': rupperHeader,
      'select-template': selectTemplate,
      'cbs-expiration': cbsExpiration,
      'navbar': navbar,
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
