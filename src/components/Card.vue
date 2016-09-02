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

      <p><strong>{{ card.hours }}h</strong></p>

    </div>
  </div>

  <footer class="card-footer">
    <a v-if="!isEditable"
      @click="editCard(card)"
      class="card-footer-item">
      Edit
    </a>

    <a
      @click="deleteCard(card.key)"
      class="card-footer-item">
      Delete
    </a>
  </footer>
</div>
</template>

<script>
import { deleteCard, editCard } from 'actions'

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  vuex: {
    actions: {
      editCard,
      deleteCard,
    },
  },
}
</script>

<style lang="sass" scoped>
.card {
  margin-bottom: 7px;
}
</style>
