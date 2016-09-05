<template>
<div class="modal" :class="{ 'is-active': isCardModalOpen }">
  <div @click="toggleCardModal" class="modal-background"></div>
  <div class="modal-container">
    <div class="modal-content">
      <card-edit :card="currentCard"></card-edit>
    </div>
  </div>
  <button class="modal-close" @click="toggleCardModal"></button>
</div>
</template>

<script>
import { isCardModalOpen, currentCard } from 'getters'
import { toggleCardModal } from 'actions'
import CardEdit from 'components/CardEdit.vue'

export default {
  components: {
    CardEdit,
  },
  vuex: {
    actions: {
      toggleCardModal,
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
