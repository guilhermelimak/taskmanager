<template>
<div @drop="onComponentDrop"
     @dragover.prevent
     :id="key"
     class="depth-2 card-list__container"
     bag>

  <div class="card-list__header">
    <strong class="card-list__name">
      {{ list.name }}
    </strong>

    <span @click="" class="icon">
      <i
        @click="addNewCard(key, currentProjectId)"
        class="fa fa-plus-circle card-list__add-button">
      </i>
    </span>
  </div>
  <div id="cardlist-{{ key }}" class="card-list__content">
    <card
      v-for="card in filteredCards"
      draggable="true"
      @dragstart="onComponentDrag"
      :card="card">
    </card>
  </div>
</div>
</template>

<script>
import Card from 'components/Card.vue'
import { getParentBag } from 'util'
import { moveCard, addNewCard } from 'actions/cardActions'
import { currentProjectId } from 'getters'
import Ps from 'perfect-scrollbar'

export default {
  ready() {
    this.scrollContainer = document.getElementById(`cardlist-${this.key}`)
    Ps.initialize(this.scrollContainer, {
      wheelSpeed: 0.7,
    })
  },
  props: {
    key: {
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
    cards: {
      type: Object,
      required: true,
    },
  },
  watch: {
    cards() {
      Ps.update(this.scrollContainer)
    },
  },
  computed: {
    filteredCards() {
      const filtered = []
      if (this.cards) {
        Object.keys(this.cards).filter(key => {
          if (`${this.cards[key].listId}` === this.key) {
            const card = { ...this.cards[key], key }
            filtered.$set(filtered.length, card)
          }
        })
      }
      return filtered
    },
  },
  methods: {
    onComponentDrag(e) {
      e.dataTransfer.setData('cardId', e.srcElement.id)
      e.dataTransfer.setData('srcListId', e.srcElement.parentNode.id)
    },
    onComponentDrop(e) {
      const event = {
        cardId: e.dataTransfer.getData('cardId'),
        srcListId: e.dataTransfer.getData('srcListId'),
        targetListId: getParentBag(e.srcElement).id,
      }

      this.moveCard(event)
    },
  },
  vuex: {
    actions: {
      moveCard,
      addNewCard,
    },
    getters: {
      currentProjectId,
    },
  },
  components: {
    Card,
  },
}
</script>

<style lang="sass">
@import '../general';

$list-max-width: 300px;
$list-bg-color: #fdfdfd;

.card-list {
  &__container {
    position: relative;
    background-color: $list-bg-color;
    border-radius: 3px !important;
    border: 1px solid #CCC;
    margin: 5px 5px;
    min-width: $list-max-width !important;
    max-width: $list-max-width !important;
  }

  &__header {
    padding: 8px;
    margin-bottom: 0 !important;
    min-height: 42px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    padding: 4px;
    position: relative;
    height: calc(100% - 42px);
    flex: 1;
  }

  &__name {
    font-size: 13pt;
    font-weight: 500;
    color: #555 !important;
    user-select: none;
    cursor: default;
  }

  &__add-button {
    font-size: 14pt !important;
    color: #555;

    &:hover {
      cursor: pointer;
      color: $blue-primary;
    }
  }
}
</style>
