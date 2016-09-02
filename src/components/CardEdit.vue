<template>
<div class="card is-fullwidth">
  <header class="card-header">
    <p class="card-header-title">
      {{ card.title }}
    </p>
  </header>

  <div class="card-content">
    <label class="label">Title</label>
    <p class="control">
      <input
        autofocus
        @keyup="update"
        class="input" placeholder="Title"
        v-model="card.title">
    </p>

    <div class="content">
      {{ card.description }}
      <p v-if="!card.description">This is a placeholder description</p>
      <p class="is-bold">{{ card.hours }}</p>
    </div>
  </div>

  <footer class="card-footer">
    <a @click="updateCard(card.key, card)" class="card-footer-item">Save</a>
  </footer>
</div>
</template>

<script>
import { updateCurrentCard, updateCard } from 'actions'

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update() {
      this.updateCurrentCard(this.card)
    },
  },
  vuex: {
    actions: {
      updateCurrentCard,
      updateCard,
    },
  },
}
</script>

<style lang="sass">
</style>
