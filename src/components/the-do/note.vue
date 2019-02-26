<template lang="pug">
  workspace
    include ./../../views/the-do/forms/note
    include ./../../views/the-do/renders/note

</template>

<script>
import Workspace from './../workspace.vue';
import mixins from './../../mixins';

export default{

  components: {
    Workspace,
  },

  mixins: [mixins],

  methods: {
    copy: function() {
      this.copyHtml();
    },
    copyTextVersion: function() {
    }
  },

  computed: {
    bodyText() {
      return this.body.replace(/\r?\n/g, '<br />');
    }
  },

  data: function() {
    return {
      headline: 'Your temporary subscription will expire soon!',
      subhead: '',
      body: 'The DO is an online news and features publication dedicated to issues important to DOs, osteopathic medical students and all health care professionals who embrace the patient-centered philosophy of medicine.\n\nPublished by the American Osteopathic Association, The DO offers this free weekly newsletter focused on news physicians can use.',
      callout: 'Continue receiving The DO newsletter for free',
      buttonText: 'Subscribe',
      link: 'https://thedo.osteopathic.org/subscribe',
      foo: 'bao',
    }
  },
};
</script>


