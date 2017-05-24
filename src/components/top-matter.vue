<template lang="pug">
  div
    div.row
      rupper-header Roundupper
      div.col-xs-offset-4.col-xs-4
        select-template(v-on:template-selected="templateSelected")
          slot(name="options")

    div.row
      hr
      transition(name="fade" appear mode="out-in")
        component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

    include ./../views/includes/toast
</template>

<script>
  import rupperHeader from './header.vue'
  import selectTemplate from './select-template.vue'
  import mixins from './../mixins'

  export default {

    name: 'top-matter',

    props: ['templateSelect'],

    mounted: function() {
console.log('x' + templateSelect);
    },

    methods: {
      templateSelected: function() {
        this.$emit('template-selected', evt.target.value);
      }
    },

    components: {
      'rupper-header': rupperHeader,
      'select-template': selectTemplate,
    },
  }

</script>

<style>
</style>
