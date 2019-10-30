import Vue from 'vue'
import Router from 'vue-router'
import Continenten from '../src/components/Continenten'
import Afrika from '../src/components/Afrika'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Continenten
    },
    {
      path: '/afrika',
      name: 'Afrika',
      component: Afrika
    }
  ]
})
