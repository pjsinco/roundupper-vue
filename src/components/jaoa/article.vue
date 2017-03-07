<template lang="pug">

  div#workspace

    div#form.col-lg-6.col-md-12
      include ./../../views/jaoa/forms/article

    div#rendered.col-lg-6.col-md-12
      include ./../../views/jaoa/renders/article

    div#clone(style="position: absolute; top: -5000px; left: -5000px")

</template>

<script>

  import { jaoa } from './../../app-constants'

  export default {

    methods: {

    },

    mounted: function() {

    },

    data: function() {
      
      return {
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
        jaoa
      }
    }
  }
</script>

<style lang="scss">

</style>

