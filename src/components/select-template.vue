<template lang="pug">

  form#selectArticleType
    div.form-group
      label(for="articleType") Select component to create
      select.form-control.input-lg#articleType(name="type" @change="handleChange")
        option(value="jaoa-article" selected) Article
        option(value="jaoa-banner") Banner
        option(value="jaoa-intro") Intro

</template>

<script>
  
  export default {

    methods: {
      handleChange: function(evt) {
        this.$emit('template-selected', evt.target.value);
      }
    }

  }

</script>

<style>
</style>
