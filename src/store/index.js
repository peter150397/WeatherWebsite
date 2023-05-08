import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: [],
    weatherType:[],
    location: []
  },
  getters: {
  },
  mutations: {
    GETWEATHERDATA(state , payload) {
      state.weatherData = payload
    },
    GETWEATHERTYPE(state , payload) {
      const type = new Set();
      
      payload.forEach((item) => {
        type.add(item.weatherElement[20].elementValue)
      });
      state.weatherType = Array.from(type);
    },
    GETLOCATION(state , payload) {
      const location = new Set()
      payload.forEach((item)=>{
        location.add(item.parameter[0].parameterValue)
      })

      state.location = Array.from(location)
    }
  },
  actions: {
    getWeatherData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log(res.data.records.location);
        context.commit('GETWEATHERDATA' , res.data.records.location)
        context.commit('GETWEATHERTYPE' , res.data.records.location)
        context.commit('GETLOCATION' , res.data.records.location)
      })
    }
  },
  modules: {
  }
})
