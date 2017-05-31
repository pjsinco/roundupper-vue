<template lang="pug">
  workspace
    include ./../../views/the-do/forms/quote
    include ./../../views/the-do/renders/quote
</template>

<script>

  import mixins from './../../mixins';
  import workspace from './../workspace.vue';

  export default {

    name: 'the-do-quote',

    mixins: [mixins],

    components: {
      'workspace': workspace,
    },

    methods: {
      copy: function() {
        this.copyHtml();
      },

      copyTextVersion: function() {

        const text = [
            '\n',
            'Q U O T E D',
            '\n',
            this.quote,
            '--' + this.quoter,
            this.link,
        ].join('\n');

        return this.copyText(text);
      },
    },

    data: function() {
      return {
        quote: 'Lorem quote',
        quoter: 'Lorem quoter',
        link: '',
      };
    },
  }

</script>
