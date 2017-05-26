<template lang="pug">
  workspace
    include ./../../views/the-do/forms/date
    include ./../../views/the-do/renders/date
</template>

<script>
  import mixins from './../../mixins';
  import moment from 'moment';
  import workspace from './../workspace.vue';

  export default {

    name: 'the-do-date',

    mixins: [mixins],
    
    components: {
      'workspace': workspace,
    },

    methods: {

      copy: function() {
        this.copyHtml();
      },

      copyTextVersion: function() {
        const text =  [
          'Most recent posts: ' + this.date,
          '(http://thedo.osteopathic.org)',
          '',
        ].join('\n');

        return this.copyText(text);
      },
    },

    data: function() {
      return {
        date: moment().format('MMMM D, YYYY'),
      };
    },

  }

</script>

<style>
</style>
