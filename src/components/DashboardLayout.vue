<template>
<div class="wrapper">
  <navbar></navbar>
  <sidebar></sidebar>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from 'components/Navbar.vue'
import Sidebar from 'components/Sidebar.vue'

export default {
  components: {
    Sidebar,
    Navbar,
  },
}
</script>

<style lang="sass">
.wrapper {
  height: 100%;
}
</style>
