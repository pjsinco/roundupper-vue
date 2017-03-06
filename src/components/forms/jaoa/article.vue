<template>
  <div>
    <div class="form-group">
      <label for="category">Category</label>
      <select class="form-control" id="category">
        <option value="Book Reviews">Book Reviews</option>
        <option value="Brief Report">Brief Report</option>
        <option value="Case Report">Case Report</option>
        <option value="Clinical Images">Clinical Images</option>
        <option value="Clinical Practice">Clinical Practice</option>
        <option value="Clinical Review">Clinical Review</option>
        <option value="CME Quiz">CME Quiz</option>
        <option value="Editorials">Editorials</option>
        <option value="Empathy in Medicine">Empathy in Medicine</option>
        <option value="Evidence-Based Clinical Reviews">Evidence-Based Clinical Reviews</option>
        <option value="Health Policy">Health Policy</option>
        <option value="In My View">In My View</option>
        <option value="In Your Words">In Your Words</option>
        <option value="Letters to the Editor">Letters to the Editor</option>
        <option value="Medical Education">Medical Education</option>
        <option value="Original Contribution" selected>Original Contribution</option>
        <option value="Review">Review</option>
        <option value="The Somatic Connection">The Somatic Connection</option>
        <option value="Special Communication">Special Communication</option>
        <option value="Special Report">Special Report</option>
        <option value="Still Relevant?">Still Relevant?" </option>
        <option value="Surf">SURF</option>
      </select>
    </div>
  
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title">
    </div>
  </div>
</template>

<script>

  export default {

    methods: {

      update: function(evt) {

      }

    },

    data: function() {
      
      return {

      }
    }
  }


</script>

<style>
</style>
