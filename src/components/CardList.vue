<template>
<div @drop="onComponentDrop"
     @dragover.prevent
     :id="key"
     class="card-list__container depth-3"
     bag>

  <h1>{{ list.name }}</h1>

  <card
    class="depth1"
    v-for="card in filteredCards"
    draggable="true"
    @dragstart="onComponentDrag"
    :card="card"></card>
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

      Object.keys(this.cards).filter(key => {
        if (this.cards[key].listID + '' === this.key) {
          const card = { ...this.cards[key], key: key }

          filtered.$set(filtered.length, card)
        }
      })

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
$list-bg-color: #C7DAC5;

.card-list {
  &__container {
    background-color: $list-bg-color;
    margin: 0 9px;
    min-width: $list-max-width;
    padding: 6px;
  }
}
</style>
