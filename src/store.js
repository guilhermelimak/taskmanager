import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutations'

import { prod, dev } from '../config'

Vue.use(Vuex)

const state = {
  lists: null,
  cards: null,
  projects: null,
  loading: true,
  isImportModalOpen: false,
  isSidebarOpen: false,
  isWelcomeScreenOpen: true,
  currentCardID: null,
  currentProjectID: null,
}

const firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp(dev)
export const database = firebase.database()

export default new Vuex.Store({
  state,
  mutations,
})
