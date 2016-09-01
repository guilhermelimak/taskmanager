import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutations'

import config from '../config'

Vue.use(Vuex)

const state = {
  loading: true,
  lists: [],
}

const firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp(config)
export const database = firebase.database()

database
.ref()
.once('value')
.then(snapshot => {
  state.lists = snapshot.val().lists
  state.loading = false
})

export default new Vuex.Store({
  state,
  mutations,
})
