<template>
  <div>
    <div class="container">
      <div class="taiwanImgContainer">
        <img src="@/assets/TaiwanWithLat&Lon.png" alt="" class="taiwanImg">
        <div class="Epicenter"></div>
      </div>

      <table class="infoTable">
        <thead>
          <th></th>
          <th class="infoTh">
            <p>時間</p>
          </th>
          <th class="infoTh">
            <p>芮氏規模</p>
          </th>
          <th class="infoTh">
            <p>地震深度</p>
          </th>
          <th class="infoTh">
            <p>地點</p>
          </th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in earthquakeData" :key="item.ReportImageURI" @mouseenter="startEpicenterAnimate(item)"
            @click="getTempEarthquakeInfo(item)" @mouseleave="removeEpicenterAnimate">
            <td><img src="@/assets/weatherIcon/left.png" alt="" class="leftImg"
                v-show="tempEarthquakeInfo.ReportImageURI == item.ReportImageURI"></td>
            <td class="infoTd" :class="changeBgColor(index)">
              <p>{{ item.EarthquakeInfo.OriginTime | onlyShowDate }}</p>
              <p>{{ item.EarthquakeInfo.OriginTime | onlyShowHour }}</p>
            </td>
            <td class="infoTd" :class="changeBgColor(index)">
              <p>{{ item.EarthquakeInfo.EarthquakeMagnitude.MagnitudeValue }}</p>
            </td>
            <td class="infoTd" :class="changeBgColor(index)">
              <p>{{ item.EarthquakeInfo.FocalDepth }} km</p>
            </td>
            <td class="infoTd" :class="changeBgColor(index)">
              <p>{{ item.EarthquakeInfo.Epicenter.Location }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      tempEarthquakeInfo: {},
      IntervalID: '',
      blurryValue: 0,
      radiusValue: 0
    }
  },
  computed: {
    earthquakeData() {
      return this.$store.state.EarthquakeDate
    }
  },
  methods: {
    changeBgColor(e) {
      if (e % 2 === 1) {
        return 'blueBg'
      }
    },
    getTempEarthquakeInfo(item) {
      this.tempEarthquakeInfo = item

      this.startEpicenterAnimate(item)
    },
    startEpicenterAnimate(item) {
      const vm = this

      if (item.ReportImageURI == vm.tempEarthquakeInfo.ReportImageURI) {
        vm.IntervalID = setInterval(() => {
          console.log("start");
          vm.blurryValue += 0.5
          if (vm.blurryValue > 10) {
            vm.blurryValue = 0
          }
          vm.radiusValue += 0.5
          if (vm.radiusValue > 10) {
            vm.radiusValue = 0
          }

          $('.Epicenter').css('--blurry', `${vm.blurryValue}px`)
          $('.Epicenter').css('--radius', `${vm.radiusValue}px`)
        }, 50)
      }
    },
    removeEpicenterAnimate() {
      const vm = this

      clearInterval(vm.IntervalID)
      console.log("remove");
      vm.blurryValue = 0
      vm.radiusValue = 0

      $('.Epicenter').css('--blurry', `0px`)
      $('.Epicenter').css('--radius', `0px`)
    }
  },

  watch: {
    tempEarthquakeInfo() {
      const vm = this;
      let img = document.querySelector('.taiwanImg')

      const lat = vm.tempEarthquakeInfo.EarthquakeInfo.Epicenter.EpicenterLatitude;
      const lon = vm.tempEarthquakeInfo.EarthquakeInfo.Epicenter.EpicenterLongitude;

      let leftValue = (lon - 119) * (img.clientWidth * 0.89) / 4 + 24
      let bottomValue = (lat - 21) * (img.clientHeight * 0.94) / 5 + 20

      $('.Epicenter').css('left', `${leftValue}px`)
      $('.Epicenter').css('bottom', `${bottomValue}px`)
    }
  },
  filters: {
    onlyShowHour(e) {
      let hour = Number(e.slice(11, 13))
      let minute = e.slice(14, 16)

      if (hour < 13) {
        return `上午 ${hour}:${minute}`
      } else if (hour >= 13) {
        return `下午 ${hour - 12}:${minute}`
      }
    },
    onlyShowDate(e) {
      return `${e.slice(5, 7)}月${e.slice(8, 10)}日`
    }
  },
  // created() {
  //   this.tempEarthquakeInfo = this.earthquakeData[0]
  // },
  beforeDestroy() {
    clearInterval(this.IntervalID)
  }
}
</script>

<style scoped>
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: '微軟正黑體'
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem;
}

.taiwanImgContainer {
  position: sticky;
  top: 1rem;
}

.taiwanImg {
  width: 35vw;
  min-width: 300px;
}

.Epicenter {
  --blurry: 0px;
  --radius: 0px;

  position: absolute;
  bottom: -1000px;
  left: -1000px;

  box-shadow: 0px 0px var(--blurry) var(--radius) rgb(255, 130, 130);

  height: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: red;
}

.leftImg {
  height: 40px;
  transform: rotate(90deg);
}

.infoTable {
  text-align: center;
  border-collapse: collapse;
}

th {
  padding: 1rem 0.5rem;
  position: sticky;
  top: 1rem;
  background-color: white;
}

td {
  padding: 1.5rem 0.5rem;

}

.infoTh {
  border-bottom: solid 2px rgb(180, 180, 180);
}

tr:hover .infoTd {
  background-color: #146C94;
  color: white;

  cursor: pointer;
}

.blueBg {
  background-color: #e4f1fd;
}

@media (max-width:991px) {

  th,
  td {
    padding: 0rem;
  }

  p {
    font-size: 14px;
  }
}
</style>