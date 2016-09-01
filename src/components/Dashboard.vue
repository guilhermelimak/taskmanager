<template>
<div class="dashboard__container">
  <card-list v-for="list in lists"></card-list>
</div>
</template>

<script>
import CardList from 'components/CardList.vue'

export default {
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
    padding: 20px;
    width: 100%;
  }
}
</style>
