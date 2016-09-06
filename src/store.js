import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutations'

import config from '../config'

Vue.use(Vuex)

const state = {
  lists: null,
  cards: null,
  loading: true,
  isImportModalOpen: false,
  isCardModalOpen: false,
  isSidebarOpen: false,
  currentCardID: null,
}

const firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp(config)
export const database = firebase.database()

export default new Vuex.Store({
  state,
  mutations,
})
