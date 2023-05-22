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
        path: '/currentweather',
        name: 'currentWeather',
        component: () => import('../views/page/CurrentWeather.vue'),
      },
      {
        path: '/weatherforecast',
        name: 'WeatherForecast',
        component: () => import('../views/page/WeatherForecast.vue'),
      },
      {
        path: '/earthquake',
        name: 'Earthquake',
        component: () => import('../views/page/Earthquake.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
