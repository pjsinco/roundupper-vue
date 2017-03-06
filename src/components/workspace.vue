<template>


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
