<template>
<div class="card is-fullwidth"
  :class="{'card-selected': isSelected}"
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
    <a @click="deleteCard(card.key)"
      @click.stop
      class="card-footer-item">
      Delete
    </a>
  </footer>
</div>
</template>

<script>
import { deleteCard, toggleSidebar, editCard, changeCurrentCard } from 'actions'
import { currentCardID, isSidebarOpen } from 'getters'

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSelected() {
      return this.card.key === this.currentCardID
    }
  },
  methods: {
    selectCard() {
      if (this.isSidebarOpen) {
        if (this.card.key === this.currentCardID) {
          this.toggleSidebar()
        }
      } else {
        this.toggleSidebar()
      }

      this.changeCurrentCard(this.card.key)
    },
  },
  vuex: {
    getters: {
      currentCardID,
      isSidebarOpen,
    },
    actions: {
      editCard,
      changeCurrentCard,
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

  &-selected {
    filter: invert(80%);
  }

  &__stats {
    margin: 3px 0 !important;
  }

  &:hover,
  &:not(:hover){
    transition: all 0.1s ease-in-out;
  }

  &:hover :not(.card-selected) {
    filter: invert(20%);
  }

  &__description {
    word-break: break-word;
  }
}
</style>
