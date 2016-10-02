<template>
  <project-choose-screen></project-choose-screen>
  <import-modal></import-modal>
  <navbar></navbar>
  <sidebar></sidebar>
  <dashboard></dashboard>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'
import Dashboard from 'components/Dashboard.vue'
import ImportModal from 'components/ImportModal.vue'
import Navbar from 'components/Navbar.vue'
import ProjectChooseScreen from 'components/ProjectChooseScreen.vue'

import { replaceState } from 'actions'
import store, { database } from 'store'

export default {
  el: 'body',
  store,
  replace: false,
  ready() {
    database
    .ref()
    .once('value')
    .then(snapshot => this.replaceState(snapshot.val()))
  },
  vuex: {
    actions: {
      replaceState,
    },
  },
  components: {
    Dashboard,
    ImportModal,
    Navbar,
    Sidebar,
    ProjectChooseScreen,
  },
}
</script>

<style lang="sass">
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import '../node_modules/bulma/css/bulma.css';
@import 'general.scss';

* {
  border-radius: 1px !important;
  transition: all 1s ease-ease;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  overflow: hidden;
  height: 100%;
  background-color: #e9e9e9;
  font-family: Helvetica, sans-serif;
}
</style>
