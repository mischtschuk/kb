import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '',
      component: {
        template: '<h1>Not Found</h1>'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: 'isActive'
})
