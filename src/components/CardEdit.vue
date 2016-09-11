<template>
<div class="card is-fullwidth">
  <div class="card-content">
    <label class="label">Title</label>
    <p class="control">
      <input
        @keyup.enter="saveCard"
        class="input" placeholder="Title"
        v-model="card.title"
        autofocus>
    </p>

    <label class="label">Description</label>
    <p class="control">
      <textarea
        @keyup.enter="saveCard"
        class="textarea" placeholder="Description"
        v-model="card.description">
      </textarea>
    </p>
  </div>

  <footer class="card-footer">
    <a @click="createOrUpdateCard(card)" class="card-footer-item">Save</a>
  </footer>
</div>
</template>

<script>
import { changeCurrentCard, createOrUpdateCard } from 'actions'

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update() {
      this.changeCurrentCard(this.card)
    },
    saveCard() {
      this.createOrUpdateCard(this.card)
    },
  },
  vuex: {
    actions: {
      changeCurrentCard,
      createOrUpdateCard,
    },
  },
}
</script>

<style lang="sass">
</style>
