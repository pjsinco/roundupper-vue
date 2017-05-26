<template lang="pug">
  div#workspace.clearfix.workspace
    div.form-container
      div#form.form
        date-form(v-bind:initial-date="date" v-bind:copy-text-version="copyTextVersion" v-bind:copy="copy" v-on:datechange="handleDateChange")
    div.rendered-container
      div#rendered
        date-render(v-bind:date="date")
    div#clone(style="position: absolute; top: -5000px; left: -5000px")

</template>

<script>
  import mixins from './../../mixins';
  import moment from 'moment';
  import dateForm from './forms/date-form.vue'
  import dateRender from './renders/date-render.vue'
  

  export default {

    components: {
      'date-form': dateForm,
      'date-render': dateRender,
    },

    name: 'the-do-date',

    mixins: [mixins],

    methods: {
      handleDateChange: function(evt) {
        this.date = evt.target.value;
      },

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
