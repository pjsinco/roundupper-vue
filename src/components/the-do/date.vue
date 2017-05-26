<template lang="pug">
  div#workspace.clearfix.workspace
    div.form-container
      div#form.form
        include ./../../views/the-do/forms/date
    div.rendered-container
      div#rendered
        include ./../../views/the-do/renders/date
    div#clone(style="position: absolute; top: -5000px; left: -5000px")

</template>

<script>
  import mixins from './../../mixins';
  import moment from 'moment';

  export default {

    name: 'the-do-date',

    mixins: [mixins],

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
