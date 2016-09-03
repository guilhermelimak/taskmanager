<template>
<div class="dashboard__container">
  <card-list
    :cards="cards"
    :key="$key"
    :list="list"
    v-for="list in lists">
  </card-list>
</div>
</template>

<script>
import CardList from 'components/CardList.vue'
import { lists, cards } from 'getters'
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
  vuex: {
    actions: {
      replaceState,
    },
    getters: {
      cards,
      lists,
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
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 50px 1px 10px 1px;
  }
}
</style>
