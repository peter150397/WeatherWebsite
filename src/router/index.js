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
        path: '/currentWeather',
        name: 'currentWeather',
        component: () => import('../views/page/currentWeather.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
