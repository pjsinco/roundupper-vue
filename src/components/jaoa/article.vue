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
  import mixins from './../../mixins'

  export default {

    name: 'jaoa-article',

    mixins: [mixins],

    methods: {
      seriesChange: function(evt) {
console.log(this.series, Boolean(this.series));
      }
    },

    mounted: function() {
console.log(this.series,Boolean(this.series));
    },

    computed: {

      className: function() {
        if (this.series === 'series-first')
          return 'padding-no-bottom'
        else if (this.series === 'series-middle')
          return 'padding-no-bottom-no-top'
        else if (this.series === 'series-last')
          return 'padding-no-top'
        else
          return 'padding'
      },

      paddingStyleRootTd: function() {
        if (this.series && this.series !== 'series-last') {
          return { padding: 0 }
        }
        
        return { padding: '0px 0px 40px 0px' }
      },

      tableStyle: function() {
        if (!this.series || this.series === 'series-last') {
          return { 
            borderLeft: '1px solid #cccccc',
            borderRight: '1px solid #cccccc',
            borderBottom: '1px solid #cccccc'
          }
        }
        
        return {
          borderLeft:  '1px solid #cccccc',
          borderRight: '1px solid #cccccc'
        }
      },

      paddingStyleBody: function() {
        if (this.series == 'series-middle' || this.series === 'series-last') {
          return { padding: '15px 0px 0px 0px' }
        }
        return { padding: '10px 0px 0px 0px' }
      },

      paddingStyleAuthors: function() {
        if (this.blurb) {
          return { padding: '0px 0px 20px 0px' }
        }
          return { padding: '0px 0px 5px 0px' }
      },

    },

    data: function() {
      
      return {
        title: 'Lorem article title',
        category: 'Original Contribution',
        authors: 'Lorem authors',
        blurb: 'Lorem blurb',
        articleUrl: '',
        imageSrc: 'http://placehold.it/480x240',
        imageUrl: '',
        imageAlt: '',
        free: false,
        video: false,
        showImageForm: false,
        series: '',
        jaoa
      }
    }
  }
</script>

<style lang="scss">


</style>

