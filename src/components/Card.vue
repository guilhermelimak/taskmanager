<template>
<div class="card is-fullwidth" :id="card.key">
  <header class="card-header">
    <p class="card-header-title">
      {{ card.title }}
    </p>
    <a class="card-header-icon">
      <i class="fa fa-angle-down"></i>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      {{ card.description }}
      <p v-if="!card.description">This is a placeholder description</p>
    </div>
  </div>
  <footer class="card-footer">
    <a class="card-footer-item">Edit</a>
    <a class="card-footer-item">Delete</a>
  </footer>
</div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.card {
  margin-bottom: 7px;
}
</style>
