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
  import Clipboard from './../../../node_modules/clipboard/dist/clipboard.min.js'

  export default {

    methods: {
      onMouseLeave: function() {
console.log('mouseleave');
        //$('#copyHtml').removeClass('tooltipped tooltipped-w');
      },

      collapseSelection: function(elementId) {

        const elem = document.getElementById(elementId)

        if (window.getSelection()) {
            window.getSelection().collapse(elem, 0)
        }
      },

      cloneRenderedVersion: function() {
        const htmlVersion = document.getElementById('rendered')
        document.getElementById('clone').innerText = htmlVersion.innerHTML
      },

      copyHtml: function() {

        this.collapseSelection('clone');
        this.cloneRenderedVersion();

        const clipboard = new Clipboard('#copyHtml', {
          target: function(trigger) {
            return document.getElementById('clone');
          }
        });

        clipboard.on('success', function(evt) {
          console.log('Copied!');
//          $('#highlight').addClass('animated jello');
//          $('#highlight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//            $(this).removeClass('animated jello');
//          });
//          $('#copyHtml').addClass('tooltipped tooltipped-w');
          clipboard.destroy();
        });
      },

      copyTextVersion: function() {

      },
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

