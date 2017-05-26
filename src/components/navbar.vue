<template lang="pug">
  nav.navbar.navbar-inverse#nav
    div.container-fluid
      div.navbar-header
        a.navbar-brand(href="/") Roundupper
      
      div.navbar-center
        slot(name="select")

      ul.nav.navbar-nav.navbar-right
        li.dropdown
          a.dropdown-toggle(href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false") {{ templateName }} #[span.caret]
          ul.dropdown-menu
            li(v-for="route in app.routes")
              a(v-bind:href="route.path") {{ route.name }}
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
