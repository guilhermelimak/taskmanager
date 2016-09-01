<template>
  <dashboard></dashboard>
</template>

<script>
import Dashboard from 'components/Dashboard.vue'
import store from './store'

export default {
  el: 'body',
  store,
  replace: false,
  components: {
    Dashboard,
  },
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';

html,
body {
  height:  100%;
  font-family: Helvetica, sans-serif;
}
</style>
