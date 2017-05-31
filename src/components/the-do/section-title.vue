<template lang="pug">

  workspace
    include ./../../views/the-do/forms/section-title
    include ./../../views/the-do/renders/section-title
    
</template>

<script>

  import workspace from './../workspace.vue';
  import mixins from './../../mixins';

  export default {

    name: 'the-do-section-title',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    methods: {
      copy: function() {
        this.copyHtml();
      },
  
      copyTextVersion: function() {
        const text = [
          this.sectionTitle
              .toUpperCase()
              .split('')
              .join(' '),
          '',
        ].join('\n');

        return this.copyText(text);
      },

    },

    data: function() {
      return {
        sectionTitle: 'More stories',
      };
    },
  }

</script>
