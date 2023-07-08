import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeatherData: [],
    currentWeatherAlert: [],

    thirtySixHrWeatherForecastData: [],
    WeeklyWeatherForecastData: [],

    EarthquakeDate:[],

    locationArray: [
      "基隆市",
      "臺北市",
      "新北市",
      "桃園市",
      "新竹縣",
      "新竹市",
      "苗栗縣",
      "臺中市",
      "南投縣",
      "彰化縣",
      "雲林縣",
      "嘉義縣",
      "嘉義市",
      "臺南市",
      "高雄市",
      "屏東縣",
      "臺東縣",
      "花蓮縣",
      "宜蘭縣",
      "連江縣",
      "金門縣",
      "澎湖縣",
    ],
  },
  getters: {
  },
  mutations: {
    GETCURRENTWEATHERDATA(state, payload) {
      state.currentWeatherData = payload;
    },
    GETCURRENTWEATHERALERT(state, payload) {
      state.currentWeatherAlert = payload
    },
    GET36HRWEATHERFORECASTDATA(state, payload) {
      state.thirtySixHrWeatherForecastData = payload;
    },
    GETWEEKLYWEATHERFORECASTDATA(state, payload) {
      state.WeeklyWeatherForecastData = payload;
    },

    GETEARTHQUAKEDATA(state, payload) {
      state.EarthquakeDate = payload
    }
  },
  actions: {
    getCurrentWeatherData(context) {
      const api = `${process.env.VUE_APP_APIPATH}O-A0001-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GETCURRENTWEATHERDATA', res.data.records.location);
      })
    },
    getCurrentWeatherAlert(context) {
      const api = `${process.env.VUE_APP_APIPATH}W-C0033-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GETCURRENTWEATHERALERT', res.data.records.location);
      })
    },

    get36hrWeatherForecastData(context) {
      const api = `${process.env.VUE_APP_APIPATH}F-C0032-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GET36HRWEATHERFORECASTDATA', res.data.records.location);
      })
    },
    getWeeklyWeatherForecastData(context) {
      const api = `${process.env.VUE_APP_APIPATH}F-D0047-091?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GETWEEKLYWEATHERFORECASTDATA', res.data.records.locations[0].location);
      })
    },

    getEarthquakeData(context) {
      const api = `${process.env.VUE_APP_APIPATH}E-A0016-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GETEARTHQUAKEDATA', res.data.records.Earthquake);
      })
    }
  },
  modules: {
  }
})
