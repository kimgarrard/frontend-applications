import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header.vue'
import Instrumenten from '../src/components/Instrumenten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Instrumenten
    }
  ]
})
