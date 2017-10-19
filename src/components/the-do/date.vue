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

    filters: {
      apStyle(date) {

      }
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

    computed: {
      date: function() {
        const today = moment()
        const apMonths = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June',
          'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
        return `${apMonths[today.month()]} ${today.format('D, YYYY')}`;
      }
    },

  }

</script>

<style>
</style>
