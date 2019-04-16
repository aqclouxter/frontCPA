import Vue from 'vue'
import Router from 'vue-router'
import Categorylist from '@/components/Categorylist'
import CategoryDetail from '@/components/CategoryDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/categories',
      name: 'categories',
      component: Categorylist
    },
    {
      path:'/categories/:id',
      name: 'category',
      component: CategoryDetail 

    },
    {
      path: '*',
      redirect: '/categories'
    }

  ]
})


