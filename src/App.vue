<template>
  <import-modal></import-modal>
  <toast :is-shown.sync="isToastShown" :message="toastMessage"></toast>
  <router-view></router-vew>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'
import Toast from 'components/Toast.vue'
import ImportModal from 'components/ImportModal.vue'
import Navbar from 'components/Navbar.vue'

import { replaceState } from 'actions'
import { router } from 'router'
import store, { database, auth } from 'store'

export default {
  el() {
    return 'body'
  },
  store,
  replace: false,
  data() {
    return {
      isToastShown: false,
      toastMessage: '',
    }
  },
  ready() {
    router
    .beforeEach(({ to, next, abort }) => {
      const user = auth.currentUser
      if (to.auth && !user) {
        abort()
      } else {
        next()
      }
    })

    auth
    .onAuthStateChanged(user => {
      if (user) {
        this.$router.go('/choose-project')
      } else {
        this.$router.go('/login')
      }
    })
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
    ImportModal,
    Navbar,
    Sidebar,
    Toast,
  },
  events: {
    showToast(message) {
      this.isToastShown = true
      this.toastMessage = message
    },
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
