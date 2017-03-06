<template>

  <form id="selectArticleType" action="">
    <div class="form-group">
      <label for="articleType">Select component to create</label>
      <select class="form-control input-lg" name="type" id="articleType" @change="handleChange">
        <optgroup label="Articles">
          <option value="jaoa-article" selected>Article</option>
          <option value="jaoa-article-first">Article in Series - First</option>
          <option value="jaoa-article-middle">Article in Series - Middle</option>
          <option value="jaoa-article-last">Article in Series - Last</option>
        </optgroup>
        <optgroup label="Other parts">
          <option value="jaoa-banner">Banner</option>
          <option value="jaoa-intro">Intro</option>
        </optgroup>
      </select>
    </div>
  </form>
</template>

<script>
  
  export default {

    methods: {
      handleChange: function(evt) {
console.log(evt.target.value);
        this.$emit('template-selected', evt.target.value);
      }
    }

  }

</script>

<style>
</style>
