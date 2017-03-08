<template>
  <div>
    <div class="row">
      <rupper-header>Roundupper</rupper-header>
      <div class="col-xs-offset-4 col-xs-4">
        <select-template v-on:template-selected="handleTemplateSelect"></select-template>
      </div>
    </div>

    <div class="row">
      <hr>
      <transition name="fade" appear mode="out-in">
        <component v-bind:is="currentTemplate" v-bind:current-template="currentTemplate"></component>
      </transition>
    </div>
  </div>
</template>

<script>

  import rupperHeader from './components/header.vue'
  import workspace from './components/workspace.vue'
  import selectTemplate from './components/select-template.vue'
  import jaoaArticle from './components/jaoa/article.vue'
  import jaoaBanner from './components/jaoa/banner.vue'
  import jaoaIntro from './components/jaoa/intro.vue'

  export default {

    name: 'app',

    components: {
      'rupper-header': rupperHeader,
      'select-template': selectTemplate,
      'workspace': workspace,
      'jaoa-article': jaoaArticle,
      'jaoa-banner': jaoaBanner,
      'jaoa-intro': jaoaIntro,
    },

    methods: {

      handleTemplateSelect: function(template) {
        this.currentTemplate = template;
      },

    },

    data () {
      return {
        currentTemplate: 'jaoa-article',
      }
    }

  }
</script>

<style lang="scss">

  @import './../node_modules/animate.css/animate.min.css';

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
          left: -8.4375em;
          width: 14.3em;
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
  
  /**
   * Bootstrap overrides
   *
   */
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
</style>
