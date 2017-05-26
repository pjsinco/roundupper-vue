<template>
<div class="blank">
  <navbar templateName="The DO">
    <select-template slot="select" v-on:template="handleTemplateSelect">
      <optgroup label="Stories">
        <option value="the-do-top-story">Top Story</option>
        <option value="the-do-feature" selected>Feature</option>
        <option value="the-do-brief">Brief</option>
      </optgroup>
      <optgroup label="Other parts">
        <option value="the-do-quote">Quote</option>
        <option value="the-do-section-title">Section Title</option>
        <option value="the-do-date">Date</option>
      </optgroup>
    </select-template>
  </navbar>
</div>
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import topStory from './components/the-do/top-story.vue'
  import brief from './components/the-do/brief.vue'
  import feature from './components/the-do/feature.vue'
  import quote from './components/the-do/quote.vue'
  import sectionTitle from './components/the-do/section-title.vue'
  import date from './components/the-do/date.vue'

  export default {

    name: 'the-do',
  
    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'the-do-top-story': topStory,
      'the-do-brief': brief,
      'the-do-feature': feature,
      'the-do-quote': quote,
      'the-do-section-title': sectionTitle,
      'the-do-date': date,
    },

    methods: {

    }

  }

</script>

<style>
</style>
