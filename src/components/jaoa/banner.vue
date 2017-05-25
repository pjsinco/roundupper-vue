<template lang="pug">
  div#workspace.clearfix.workspace
    div.form-container
      div#form.form
        include ./../../views/jaoa/forms/banner
    div.rendered-container
      div#rendered
        include ./../../views/jaoa/renders/banner
    div#clone(style="position: absolute; top: -5000px; left: -5000px")
</template>

<script>

  import mixins from './../../mixins'

  export default {

    mixins: [mixins],

    methods: {
      copy: function(evt) {
        this.copyHtml()
      },
    },

    data: function() {
      
      return {
        alt: 'Banner image',
        imageUrl: 'http://placehold.it/600x300',
      }
    }
  }
</script>

<style lang="scss">

</style>

