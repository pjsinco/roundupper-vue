<template lang="pug">

  div#workspace

    div#form.col-lg-6.col-md-12
      include ./../../views/jaoa/forms/intro

    div#rendered.col-lg-6.col-md-12
      include ./../../views/jaoa/renders/intro

    div#clone(style="position: absolute; top: -5000px; left: -5000px")

</template>

<script>

  import mixins from './../../mixins'
  import { jaoa } from     './../../app-constants'
  import colorMap from './../../constants/color-map'

  export default {

    mixins: [mixins],

    methods: {
      copy: function(evt) {
        this.copyHtml(function(html) {
          const newHtml = this.surround('Raleway', html, "'")
          return this.surround('Roboto', newHtml, "'")
        }.bind(this))
      },
    },

    mounted: function() {
    },

    computed: {
      teaserStyle: function() {
        return {
          padding: '0 0 20px 0',
          fontFamily: `${"\'Raleway\', Helvetica, arial, sans-serif"}`,
          fontWeight: 500,
          fontSize: '22px',
          textAlign: 'left',
          lineHeight: '28px',
          color: colorMap[this.color].full,
        }
      },
  
      buttonStyle: function() {
        return {
          display: 'inline-block',
          padding: '0px 10px 0px 10px',
          fontSize: '15px',
          fontFamily: "'Raleway', Helvetica, Arial, sans-serif",
          fontWeight: 'normal',
          color: '#ffffff',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '.5px',
          backgroundColor: colorMap[this.color].full,
          borderTop:    '10px solid ' + colorMap[this.color].full,
          borderBottom: '10px solid ' + colorMap[this.color].full,
          borderLeft:   '20px solid ' + colorMap[this.color].full,
          borderRight:  '20px solid ' + colorMap[this.color].full,
        }
      },
    },

    

    data: function() {
      
      return {
        teaser: 'Lorem teaser',
        blurb: 'Lorem ipsum dolor',
        buttonText: 'Lorem button',
        coverImageSrc: 'http://placehold.it/380x525',
        color: jaoa.colors[0].toLowerCase(),
        url: 'http://jaoa.org/Issue.aspx',
        jaoa,
      }
    }
  }
</script>

<style lang="scss">

</style>

