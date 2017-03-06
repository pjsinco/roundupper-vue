<template>
  <div id="highlight">
    <div>
      <component :is="workingTemplate" v-bind:working-template="workingTemplate" v-bind:working-model="workingModel"></component>
    </div>
  </div>
</template>

<script>

  import jaoaBanner from './renders/jaoa/banner.vue'
  import jaoaArticle from './renders/jaoa/article.vue'

  export default {


    props: ['workingTemplate', 'workingModel'],

    components: {

      'jaoa-banner': jaoaBanner,
      'jaoa-article': jaoaArticle,

    },
  }
</script>

<style>
</style>
