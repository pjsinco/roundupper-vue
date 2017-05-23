<template lang="pug">

  div#workspace

    div#form.col-lg-4.col-md-12
      include ./../../views/cbs/forms/expiration

    div#rendered.col-lg-8.col-md-12
      include ./../../views/cbs/renders/expiration

    div#clone(style="position: absolute; top: -5000px; left: -5000px")

</template>

<script>
  import { cbs } from './../../app-constants'
  import mixins from './../../mixins'

  export default {

    name: 'cbs-expiration',

    mixins: [mixins],

    methods: {
    },
  
    data: function() {
      return {
        boardFriendly: cbs.boards['Dermatology'].friendly,
        board: cbs.boards['Dermatology'],
        cbs,
      }
    },

    watch: {
      boardFriendly: function(newFriendly) {
        this.board = cbs.boards[newFriendly];
      }
    },

    computed: {
      sortedBoards: function() {
        return Object.keys(cbs.boards).sort();
      } 
    }
  }

</script>

<style lang="scss">

</style>
