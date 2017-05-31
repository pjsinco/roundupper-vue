<template lang="pug">

  workspace
    include ./../../views/cbs/forms/expiration
    include ./../../views/cbs/renders/expiration

</template>

<script>
  import moment from 'moment'
  import { cbs } from './../../app-constants'
  import mixins from './../../mixins'
  import cbsExam from './exam.vue'
  import workspace from './../workspace.vue';

  export default {

    name: 'cbs-expiration',
  
    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    methods: {

      removeExam: function(evt) {
        this.exams.splice(evt.currentTarget.dataset.exam, 1);
      },

      addExam: function(evt) {
        this.showExamForm = !this.showExamForm;

        const exam = {
          location: '',
          date: '',
          firstDeadline: '',
          finalDeadline: '',
          url: '',
        }
        this.exams.push(exam);
      },

      copy: function() {
        this.copyHtml()
      },

      copyTextVersion: function(evt) {
        const text = 'Dear %%name%%';
        this.copyText(text);
      },

    },
  
    data: function() {
      return {
        boardFriendly: cbs.boards['Dermatology'].friendly,
        board: cbs.boards['Dermatology'],
        cbs,
        examCount: 0,
        exams: [],
      }
    },

    watch: {
      boardFriendly: function(newFriendly) {
        this.board = cbs.boards[newFriendly];
      }
    },

    computed: {
      showExamForm: function() {
        return this.exams.length > 0;
      },
      sortedBoards: function() {
        return Object.keys(cbs.boards).sort();
      } 
    },

    filters: {
      formatDate: function(rawDate) {
        if (! rawDate) return
        return moment(rawDate).format('MMMM D, YYYY');
      },
    },
  }

</script>

<style lang="scss">

</style>
