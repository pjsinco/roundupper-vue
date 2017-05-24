<template lang="pug">

  form#selectArticleType
    div.form-group
      label(for="articleType") Select component to create
      select.form-control.input-lg#articleType(name="type" v-on:change="handleChange")
        slot

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
