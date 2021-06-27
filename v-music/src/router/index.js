import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home.vue'),
      children:[
        {
          path: '/found',
          component: ()=>import('@/views/components/content/found.vue')
        },
        {
          path: '/new',
          component: ()=>import('@/views/components/content/new.vue')
        },
        {
          path: '/new-mv',
          component: ()=>import('@/views/components/content/new-mv.vue')
        },
        {
          path: '/recommended',
          component: ()=>import('@/views/components/content/recommended.vue')
        },
        {
          path: '/search-res',
          component: ()=>import('@/views/components/search-res.vue')
        },
      ]
    }

  ]
})
