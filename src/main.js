import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from 'store'

import { router } from 'router'

import App from 'App.vue'

Vue.use(VueResource)

sync(store, router)
router.start(App, 'body')
