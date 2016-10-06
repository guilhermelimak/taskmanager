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
  currentCardId: null,
  currentProjectId: null,
}

const firebase = require('firebase/app')
require('firebase/database')
require('firebase/auth')


firebase.initializeApp(prod)
export const database = firebase.database()
export const auth = firebase.auth()

export default new Vuex.Store({
  state,
  mutations,
})
