import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeatherData: [],
    thirtySixHrWeatherForecastData: [],
    locationArray: [],
  },
  getters: {
  },
  mutations: {
    GETCURRENTWEATHERDATA(state , payload) {
      state.currentWeatherData = payload;
    },
    GET36HRWEATHERFORECASTDATA(state , payload) {
      state.thirtySixHrWeatherForecastData = payload
    },
    GETLOCATION(state , payload) {
      const location = new Set();
      payload.forEach(item => {
        location.add(item.locationName)
      });
      state.locationArray = Array.from(location)
    }
  },
  actions: {
    getCurrentWeatherData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log(res.data.records.location);
        context.commit('GETCURRENTWEATHERDATA' , res.data.records.location)
      })
    },
    get36hrWeatherForecastData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log(res.data.records.location);
        context.commit('GET36HRWEATHERFORECASTDATA' , res.data.records.location)
        context.commit('GETLOCATION' , res.data.records.location)
      })
    }
  },
  modules: {
  }
})
