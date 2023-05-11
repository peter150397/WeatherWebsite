<template>
    <div>
        <div class="flex-box">
            <img src="../../assets/Taiwan.png" alt="" class="Taiwan-img">
            <button class="location Keelung" @click="selectLocation = '基隆市';">
                <p>基隆市</p>
            </button>

            <button class="location Taipei" @click="selectLocation = '臺北市';">
                <p>臺北市</p>
            </button>
            <button class="location NewTaipei" @click="selectLocation = '新北市'">
                <p>新北市</p>
            </button>
            <button class="location Taoyuan" @click="selectLocation = '桃園市';">
                <p>桃園市</p>
            </button>
            <button class="location HsinchuCity" @click="selectLocation = '新竹市';">
                <p>新竹市</p>
            </button>
            <button class="location HsinchuCountry" @click="selectLocation = '新竹縣';">
                <p>新竹縣</p>
            </button>
            <button class="location Miaoli" @click="selectLocation = '苗栗縣';">
                <p>苗栗縣</p>
            </button>
            <button class="location Taichung" @click="selectLocation = '臺中市';">
                <p>臺中市</p>
            </button>
            <button class="location Nantou" @click="selectLocation = '南投縣';">
                <p>南投縣</p>
            </button>
            <button class="location Changhua" @click="selectLocation = '彰化縣';">
                <p>彰化縣</p>
            </button>
            <button class="location Yunlin" @click="selectLocation = '雲林縣';">
                <p>雲林縣</p>
            </button>
            <button class="location ChiayiCity" @click="selectLocation = '嘉義市';">
                <p>嘉義市</p>
            </button>
            <button class="location ChiayiCountry" @click="selectLocation = '嘉義縣';">
                <p>嘉義縣</p>
            </button>
            <button class="location Tainan" @click="selectLocation = '臺南市';">
                <p>臺南市</p>
            </button>
            <button class="location Kaohsiung" @click="selectLocation = '高雄市';">
                <p>高雄市</p>
            </button>
            <button class="location Pingtung" @click="selectLocation = '屏東縣';">
                <p>屏東縣</p>
            </button>
            <button class="location Taitung" @click="selectLocation = '臺東縣';">
                <p>臺東縣</p>
            </button>
            <button class="location Hualien" @click="selectLocation = '花蓮縣';">
                <p>花蓮縣</p>
            </button>
            <button class="location Yilan" @click="selectLocation = '宜蘭縣';">
                <p>宜蘭縣</p>
            </button>
            <button class="location Penghu" @click="selectLocation = '澎湖縣';">
                <p>澎湖縣</p>
            </button>
            <button class="location Kinmen" @click="selectLocation = '金門縣';">
                <p>金門縣</p>
            </button>
            <button class="location Lianjiang" @click="selectLocation = '連江縣';">
                <p>連江縣</p>
            </button>
        </div>
        <div class="table-bg">
            <div class="table-div" v-if="selectLocation">
                <select v-model="selectFilterLocation">
                    <option value="">全部地區</option>
                    <option :value="item" v-for="item in filterLocations" :key="item">{{ item }}</option>
                </select>
                <table>
                    <thead>
                        <th>縣市</th>
                        <th>鄉鎮市</th>
                        <th>測站名稱</th>
                        <th>觀測時間 <br>({{ getDate() }})</th>
                        <th>溫度</th>
                        <th>相對溼度</th>
                        <th>風速</th>
                        <th>風向</th>
                        <th>天氣</th>
                    </thead>
                    <tbody v-for="item in showingData" :key="item.lat">
                        <tr>
                            <td>{{ item.parameter[0].parameterValue }}</td>
                            <td>{{ item.parameter[2].parameterValue }}</td>
                            <td>{{ item.locationName }}</td>
                            <td>{{ item.time.obsTime | onlyShowHour }}</td>
                            <td :class="{ 'missingData': item.weatherElement[3].elementValue == -99 }">{{
                                item.weatherElement[3].elementValue | TEMPfilter }}</td>
                            <td :class="{ 'missingData': item.weatherElement[4].elementValue == -99 }">{{
                                item.weatherElement[4].elementValue | HUMDfilter }}</td>
                            <td :class="{ 'missingData': item.weatherElement[2].elementValue == -99 }">{{
                                item.weatherElement[2].elementValue | WDSDfilter }}</td>
                            <td :class="{ 'missingData': item.weatherElement[1].elementValue == -99 }">{{
                                item.weatherElement[1].elementValue | WDIRfilter }}</td>
                            <td v-if="item.weatherElement[14].elementValue == -99">無資料</td>
                            <td v-else><img :src="weatherImgSwitch(item.weatherElement[14].elementValue)" alt="weatherImg"
                                    class="weatherImg"></td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

import cloud from "@/assets/weather/cloud.png";
import clouds from "@/assets/weather/clouds.png";
import cloudyDay from "@/assets/weather/cloudy-day.png";
import rainDrops from "@/assets/weather/rain-drops.png";
import raining from "@/assets/weather/raining.png";
import storm from "@/assets/weather/storm.png";
import sun from "@/assets/weather/sun.png";
import wind from "@/assets/weather/wind.png";


export default {
    data() {
        return {
            selectLocation: '',
            filterData: [],
            filterLocations: [],

            selectFilterLocation: '',
            filterDataByLocation: [],

            showingData: [],

            weatherImg: {
                cloud: cloud,
                clouds: clouds,
                cloudyDay: cloudyDay,
                rainDrops: rainDrops,
                raining: raining,
                storm: storm,
                sun: sun,
                wind: wind,
            }
        }
    },
    methods: {
        weatherImgSwitch(event) {
            switch (event) {
                case "陰":
                    return this.weatherImg.cloud;
                    break;
                case "多雲":
                    return this.weatherImg.clouds;
                    break;
                case "晴":
                    return this.weatherImg.sun;
                    break;
                case "陰有雨":
                    return this.weatherImg.raining;
                    break;
                case "-99":
                    return;
                    break;
            }
        },
        getDate() {
            const date = new Date()
            let months = date.getMonth() + 1
            let days = date.getDate()
            let week = date.getDay()

            let chinessNum = function () {
                switch (week) {
                    case 1:
                        return "一"
                        break;
                    case 2:
                        return "二"
                        break;
                    case 3:
                        return "三"
                        break;
                    case 4:
                        return "四"
                        break;
                    case 5:
                        return "五"
                        break;
                    case 6:
                        return "六"
                        break;
                    case 7:
                        return "日"
                        break;
                }
            }

            return `${months}月${days}日 星期${chinessNum()}`
        }
    },
    watch: {
        selectLocation() {
            const vm = this;
            vm.filterData = [];
            vm.filterLocations = [];

            vm.$store.state.weatherData.forEach((item) => {
                if (vm.selectLocation == item.parameter[0].parameterValue) {
                    vm.filterData.push(item)
                }
            })
            vm.showingData = vm.filterData;
            
            const location = new Set();
            vm.filterData.forEach((item)=> {
                location.add(item.parameter[2].parameterValue);
            })
            vm.filterLocations = Array.from(location);

            setTimeout(() => {
                $("html").animate({
                    scrollTop: 1144
                }, 0)
            }, 10);
        },
        selectFilterLocation() {
            const vm = this;
            vm.filterDataByLocation = [];

            vm.filterData.forEach((item)=> {
                if(item.parameter[2].parameterValue == vm.selectFilterLocation) {
                    vm.filterDataByLocation.push(item)
                }
            })
            if(vm.selectFilterLocation) {
                vm.showingData = vm.filterDataByLocation;
            }else{
                vm.showingData = vm.filterData;
            }
            

        }
    },
    filters: {
        TEMPfilter(e) {
            if (e == -99) {
                return "無資料"
            } else {
                return e + '°C';
            }
        },
        HUMDfilter(e) {
            if (e == -99) {
                return "無資料"
            } else {
                return Math.floor(e * 100) + "%"
            }
        },
        WDSDfilter(e) {
            if (e == -99) {
                return "無資料"
            } else {
                return e + "m/s"
            }
        },
        WDIRfilter(event) {
            let e = Number(event);

            if (e == 0) {
                return "無風"
            } else if (e == -99) {
                return "無資料"
            } else if (22.5 <= e && e < 67.5) {
                return "東北"
            } else if (67.5 <= e && e < 112.5) {
                return "東"
            } else if (112.5 <= e && e < 157.5) {
                return "東南"
            } else if (157.5 <= e && e < 202.5) {
                return "南"
            } else if (202.5 <= e && e < 247.5) {
                return "西南"
            } else if (247.5 <= e && e < 292.5) {
                return "西"
            } else if (292.5 <= e && e < 337.5) {
                return "西北"
            } else if (337.5 <= e || e < 22.5) {
                return "北"
            }
        },
        onlyShowHour(e) {
            return e.slice(11)
        }
    },
}
</script>

<style scoped>
.flex-box {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 2rem 0;
    background-color: #B0DAFF;
}

.Taiwan-img {
    height: 680px;
}

.location {
    position: absolute;

    width: 70px;
    border-radius: 8px;
    border: solid 2px #146C94;
    color: #146C94;
    background-color: transparent;
    box-shadow: 2px 2px 2px rgb(94, 94, 94);

    text-align: center;

    transition-duration: 0.1s;
}

.location:hover {
    background-color: #146C94;
    color: #B0DAFF;
}

.Keelung {
    right: 33%;
    top: 7%;
}

.Taipei {
    right: 38%;
    top: 3%;
}

.NewTaipei {
    right: 29.5%;
    top: 14%;
}

.Taoyuan {
    right: 43%;
    top: 8%;
}

.HsinchuCity {
    right: 47%;
    top: 16%;
}

.HsinchuCountry {
    right: 41%;
    top: 23%;
}

.Miaoli {
    right: 49%;
    top: 22%;
}

.Taichung {
    right: 52%;
    top: 30%;
}

.Nantou {
    right: 44%;
    top: 42%;
}

.Changhua {
    right: 54%;
    top: 37%;
}

.Yunlin {
    right: 56.5%;
    top: 47%;
}

.ChiayiCity {
    right: 47%;
    top: 52%;
}

.ChiayiCountry {
    right: 57%;
    top: 54%;
}

.Tainan {
    right: 57.5%;
    top: 62%;
}

.Kaohsiung {
    right: 55%;
    top: 74%;
}

.Pingtung {
    right: 51%;
    top: 86%;
}

.Taitung {
    right: 40%;
    top: 78%;
}

.Hualien {
    right: 34%;
    top: 47%;
}

.Yilan {
    right: 30%;
    top: 25%;
}

.Penghu {
    left: 31%;
    top: 53%;
}

.Kinmen {
    left: 30%;
    top: 34%;
}

.Lianjiang {
    left: 30%;
    top: 19%;
}


.table-bg {
    background-color: #B0DAFF;
    padding: 3rem 17%;
}

.table-div {
    background-color: white;
    border-radius: 20px;
    padding: 2rem;
}

.weatherImg {
    height: 60px;
}

.missingData {
    color: red;
    font-weight: bold;
}

table {
    margin: 0 auto;
    border-collapse: collapse;
}
select{
    text-align: center;
    margin: 1rem 25%;
    width: 50%;
}

th,
td {
    padding: 0.8rem;
    border-bottom: solid 2px #B0DAFF;
    text-align: center;
    letter-spacing: 1px;

    min-width: 80px;
    min-height: 60px;
}

p {
    margin: 0;
    font-weight: bold;
}
</style>