import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeatherData: [],
    currentWeatherAlert: [],
    currentWeatherAlertLocation: [],

    thirtySixHrWeatherForecastData: [],
    WeeklyWeatherForecastData: [],
    tempThirtySixHrWeatherForecastData: {},
    tempWeeklyWeatherForecastData: {},

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
    weatherType: [],
  },
  getters: {
  },
  mutations: {
    GETCURRENTWEATHERDATA(state, payload) {
      state.currentWeatherData = payload;
    },
    GETCURRENTWEATHERALERT(state, payload) {
      payload.sort(function (a, b) {
        return a.geocode - b.geocode
      });

      state.currentWeatherAlert = payload

      const alertLocation = new Set();
      payload.forEach((item) => {
        if (item.hazardConditions.hazards[0]) {
          alertLocation.add(item.locationName);
        }
      })
      state.currentWeatherAlertLocation = Array.from(alertLocation);
    },
    GETCURRENTWEATHERTYPE(state, payload) {
      const weatherType = new Set();
      payload.forEach((item) => {
        weatherType.add(item.weatherElement[14].elementValue);
      })
      state.weatherType = Array.from(weatherType);
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

    GETEARTHQUAKEDATA(state, payload) {
      state.EarthquakeDate = payload
    }
  },
  actions: {
    getCurrentWeatherData(context) {
      const api = `${process.env.VUE_APP_APIPATH}O-A0001-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        context.commit('GETCURRENTWEATHERDATA', res.data.records.location);
        context.commit('GETCURRENTWEATHERTYPE', res.data.records.location);
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
    filterWeatherForecastData(context, payload) {
      context.commit('FILTER36HRWEATHERFORECASTDATA', payload);
      context.commit('FILTERWEEKLYWEATHERFORECASTDATA', payload);
    },


    getEarthquakeData(context) {
      const api = `${process.env.VUE_APP_APIPATH}E-A0016-001?Authorization=${process.env.VUE_APP_CUSTOMPATH}`

      axios.get(api).then((res) => {
        console.log(res.data.records.Earthquake);
        context.commit('GETEARTHQUAKEDATA', res.data.records.Earthquake);
      })
    }
  },
  modules: {
  }
})
