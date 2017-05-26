<template lang="pug">

  include ./../../../views/the-do/forms/date.pug

</template>

<script>

  import mixins from './../../../mixins';

  export default {

    props: ['initialDate', 'copyTextVersion', 'copy'],

    mixins: [mixins],

    methods: {
      dateChange: function(evt) {
        this.$emit('datechange', evt);
      }
    },

    data: function() {
      return {
        date: this.initialDate,
      };
    },
    
  }

</script>
