<template>
  <div>
    <div class="form-group">
      <label for="imageUrl">Image URL</label>
      <input type="text" id="imageUrl" class="form-control" @input="updateValue">
    </div>
    
    <div class="form-group">
      <label for="altText">Alt Text</label>
      <input type="text" id="altText" class="form-control" @input="updateValue">
    </div>
  </div>
</template>

<script>

  export default {


    props: ['value'],

    methods: {

      updateValue: function(value) {

        const formattedValue = value.trim()
        this.$refs.input.value = formattedValue

        this.$emit('input', formattedValue)

      }
    },

    data: function() {

      return {

        imageUrl: '',
        altText: '',
      }
    }

  }
</script>

<style>
</style>
