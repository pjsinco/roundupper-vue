<template>

  <div id="workspace">
    <div id="form" class="col-lg-6 col-md-12">
      <template-form v-on:update="handleUpdate" v-bind:workingTemplate="workingTemplate" v-bind:working-model="this[workingTemplate]"></template-form>
    </div>
    <div id="rendered" class="col-lg-6 col-md-12">
      <template-render v-bind:workingTemplate="workingTemplate" v-bind:working-model="this[workingTemplate]"></template-render>
    </div>
    <div id="clone" style="position: absolute; top: -5000px; left: -5000px"></div>
  </div>

</template>

<script>

  import templateForm from './template-form.vue' 
  import templateRender from './template-render.vue' 

  export default {

    components: {
      'template-form': templateForm,
      'template-render': templateRender,
    },

    props: ['workingTemplate'],

    methods: {

      handleUpdate(value, foo) {
debugger

      }
    },

    data: function() {

      return {

        'jaoa-article': {
          title: 'Lorem article title',
          category: 'Original Contribution',
          authors: 'Lorem authors',
          blurb: '',
          articleUrl: '',
          imageSrc: '',
          imageUrl: '',
          imageAlt: '',
          free: false,
          video: false,
          showImageForm: false,
        },
        
        'jaoa-banner': {
           alt: 'Banner image',
           imageUrl: 'http://placehold.it/600x300',
        },
      }
    },

  }
</script>

<style>
</style>
