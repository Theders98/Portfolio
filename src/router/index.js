import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/knowledges',
    name: 'Knowledges',
    component: () => import('@/views/Knowledges.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "text-white inline-block py-2 px-4 no-underline",
  linkExactActiveClass: "inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
})

export default router
