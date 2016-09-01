<template>
  <dashboard></dashboard>
</template>

<script>
import store from './store'

export default {
  el: 'body',
  store,
  replace: false,
}
</script>

<style>
html,
body {
  height:  100%;
  font-family: Helvetica, sans-serif;
}
</style>
