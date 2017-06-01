<template lang="pug">

  a(v-bind:href="href" v-on:click="handleClick")
    slot

</template>

<script>

  import mixins from './../mixins'
  import { app } from './../app-constants'

  export default {

    name: 'v-link',

    mixins: [mixins],

    props: [ 'href' ],

    methods: {
      handleClick: function(evt) {
        evt.preventDefault();
        this.navigate(evt.target.pathname);
      },
    }
  }

</script>

