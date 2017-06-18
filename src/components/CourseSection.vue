<template>
  <div class="course-section">
    <div>
      <p v-for="token of ToSection">
        {{ JSON.stringify(token) }}
      </p>
    </div>
    <div>
      <p v-for="token of FromSection">
        {{ JSON.stringify(token) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course-section',
  props: ['section'],
  computed: {
    ToSection: function() {
      return this.section[0]
    },
    FromSection: function() {
      return this.section[1]
    },
  }
}
</script>

<style>
</style>
