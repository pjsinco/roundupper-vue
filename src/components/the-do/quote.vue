<template lang="pug">
  div#workspace.clearfix.workspace
    div.form-container
      div#form.form
        include ./../../views/the-do/forms/quote

    div.rendered-container
      div#rendered
        include ./../../views/the-do/renders/quote

    div#clone(style="position: absolute; top: -5000px; left: -5000px")
</template>

<script>

  import mixins from './../../mixins';

  export default {

    name: 'the-do-quote',

    mixins: [mixins],

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
