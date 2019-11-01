import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'
import Continenten from '../src/components/Continenten'

Vue.use(Router)

//router opzetten heb ik deels van een tutorial, deels van Coen en deels van mezelf
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
