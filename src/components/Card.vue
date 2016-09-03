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
      <p class="card__description">
        {{ card.description }}
      </p>

<!--  <p class="card__stats"><strong>Development: </strong>{{ card.development_hours }}h</p>
      <p class="card__stats"><strong>Testing: </strong>{{ card.testing_hours }}h</p>
      <p class="card__stats"><strong>Analysis: </strong>{{ card.analysis_hours }}h</p> -->
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
}
</style>
