<template>
  <project-choose-screen></project-choose-screen>
  <import-modal></import-modal>
  <navbar></navbar>
  <dashboard></dashboard>
</template>

<script>
import Dashboard from 'components/Dashboard.vue'
import ImportModal from 'components/ImportModal.vue'
import Navbar from 'components/Navbar.vue'
import ProjectChooseScreen from 'components/ProjectCHooseScreen.vue'

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
}

html {
  height: 100%;
  overflow-y: auto;
}

body {
  overflow-x: hidden;
  height: 100%;
  background-color: #868686;
  font-family: Helvetica, sans-serif;
}
</style>
