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
          <th>
            <p>時間</p>
          </th>
          <th>
            <p>芮氏規模</p>
          </th>
          <th>
            <p>地震深度</p>
          </th>
          <th>
            <p>地點</p>
          </th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in earthquakeData" :key="item.ReportImageURI" @mouseenter="startEpicenterAnimate(item)"
            @click="getTempEarthquakeInfo(item)" @mouseleave="removeEpicenterAnimate">
            <td><img src="@/assets/weatherIcon/left.png" alt="" class="arrow"
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
      $('.Epicenter').css('display', 'block')
    },
    startEpicenterAnimate(item) {
      const vm = this

      if (item.ReportImageURI == vm.tempEarthquakeInfo.ReportImageURI) {
        vm.IntervalID = setInterval(() => {
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
  beforeDestroy() {
    clearInterval(this.IntervalID)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
}

.taiwanImgContainer {
  position: sticky;
  top: 0;
}

.taiwanImg {
  width: 580px;
}

.Epicenter {
  --blurry: 0px;
  --radius: 0px;

  position: absolute;
  bottom: 0px;
  left: 0px;

  display: none;

  box-shadow: 0px 0px var(--blurry) var(--radius) rgb(255, 130, 130);

  height: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: red;
}

.infoTable {
  text-align: center;
  border-collapse: collapse;
  width: 50%;
}

th {
  padding: 1rem 0.5rem;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: white;
  border-bottom: solid 2px rgb(180, 180, 180);
}

th:nth-child(1){
  min-width: 57px;
  border: none;
}

th:nth-child(2){
  min-width: 86px;
}

.arrow {
  height: 40px;
  transform: rotate(90deg);
}

td {
  padding: 1.5rem 0.5rem;
}


tr:hover .infoTd {
  background-color: #146C94;
  color: white;

  cursor: pointer;
}

.blueBg {
  background-color: #e4f1fd;
}

@media (max-width:1093px) {
  .taiwanImg{
    width: 400px;
  }
}

@media (max-width:790px){
  .taiwanImgContainer{
    display: none;
  }
  .infoTable{
    width: 90%;
  }
  th:nth-child(1) , td:nth-child(1) {
    display: none;
  }
}
</style>