<template>
<div id="container" class="dashboard__container">
  <card-list
    :cards="filteredByProject"
    :key="$key"
    :list="list"
    v-for="list in lists">
  </card-list>
</div>
</template>

<script>
import Vue from 'vue'
import CardList from 'components/CardList.vue'
import { lists, cards, currentProjectId } from 'getters'
import { database } from 'store'
import { replaceState } from 'actions'
import Ps from 'perfect-scrollbar'

export default {
  ready() {
    database
    .ref()
    .on('value', snapshot => {
      this.replaceState(snapshot.val())
    })

    const container = document.getElementById('container')
    Ps.initialize(container, {
      wheelSpeed: 0.7,
    })
  },
  computed: {
    filteredByProject() {
      const filtered = {}

      if (this.cards) {
        Object.keys(this.cards).filter(key => {
          if (`${this.cards[key].projectId}` === this.currentProjectId) {
            Vue.set(filtered, key, this.cards[key])
          }
        })
      }

      return filtered
    },
  },
  vuex: {
    actions: {
      replaceState,
    },
    getters: {
      cards,
      lists,
      currentProjectId,
    },
  },
  components: {
    CardList,
  },
}
</script>

<style lang="sass">
.dashboard {
  &__container {
    position: relative;
    overflow: auto;
    display: flex;
    flex-direction: row;
    height: calc(100% - 52px);
    width: 100%;
    // padding: 10px 1px 10px 1px;
  }
}
</style>
