<template lang="pug">
  navbar(templateName="Choose Template")

</template>

<script>
  import rupperHeader from './components/header.vue'
  import navbar from './components/navbar.vue'
  import mixins from './mixins'

  export default {

    name: 'home',

    mounted: function() {
    },

    components: {
      'rupper-header': rupperHeader,
      'navbar': navbar,
    },

    mixins: [mixins],

    methods: {
      handleChange: function(evt) {
        window.location.pathname = `/${evt.target.value}`;
      }
    },

    data: function() {

      return {

      };
    }
  }

</script>


<style lang="scss">

  @import './assets/sass/variables';
  @import './../node_modules/animate.css/animate.min.css';
  @import './assets/sass/tooltipped';
  @import './assets/sass/toast';
  
  html,
  body {
    height: 100%;
  }

  #rendered {
      text-align: center;
  }
  
  #highlight {
      display: inline-block;
      padding-top: 1em;
      padding-right: 2em;
      padding-bottom: 1em;
      padding-left: 2em;
  }
  
  .page-heading {
  
      margin-top: 1em;
      margin-bottom: 0;
      padding-bottom: 1em;
      text-align: left;
      font-size: 1.5em;
      font-weight: 200;
      color: gray;
      line-height: 1;
      
      &:after {
          content: "";
          position: absolute;
          left: -30rem;
          width: 42rem;
          height: 1px;
          display: block;
          margin-top: .5em;
          margin-left: 0;
          
          background: firebrick;
      }
  
  }
  
  .btn:focus {
      outline: none;
  }
  
  label {
      font-weight: 400;
      color: gray;
  }
  
  hr {
      /*border-top: 1px dashed #929292;*/
      border-top: 1px dashed #ccc;
  }
  
  .checkbox-inline > label:last-child {
      margin-left: 2em;
  }
  
  .image-group {
    background: aliceblue;
    margin-bottom: 1.25rem;
    margin-top: 1.75rem;
    padding: 1.25rem;
  
    h3 {
      margin-top: 0;
      margin-bottom: 1.25rem;
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
  
  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }

  .stick {
    position: fixed !important;
    //top: 1rem;
    height: 100%;
    width: 50%;
    overflow-y: scroll;
  }

  .workspace {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .form-container {
    position: relative;
    width: 50%;
    //background-color: #f5f5f5;
    border-right: 1px solid #d0d0d0;
  }

  .rendered-container, 
  .rendered-container--no-padding {
    width: 50%;
  }

  .rendered-container {
    padding: 2rem;
  }

  .form {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem;
  }

  .sidebar {
    //position: absolute;
  }

  .navbar-center {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  .navbar-center label {
    margin-right: 8px;
  }

  .blank {
    height: 100%;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /**
   * Bootstrap overrides
   *
   */
  body {
    font-family: $body-font;
  }

  .help-block {
    font-size: 90%;
    color: rgba(115, 115, 115, 0.57);
  }

  .btn-default.focus,
  .btn-default:focus {
    background-color: #fff;
    border-color: #adadad;
  }

  .btn-primary.focus,
  .btn-primary:focus {
    background-color: #337ab7;
    border-color: #204d74;
  }

  .btn-info.focus,
  .btn-info:focus {
    background-color: #31b0d5;
    border-color: #269abc;
  }
  
  .navbar {
    border-radius: 0px;
    margin-bottom: 0;
  }

</style>
