<template>
  <div>
    <div class="row">
      <header>Roundupper</header>
      <div class="col-xs-offset-4 col-xs-4">
        <select-template v-on:template-selected="handleTemplateSelect"></select-template>
      </div>
    </div>

{{ currentTemplate }}
    <div class="row" id="workspace">
      <workspace v-bind:workingTemplate="currentTemplate"></workspace>
    </div>
  </div>
</template>

<script>

  import header from './components/header.vue'
  import workspace from './components/workspace.vue'
  import selectTemplate from './components/select-template.vue'

  export default {

    name: 'app',

    components: {
      header,
      'select-template': selectTemplate,
      'workspace': workspace,
    },

    methods: {

      handleTemplateSelect: function(template) {
        this.currentTemplate = template;
      },

    },

    data () {
      return {
        
        currentTemplate: 'jaoa-article',
      }
    }

  }
</script>

<style lang="scss">
</style>
