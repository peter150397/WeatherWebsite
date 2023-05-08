import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dachboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/page/Home.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
