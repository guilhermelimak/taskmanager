<template>
<div class="dashboard__container">
  <card-list
    :cards="filteredByProject"
    :key="$key"
    :list="list"
    v-for="list in lists">
  </card-list>
  <sidebar></sidebar>
</div>
</template>

<script>
import Vue from 'vue'
import CardList from 'components/CardList.vue'
import Sidebar from 'components/Sidebar.vue'
import { lists, cards, currentProjectID } from 'getters'
import { database } from 'store'
import { replaceState } from 'actions'

export default {
  ready() {
    database
    .ref()
    .on('value', snapshot => {
      this.replaceState(snapshot.val())
    })
  },
  computed: {
    filteredByProject() {
      const filtered = {}

      if (this.cards) {
        Object.keys(this.cards).filter(key => {
          if (`${this.cards[key].projectID}` === this.currentProjectID) {
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
      currentProjectID,
    },
  },
  components: {
    CardList,
    Sidebar,
  },
}
</script>

<style lang="sass">
.dashboard {
  &__container {
    display: flex;
    flex-direction: row;
    min-height: 70%; // height: 100%;
    padding: 10px 1px 10px 1px;
  }
}
</style>
