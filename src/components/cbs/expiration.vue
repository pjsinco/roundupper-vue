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
  import cbsExam from './exam.vue'

  export default {

    name: 'cbs-expiration',

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
    }
  }

</script>

<style lang="scss">

</style>
