<template>
  <nav class="navbar navbar-inverse" id="nav">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Roundupper</a>
      </div>
      
      <div class="navbar-center">
        <slot name="select"></slot>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ templateName }} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="route in app.routes">
              <a v-bind:href="route.path">{{ route.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      
    </div>
    
  </nav>
</template>

<script>

  import { app } from './../app-constants'

  export default {

    mounted: function() {

      console.log(app.routes.length);
    },

    data: function() {

      return {
        app
      };
    },

    props: ['templateName'],

  }

</script>

<style>
</style>
