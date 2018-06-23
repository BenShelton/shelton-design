import Vue from 'vue'
import Router from 'vue-router'

import { privateGuard } from './guards'

import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import WeightWatchers from '@/components/WeightWatchers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
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
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/ww',
      name: 'WeightWatchers',
      component: WeightWatchers,
      beforeEnter: privateGuard,
      meta: { private: true }
    }
  ]
})
