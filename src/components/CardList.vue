<template>
<div @drop="onComponentDrop"
     @dragover.prevent
     :id="key"
     class="depth-3 card-list__container"
     bag>

  <div class="card-list__header level">
    <strong class="card-list__name level-left">
      {{ list.name }}
    </strong>

    <span @click="" class="icon level-right">
      <i class="fa fa-plus-circle card-list__add-button is-primary"></i>
    </span>
  </div>

  <card
    v-for="card in filteredCards"
    draggable="true"
    @dragstart="onComponentDrag"
    :card="card">
  </card>
</div>
</template>

<script>
import Card from 'components/Card.vue'
import { getParentBag } from 'util'
import { moveCard } from 'actions'

export default {
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
  computed: {
    filteredCards() {
      const filtered = []
      if (this.cards) {
        Object.keys(this.cards).filter(key => {
          if (`${this.cards[key].listID}` === this.key) {
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
      e.dataTransfer.setData('cardID', e.srcElement.id)
      e.dataTransfer.setData('srcListID', e.srcElement.parentNode.id)
    },
    onComponentDrop(e) {
      const event = {
        cardID: e.dataTransfer.getData('cardID'),
        srcListID: e.dataTransfer.getData('srcListID'),
        targetListID: getParentBag(e.srcElement).id,
      }

      this.moveCard(event)
    },
  },
  vuex: {
    actions: {
      moveCard,
    },
  },
  components: {
    Card,
  },
}
</script>

<style lang="sass">
$list-max-width: 270px;
$list-bg-color: #fdfdfd;

.card-list {
  &__container {
    background-color: $list-bg-color;
    margin: 0 9px;
    margin-bottom: 0 !important;
    width: $list-max-width;
    padding: 6px;
  }

  &__header {
    padding: 4px;
    margin-bottom: 0 !important;
  }

  &__name {
    font-size: 13pt;
    font-weight: 500;
    color: #222324 !important;
  }

  &__add-button {
    color: #1fc8db;
    font-size: 14pt !important;

    &:hover {
      cursor: pointer;
      color: #222324;
    }
  }
}
</style>
