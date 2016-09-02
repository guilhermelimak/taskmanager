<template>
<div class="modal" :class="{ 'is-active': isCardModalOpen }">
  <div @click="toggleModal" class="modal-background"></div>
  <div class="modal-container">
    <div class="modal-content">
      <card :is-editable="true" :card="currentCard" :key="currentCard.key"></card>
    </div>
  </div>
  <button class="modal-close" @click="toggleModal"></button>
</div>
</template>

<script>
import { isCardModalOpen, currentCard } from 'getters'
import { toggleModal } from 'actions'
import Card from 'components/Card.vue'

export default {
  components: {
    Card,
  },
  vuex: {
    actions: {
      toggleModal,
    },
    getters: {
      isCardModalOpen,
      currentCard,
    },
  },
}
</script>

<style lang="sass" scoped>
.modal-content {
  padding: 10px;
}
</style>
