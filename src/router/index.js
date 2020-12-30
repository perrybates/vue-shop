import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Overview from '../components/Overview.vue'
import Products from '../components/Products.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path:'/admin',
    name: 'admin',
    component: Admin,
    children:[
      {
        path:'overview',
        name: 'overview',
        component: Overview
      },
      {
        path:'products',
        name: 'products',
        component: Products
      }
    ]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
