import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home.vue'),
      children:[
        {
          path: '/found',
          component: ()=>import('@/views/content/found.vue')
        },
        {
          path: '/new',
          component: ()=>import('@/views/content/new.vue')
        },
        {
          path: '/new-mv',
          component: ()=>import('@/views/content/new-mv.vue')
        },
        {
          path: '/recommended',
          component: ()=>import('@/views/content/recommended.vue')
        }
      ]
    }

  ]
})
