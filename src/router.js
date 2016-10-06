import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from 'components/Dashboard.vue'
import DashboardLayout from 'components/DashboardLayout.vue'
import ChooseProject from 'components/ChooseProject.vue'
import Login from 'components/Login.vue'



Vue.use(VueRouter)

export const router = new VueRouter()

router.map({
  '/': {
    auth: true,
    component: DashboardLayout,
    subRoutes: {
      '/': {
        component: Dashboard,
      },
    },
  },
  '/login': {
    component: Login,
  },
  '/choose-project': {
    auth: true,
    component: ChooseProject,
  },
})
