import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeatherData: [],

    thirtySixHrWeatherForecastData: [],
    WeeklyWeatherForecastData: [],
    tempThirtySixHrWeatherForecastData: {},
    tempWeeklyWeatherForecastData: {},

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
    GET36HRWEATHERFORECASTDATA(state, payload) {
      state.thirtySixHrWeatherForecastData = payload;
      state.tempThirtySixHrWeatherForecastData = payload[13];
    },
    GETWEEKLYWEATHERFORECASTDATA(state, payload) {
      state.WeeklyWeatherForecastData = payload;
      state.tempWeeklyWeatherForecastData = payload[13];
    },
    FILTER36HRWEATHERFORECASTDATA(state, payload) {
      state.WeeklyWeatherForecastData.filter((item) => {
        if (item.locationName == payload) {
          state.tempWeeklyWeatherForecastData = Object.assign({}, item);
        }
      })
    },
    FILTERWEEKLYWEATHERFORECASTDATA(state, payload) {
      state.thirtySixHrWeatherForecastData.filter((item) => {
        if (item.locationName == payload) {
          state.tempThirtySixHrWeatherForecastData = Object.assign({}, item);
        }
      })
    },
  },
  actions: {
    getCurrentWeatherData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log("vuex getCurrentWeatherData");
        // console.log(res.data.records.location);
        context.commit('GETCURRENTWEATHERDATA', res.data.records.location);
      })
    },
    get36hrWeatherForecastData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log("vuex get36hrWeatherForecastData");
        // console.log(res.data.records.location);
        context.commit('GET36HRWEATHERFORECASTDATA', res.data.records.location);
      })
    },
    getWeeklyWeatherForecastData(context) {
      const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-3586EDC3-F42A-4048-89F6-54F977C6DAD2`

      axios.get(api).then((res) => {
        console.log("vuex getWeeklyWeatherForecastData");
        // console.log(res.data.records.locations[0].location);
        context.commit('GETWEEKLYWEATHERFORECASTDATA', res.data.records.locations[0].location);
      })
    },
    filterWeatherForecastData(context, payload) {
      context.commit('FILTER36HRWEATHERFORECASTDATA' , payload);
      context.commit('FILTERWEEKLYWEATHERFORECASTDATA' , payload);
    },
  },
  modules: {
  }
})
