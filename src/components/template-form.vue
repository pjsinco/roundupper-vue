<template>

  <div>
    <component :is="workingTemplate" v-bind:working-template="workingTemplate" v-bind:working-model="workingModel"></component>
  </div>


</template>

<script>

  import jaoaArticle from './forms/jaoa/article.vue'
  import jaoaBanner from './forms/jaoa/banner.vue'
  
  export default {

    props: ['workingTemplate', 'workingModel'],

    components: {
      'jaoa-article': jaoaArticle,
      'jaoa-banner': jaoaBanner,
    },

    mounted: function() {
console.log('frominsidetemplateform: ' + this.workingTemplate);
    },

  }

</script>

<style>
</style>
