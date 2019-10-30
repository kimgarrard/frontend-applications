import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'
import Continenten from '../src/components/Continenten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/instrumenten',
      name: 'Instrumenten',
      component: Continenten
    },
  ]
})
