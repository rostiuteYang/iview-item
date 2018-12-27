import Vue from 'vue'
import Router from 'vue-router'
import ItemOne from '@/components/ItemOne'
import ItemTwo from '@/components/ItemTwo'
import ItemThree from '@/components/ItemThree'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ItemOne',
      component: ItemOne
    },
    {
      path: '/a',
      name: 'ItemTwo',
      component: ItemTwo
    },
    {
      path: '/b',
      name: 'ItemThree',
      component: ItemThree
    }
  ]
})
