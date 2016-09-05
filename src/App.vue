<template>
  <import-modal></import-modal>
  <card-modal></card-modal>
  <navbar></navbar>
  <dashboard></dashboard>
</template>

<script>
import Dashboard from 'components/Dashboard.vue'
import CardModal from 'components/CardModal.vue'
import ImportModal from 'components/ImportModal.vue'
import Navbar from 'components/Navbar.vue'

import { replaceState, newCardModal } from 'actions'
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
      newCardModal,
    },
  },
  components: {
    Dashboard,
    CardModal,
    ImportModal,
    Navbar,
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
}

body {
  overflow-x: auto;
  height: 100%;
  background-color: #625A6A;
  font-family: Helvetica, sans-serif;
}
</style>
