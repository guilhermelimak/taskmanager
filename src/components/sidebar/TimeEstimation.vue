<template lang="html">
  <ul>
    <p class="sidebar__title title is-6">Estimated time</p>
    <li>Analysis: {{ currentCard.analysis_duration }}h</li>
    <li>Development: {{ currentCard.development_duration }}h</li>
    <li>Testing: {{ currentCard.testing_duration }}h</li>
  </ul>
</template>
<script>
export default {
  props: {
    currentCard: {
      type: Object,
      required: true,
    },
  },
}
</script>
