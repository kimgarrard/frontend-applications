import Vue from 'vue'
import Router from 'vue-router'
import Continenten from '../src/components/Continenten'
import Instrumenten from '../src/components/Instrumenten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Continenten
    },
    {
      path: '/instrumenten',
      name: 'Instrumenten',
      component: Instrumenten
    },
  ]
})
