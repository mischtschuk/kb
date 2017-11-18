import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Tournaments from '@/components/Tournaments'
import Features from '@/components/Features'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: '',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history',
  linkActiveClass: 'isActive'
})
