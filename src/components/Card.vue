<template>
<div class="card is-fullwidth"
  @click="selectCard(card.key)"
  :id="card.key">
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
      <p class="card__description">
        {{ card.description }}
      </p>
    </div>
  </div>

  <footer class="card-footer">
    <a v-if="!isEditable"
      @click="editCard(card)"
      class="card-footer-item">
      Edit
    </a>

    <a @click="deleteCard(card.key)"
      class="card-footer-item">
      Delete
    </a>
  </footer>
</div>
</template>

<script>
import { deleteCard, toggleSidebar, editCard, updateCurrentCard } from 'actions'

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCard() {
      this.updateCurrentCard(this.card.key)
      this.toggleSidebar()
    },
  },
  vuex: {
    actions: {
      editCard,
      updateCurrentCard,
      toggleSidebar,
      deleteCard,
    },
  },
}
</script>

<style lang="sass" scoped>
.card {
  font-size: 12px;
  margin-bottom: 7px;

  &__stats {
    margin: 3px 0 !important;
  }

  &:hover,
  &:not(:hover){
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3) !important;

    opacity: 1 !important;
  }

  &__description {
    word-break: break-word;
  }
}
</style>
