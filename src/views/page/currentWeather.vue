<template>
    <div>
        <div class="flex-box">

            <img src="@/assets/bg-clouds/background-cloud-1.png" alt="bg-clouds" class="bg-clouds cloud1 left">
            <img src="@/assets/bg-clouds/background-cloud-3.png" alt="bg-clouds" class="bg-clouds cloud2 right">
            <img src="@/assets/bg-clouds/background-cloud-1.png" alt="bg-clouds" class="bg-clouds cloud3 left">
            <img src="@/assets/bg-clouds/background-cloud-3.png" alt="bg-clouds" class="bg-clouds cloud4 right">
            <img src="@/assets/bg-clouds/background-cloud-1.png" alt="bg-clouds" class="bg-clouds cloud5 left">
            <img src="@/assets/bg-clouds/background-cloud-3.png" alt="bg-clouds" class="bg-clouds cloud6 right">
            <img src="@/assets/bg-clouds/background-cloud-2.png" alt="bg-clouds" class="bg-clouds cloud7 left">
            <img src="@/assets/bg-clouds/background-cloud-4.png" alt="bg-clouds" class="bg-clouds cloud8 right">

            <div class="TaiwanContainer">
                <img src="../../assets/Taiwan.png" alt="" class="Taiwan-img">
                <button class="location" @click="changeLocation(item.locationName)" v-for="item in currentWeatherAlert"
                    :key="item.geocode" :class="filterPositionOfLocationButton(item.locationName)">
                    <img src="@/assets/weatherIcon/waring.png" alt="" class="waringIcon"
                        :title="`${item.hazardConditions.hazards[0].info.significance} : ${item.hazardConditions.hazards[0].info.phenomena}`"
                        v-if="currentWeatherAlertLocation.indexOf(item.locationName) != -1">
                    <p>{{ item.locationName }}</p>
                </button>
            </div>

        </div>
        <div class="table-bg" v-if="selectLocation">
            <div class="table-div">
                <select v-model="selectFilterLocation">
                    <option value="">全部地區</option>
                    <option :value="item" v-for="item in filterLocations" :key="item">{{ item }}</option>
                </select>
                <table>
                    <thead>
                        <th><p>縣市</p></th>
                        <th><p>鄉鎮市</p></th>
                        <th><p>測站名稱</p></th>
                        <th><p>觀測時間<br>({{ getDate() }})</p></th>
                        <th><p>溫度</p></th>
                        <th><p>相對溼度</p></th>
                        <th><p>風速</p></th>
                        <th><p>風向</p></th>
                        <th><p>天氣</p></th>
                    </thead>
                    <tbody v-for="item in showingData" :key="item.lat">
                        <tr>
                            <td>
                                <p>{{ item.parameter[0].parameterValue }}</p>
                            </td>
                            <td>
                                <p>{{ item.parameter[2].parameterValue }}</p>
                            </td>
                            <td>
                                <p>{{ item.locationName }}</p>
                            </td>
                            <td>
                                <p>{{ item.time.obsTime | onlyShowHour }}</p>
                            </td>
                            <td :class="{ 'missingData': item.weatherElement[3].elementValue == -99 }">
                                <p>{{
                                    item.weatherElement[3].elementValue | TEMPfilter }}</p>
                            </td>
                            <td :class="{ 'missingData': item.weatherElement[4].elementValue == -99 }">
                                <p>{{
                                    item.weatherElement[4].elementValue | HUMDfilter }}</p>
                            </td>
                            <td :class="{ 'missingData': item.weatherElement[2].elementValue == -99 }">
                                <p>{{
                                    item.weatherElement[2].elementValue | WDSDfilter }}</p>
                            </td>
                            <td :class="{ 'missingData': item.weatherElement[1].elementValue == -99 }">
                                <p>{{
                                    item.weatherElement[1].elementValue | WDIRfilter }}</p>
                            </td>
                            <td v-if="item.weatherElement[14].elementValue == -99">
                                <p>無資料</p>
                            </td>
                            <td v-else><img :src="weatherImgSwitch(item.weatherElement[14].elementValue)" alt="weatherImg"
                                    class="weatherImg" :title="item.weatherElement[14].elementValue"></td>
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
import fog from "@/assets/weather/fog.png";
import rainDrops from "@/assets/weather/rain-drops.png";
import raining from "@/assets/weather/raining.png";
import snowing from "@/assets/weather/snowing.png";
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
                fog: fog,
                rainDrops: rainDrops,
                raining: raining,
                snowing: snowing,
                storm: storm,
                sun: sun,
                wind: wind,
            }
        }
    },
    computed: {
        currentWeatherAlertLocation() {
            return this.$store.state.currentWeatherAlertLocation
        },
        currentWeatherAlert() {
            return this.$store.state.currentWeatherAlert
        },
    },
    methods: {
        weatherImgSwitch(event) {
            if (event == "陰") {
                return this.weatherImg.cloud;
            } else if (event == "多雲") {
                return this.weatherImg.clouds;
            } else if (event == "晴") {
                return this.weatherImg.sun;
            } else if (event == "陰有雨" || event == "多雲有雨") {
                return this.weatherImg.raining
            } else if (event == "陰有雷" || event == "多雲有雷" || event == "陰有雷雨") {
                return this.weatherImg.storm
            } else if (event == -99) {
                return
            }
        },
        getDate() {
            const date = new Date()
            let months = date.getMonth() + 1
            let days = date.getDate()
            let week = date.getDay()

            console.log(week);

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
                    case 0:
                        return "日"
                        break;
                }
            }

            return `${months}月${days}日 星期${chinessNum()}`
        },
        filterPositionOfLocationButton(location) {
            switch (location) {
                case "基隆市":
                    return 'Keelung'
                    break;
                case "臺北市":
                    return 'Taipei'
                    break;
                case "新北市":
                    return 'NewTaipei'
                    break;
                case "桃園市":
                    return 'Taoyuan'
                    break;
                case "新竹市":
                    return 'HsinchuCity'
                    break;
                case "新竹縣":
                    return 'HsinchuCountry'
                    break;
                case "苗栗縣":
                    return 'Miaoli'
                    break;
                case "臺中市":
                    return 'Taichung'
                    break;
                case "南投縣":
                    return 'Nantou'
                    break;
                case "彰化縣":
                    return 'Changhua'
                    break;
                case "雲林縣":
                    return 'Yunlin'
                    break;
                case "嘉義市":
                    return 'ChiayiCity'
                    break;
                case "嘉義縣":
                    return 'ChiayiCountry'
                    break;
                case "臺南市":
                    return 'Tainan'
                    break;
                case "高雄市":
                    return 'Kaohsiung'
                    break;
                case "屏東縣":
                    return 'Pingtung'
                    break;
                case "臺東縣":
                    return 'Taitung'
                    break;
                case "花蓮縣":
                    return 'Hualien'
                    break;
                case "宜蘭縣":
                    return 'Yilan'
                    break;
                case "澎湖縣":
                    return 'Penghu'
                    break;
                case "金門縣":
                    return 'Kinmen'
                    break;
                case "連江縣":
                    return 'Lianjiang'
                    break;
            }
        },
        changeLocation(location) {
            this.selectLocation = location
        }
    },
    watch: {
        selectLocation() {
            const vm = this;
            vm.filterData = [];
            vm.filterLocations = [];

            vm.$store.state.currentWeatherData.forEach((item) => {
                if (vm.selectLocation == item.parameter[0].parameterValue) {
                    vm.filterData.push(item)
                }
            })
            vm.showingData = vm.filterData;

            const location = new Set();
            vm.filterData.forEach((item) => {
                location.add(item.parameter[2].parameterValue);
            })
            vm.filterLocations = Array.from(location);

            setTimeout(() => {
                $("html").animate({
                    scrollTop: document.querySelector('.flex-box').offsetHeight + document.querySelector('.container').offsetHeight 
                }, 500)
            }, 10);
        },
        selectFilterLocation() {
            const vm = this;
            vm.filterDataByLocation = [];

            vm.filterData.forEach((item) => {
                if (item.parameter[2].parameterValue == vm.selectFilterLocation) {
                    vm.filterDataByLocation.push(item)
                }
            })
            if (vm.selectFilterLocation) {
                vm.showingData = vm.filterDataByLocation;
            } else {
                vm.showingData = vm.filterData;
            }
        },

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
    mounted() {
        $(".left").animate({
            left: "+=150px"
        }, 2000)
        $(".right").animate({
            right: "+=150px"
        }, 2000)
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
    font-family: '微軟正黑體';
}

p {
    font-size: 16px;
    font-weight: bold;
}


.flex-box {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 2rem 0;
    background-color: #B0DAFF;
    overflow: hidden;
}

.TaiwanContainer {
    position: relative;
}

.Taiwan-img {
    position: relative;
    height: 680px;
}

.location {
    position: absolute;

    width: 90px;
    border-radius: 8px;
    border: solid 2px #146C94;
    color: #146C94;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
}

.location:hover {
    background-color: #146C94;
    color: #B0DAFF;
    transition-duration: 0.1s;

    cursor: pointer;
}


.waringIcon {
    height: 24px;
}

.bg-clouds {
    position: absolute;
    height: 600px;
}

.cloud1 {
    bottom: -200px;
    left: -350px;
    opacity: 50%;
}

.cloud2 {
    bottom: -120px;
    right: -450px;
    opacity: 50%;
}

.cloud3 {
    bottom: 20px;
    left: -450px;
    opacity: 30%;
}

.cloud4 {
    bottom: 80px;
    right: -550px;
    opacity: 30%;
}

.cloud5 {
    bottom: 200px;
    left: -550px;
    opacity: 20%;
}

.cloud6 {
    bottom: 300px;
    right: -650px;
    opacity: 20%;
}

.cloud7 {
    height: 150px;
    left: 350px;
    top: 70px;
    opacity: 50%;
}

.cloud8 {
    height: 150px;
    right: 250px;
    top: 10px;
    opacity: 50%;
}

.Keelung {
    right: 0px;
    top: 12px;
}

.Taipei {
    right: 120px;
    top: 0px;
}

.NewTaipei {
    right: -60px;
    top: 50px;
}

.Taoyuan {
    right: 210px;
    top: 45px;
}

.HsinchuCity {
    right: 250px;
    top: 100px;
}

.HsinchuCountry {
    right: 100px;
    top: 120px;
}

.Miaoli {
    right: 290px;
    top: 145px;
}

.Taichung {
    right: 320px;
    top: 190px;
}

.Nantou {
    right: 180px;
    top: 280px;
}

.Changhua {
    right: 350px;
    top: 240px;
}

.Yunlin {
    right: 390px;
    top: 310px;
}

.ChiayiCity {
    right: 210px;
    top: 360px;
}

.ChiayiCountry {
    right: 395px;
    top: 360px;
}

.Tainan {
    right: 400px;
    top: 450px;
}

.Kaohsiung {
    right: 370px;
    top: 510px;
}

.Pingtung {
    right: 300px;
    top: 600px;
}

.Taitung {
    right: 100px;
    top: 530px;
}

.Hualien {
    right: 10px;
    top: 320px;
}

.Yilan {
    right: -40px;
    top: 150px;
}

.Penghu {
    right: 530px;
    top: 350px;
}

.Kinmen {
    right: 530px;
    top: 210px;
}

.Lianjiang {
    right: 530px;
    top: 100px;
}

.table-bg {
    background: linear-gradient(#B0DAFF, #FEFF86);
    position: relative;
    padding: 3rem 20%;
}

.table-div {
    background: linear-gradient(#FEFF86, #B0DAFF);
    border-radius: 20px;
    padding: 2rem;
}

.weatherImg {
    height: 60px;
}

.missingData {
    color: rgb(255, 60, 0);
    font-weight: bolder;
}

table {
    margin: 0 auto;
    border-collapse: collapse;
}

select {
    text-align: center;
    margin: 1rem 25%;
    width: 50%;
    padding: 0.5rem 0;
    border: none;
    border-radius: 5px;
    background-color: #146C94;
    color: white;

    font-size: 16px;
    font-weight: bold;
}

th,
td {
    padding: 0.4rem 0.2rem;
    border-bottom: solid 3px #146C94;
    text-align: center;
    letter-spacing: 1px;

    width: 80px;
    height: 60px;
}

@media (max-width:991px) {
    .Taiwan-img {
        display: none;
    }

    .bg-clouds {
        display: none;
    }

    .TaiwanContainer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .location {
        position: static;
        width: 200px;
        height: 90px;
    }

    .Keelung {
        order: 1;
    }

    .Taipei {
        order: 2;
    }

    .NewTaipei {
        order: 3;
    }

    .Taoyuan {
        order: 4;
    }

    .HsinchuCity {
        order: 5;
    }

    .HsinchuCountry {
        order: 6;
    }

    .Miaoli {
        order: 7;
    }

    .Taichung {
        order: 8;
    }

    .Nantou {
        order: 9;
    }

    .Changhua {
        order: 10;
    }

    .Yunlin {
        order: 11;
    }

    .ChiayiCity {
        order: 12;
    }

    .ChiayiCountry {
        order: 13;
    }

    .Tainan {
        order: 14;
    }

    .Kaohsiung {
        order: 15;
    }

    .Pingtung {
        order: 16;
    }

    .Taitung {
        order: 19;
    }

    .Hualien {
        order: 18;
    }

    .Yilan {
        order: 17;
    }

    .Penghu {
        order: 20;
    }

    .Kinmen {
        order: 21;
    }

    .Lianjiang {
        order: 22;
    }

    .table-bg{
        padding: 2rem 1.5rem;
    }
    th > p , td > p{
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0;
    }
}</style>