<template>
    <div>
        <loading :active="isLoading" :is-full-page="fullPage" />
        <div class="container">
            <div class="locationSelectBarContainer">
                <img src="@/assets/weatherIcon/placeholder.png" alt="" class="weatherTitleIcon">
                <select class="locationSelectBar" v-model="selectLocation">
                    <option :value="item" v-for="item in $store.state.locationArray" :key="item">{{ item }}</option>
                </select>
            </div>

            <!-- 36HR Forecast -->
            <div class="thirty-six-hr-forecast">
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].startTime.slice(11, 16) == '06:00'">
                        今日白天</p>
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].startTime.slice(11, 16) == '12:00'">
                        今日下午</p>
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].startTime.slice(11, 16) == '18:00' || tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].startTime.slice(11, 16) == '00:00'">
                        今晚明晨</p>
                    <p class="subtitle">{{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].startTime |
                        onlyShowHour }} ~
                        {{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].endTime | onlyShowHour }}</p>

                    <img :src="weatherImgSwitch(tempThirtySixHrWeatherForecastData.weatherElement[0].time[0].parameter.parameterValue)"
                        alt="" class="weatherImg">

                    <div class="TEMPPoPflexbox">
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[1].time[0].parameter.parameterName }}%</p>
                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[2].time[0].parameter.parameterName }}°C
                            ~{{ tempThirtySixHrWeatherForecastData.weatherElement[4].time[0].parameter.parameterName }}°C
                        </p>
                    </div>
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[1].startTime.slice(11, 16) == '18:00'">
                        今晚明晨</p>
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[1].startTime.slice(11, 16) == '06:00'">
                        明日白天</p>

                    <p class="subtitle">{{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[1].startTime |
                        onlyShowHour }} ~
                        {{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[1].endTime | onlyShowHour }}</p>

                    <img :src="weatherImgSwitch(tempThirtySixHrWeatherForecastData.weatherElement[0].time[1].parameter.parameterValue)"
                        alt="" class="weatherImg">

                    <div class="TEMPPoPflexbox">
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[1].time[1].parameter.parameterName }}%</p>

                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[2].time[1].parameter.parameterName }}°C ~
                            {{ tempThirtySixHrWeatherForecastData.weatherElement[4].time[1].parameter.parameterName }}°C
                        </p>
                    </div>
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[2].startTime.slice(11, 16) == '06:00'">
                        明日白天</p>
                    <p class="title"
                        v-if="tempThirtySixHrWeatherForecastData.weatherElement[0].time[2].startTime.slice(11, 16) == '18:00'">
                        明日晚上</p>

                    <p class="subtitle">{{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[2].startTime |
                        onlyShowHour }} ~
                        {{ tempThirtySixHrWeatherForecastData.weatherElement[0].time[2].endTime | onlyShowHour }}</p>

                    <img :src="weatherImgSwitch(tempThirtySixHrWeatherForecastData.weatherElement[0].time[2].parameter.parameterValue)"
                        alt="" class="weatherImg">

                    <div class="TEMPPoPflexbox">
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[1].time[2].parameter.parameterName }}%</p>

                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>{{
                            tempThirtySixHrWeatherForecastData.weatherElement[2].time[2].parameter.parameterName }}°C ~
                            {{ tempThirtySixHrWeatherForecastData.weatherElement[4].time[2].parameter.parameterName }}°C
                        </p>
                    </div>
                </div>
            </div>

            <!-- week Forecast -->
            <div class="weekForecast">
                <div class="weekForecastItemHeader">
                    <div class="headerDate">日期</div>
                    <div class="headerLine"></div>
                    <div class="headerDay">白天</div>
                    <div class="headerLine"></div>
                    <div class="headerNight">晚上</div>
                </div>
                <div class="weekForecastItem" v-for="item in 6" :key="item">
                    <div class="date">
                        <h5>{{ getWeek(item) }}</h5>
                        <p>{{ tempWeeklyWeatherForecastData.weatherElement[8].time[item * 2].startTime | onlyShowDate }}</p>
                    </div>
                    <div class="line"></div>
                    <div class="tempPart">
                        <div class="day">
                            <img :src="weatherImgSwitch(tempWeeklyWeatherForecastData.weatherElement[6].time[item * 2].elementValue[1].value)"
                                alt="" class="weatherImg">
                            <p>{{ tempWeeklyWeatherForecastData.weatherElement[8].time[item * 2].elementValue[0].value }}°C ~
                                {{ tempWeeklyWeatherForecastData.weatherElement[12].time[item * 2].elementValue[0].value }}°C
                            </p>
                        </div>
                        <div class="night">
                            <img :src="weatherImgSwitch(tempWeeklyWeatherForecastData.weatherElement[6].time[item * 2 + 1].elementValue[1].value)"
                                alt="" class="weatherImg">
                            <p>{{ tempWeeklyWeatherForecastData.weatherElement[8].time[item * 2 + 1].elementValue[0].value
                            }}°C ~
                                {{ tempWeeklyWeatherForecastData.weatherElement[12].time[item * 2 + 1].elementValue[0].value
                                }}°C</p>
                        </div>
                    </div>

                </div>
            </div>

            <!-- other Relevant Infomation : RH -->
            <div class="relevantInfo">
                <div>
                    <h2>相對溼度</h2>
                    <h4>{{ tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value }} %</h4>
                </div>
                <div class="relevantRHInfo">
                    <div class="RHCircle" id="RHCircle">
                        <p v-if="tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value == 0">無</p>
                        <p
                            v-else-if="tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value <= 33 && tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value > 0">
                            低</p>
                        <p
                            v-else-if="tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value <= 66 && tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value > 33">
                            中</p>
                        <p v-else>高</p>
                    </div>
                </div>
            </div>

            <!-- other Relevant Infomation : Wind Speed -->
            <div class="relevantInfo">
                <div>
                    <h2>最大風速</h2>
                    <h4>{{ tempWeeklyWeatherForecastData.weatherElement[4].time[0].elementValue[0].value }} m/s</h4>
                </div>
                <div class="relevantWDInfo">
                    <img src="@/assets/weatherIcon/arrow.png" alt="" class="arrow" id="arrow">
                    <p></p>
                </div>
            </div>

            <!-- other Relevant Infomation : CI -->
            <div class="relevantInfo">
                <div>
                    <h2>舒適度</h2>
                    <h4>{{ tempWeeklyWeatherForecastData.weatherElement[3].time[0].elementValue[0].value }} ~ {{
                        tempWeeklyWeatherForecastData.weatherElement[7].time[0].elementValue[0].value }}</h4>
                </div>
                <div class="relevantCIInfo">
                    <div class="CIText" id="down">
                        <p>{{ CIBar() }}</p>
                        <img src="@/assets/weatherIcon/down.png" alt="" class="down">
                    </div>
                    <div class="CIBar"></div>
                </div>

            </div>

            <!-- other Relevant Infomation : UV -->
            <div class="relevantInfo">
                <div>
                    <h2>紫外線指數</h2>
                    <h4>{{ tempWeeklyWeatherForecastData.weatherElement[9].time[0].elementValue[0].value }}</h4>

                </div>
                <div class="relevantUVInfo">
                    <div class="UVCircle">
                        <p id="UVLevel">{{
                            tempWeeklyWeatherForecastData.weatherElement[9].time[0].elementValue[1].value }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
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

import $ from "jquery";

export default ({
    data() {
        return {
            isLoading: false,
            fullPage: true,

            // tempThirtySixHrWeatherForecastData: {},
            // tempWeeklyWeatherForecastData: {},
            selectLocation: '桃園市',

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
        tempThirtySixHrWeatherForecastData() {
            console.log("computed tempThirtySixHrWeatherForecastData");
            return this.$store.state.tempThirtySixHrWeatherForecastData
        },
        tempWeeklyWeatherForecastData() {
            console.log("computed tempWeeklyWeatherForecastData");
            return this.$store.state.tempWeeklyWeatherForecastData
        }
    },
    methods: {
        weatherImgSwitch(event) {
            if (event == 1) {
                return this.weatherImg.sun
            } else if (event == 2 || event == 3) {
                return this.weatherImg.cloudyDay
            } else if (event == 4 || event == 5 || event == 6) {
                return this.weatherImg.clouds
            } else if (event == 7) {
                return this.weatherImg.cloud
            } else if (event == 8 || event == 9 || event == 10 || event == 11 || event == 12 || event == 13 || event == 14 || event == 31 || event == 32) {
                return this.weatherImg.raining
            } else if (event == 15 || event == 16 || event == 17 || event == 18 || event == 21 || event == 22 || event == 33 || event == 34 || event == 35 || event == 36) {
                return this.weatherImg.storm
            } else if (event == 19 || event == 20 || event == 29 || event == 30) {
                return this.weatherImg.rainDrops
            } else if (event == 23 || event == 42) {
                return this.weatherImg.snowing
            } else if (event == 24 || event == 25 || event == 26 || event == 27 || event == 28 || event == 37 || event == 38 || event == 39 || event == 41) {
                return this.weatherImg.fog
            }
        },
        RHCircle() {
            const vm = this;
            // const RH = document.getElementById('RHCircle');
            let RHValue = vm.tempWeeklyWeatherForecastData.weatherElement[2].time[0].elementValue[0].value;

            $('#RHCircle').css('--RHPercentage', `${RHValue}%`)
        },
        WDArrow() {
            const arrow = document.getElementById('arrow');
            const vm = this;

            let WDValue = function () {
                switch (vm.tempWeeklyWeatherForecastData.weatherElement[13].time[0].elementValue[0].value) {
                    case "偏北風":
                        return 0;
                        break;
                    case "東北風":
                        return 45;
                        break;
                    case "偏東風":
                        return 90;
                        break;
                    case "東南風":
                        return 135;
                        break;
                    case "偏南風":
                        return 180;
                        break;
                    case "西南風":
                        return 225;
                        break;
                    case "偏西風":
                        return 270;
                        break;
                    case "西北風":
                        return 315;
                        break;
                }
            }
            arrow?.style.setProperty('--arrowDeg', `${WDValue()}deg`);
        },
        CIBar() {
            const vm = this;

            const CIBar = document.getElementById('down');
            const minValue = Number(vm.tempWeeklyWeatherForecastData.weatherElement[3].time[0].elementValue[0].value);
            const maxValue = Number(vm.tempWeeklyWeatherForecastData.weatherElement[7].time[0].elementValue[0].value);
            let CIValue = (minValue + maxValue) / 2;
            let changePixel = CIValue * (170 / 40) - 85;

            $("#down").css('--down', `${changePixel}px`)

            if (CIValue <= 10) {
                $("#down").css('color', 'rgb(89, 0, 255)')
                return "非常寒冷";
            } else if (CIValue > 10 && CIValue <= 15) {
                $("#down").css('color', 'rgb(0, 153, 255)')
                return "寒冷";
            } else if (CIValue > 15 && CIValue <= 19) {
                $("#down").css('color', 'rgb(0, 247, 255)')
                return "稍有寒意";
            } else if (CIValue > 19 && CIValue <= 26) {
                $("#down").css('color', 'rgb(0, 255, 0)')
                return "舒適";
            } else if (CIValue > 26 && CIValue <= 30) {
                $("#down").css('color', 'orange')
                return "悶熱";
            } else if (CIValue > 30) {
                $("#down").css('color', 'red')
                return "易中暑";
            }
        },
        UVLevelColor() {
            const vm = this;
            const UVLevel = document.getElementById("UVLevel");
            const UVValue = vm.tempWeeklyWeatherForecastData.weatherElement[9].time[0].elementValue[1].value;
            switch (UVValue) {
                case "低量級":
                    UVLevel?.style.setProperty('color', 'green');
                    break;
                case "中量級":
                    UVLevel?.style.setProperty('color', 'yellow');
                    break;
                case "高量級":
                    UVLevel?.style.setProperty('color', 'orange');
                    break;
                case "過量級":
                    UVLevel?.style.setProperty('color', 'red');
                    break;
                case "危險級":
                    UVLevel?.style.setProperty('color', 'purple');
                    break;
            }
        },
        getWeek(e) {
            const date = new Date()
            let getday = date.getDay() + e

            if (getday > 7) {
                getday = getday - 7
            }

            let chinessNum = function () {
                switch (getday) {
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
            return `星期${chinessNum()}`
        }
    },
    watch: {
        selectLocation() {
            const vm = this;

            vm.$store.dispatch('filterWeatherForecastData', vm.selectLocation)
            // vm.$store.commit("FILTER36HRWEATHERFORECASTDATA", vm.selectLocation);
            // vm.$store.commit("FILTERWEEKLYWEATHERFORECASTDATA", vm.selectLocation);

            // vm.$store.state.thirtySixHrWeatherForecastData.filter(item => {
            //     if (item.locationName == vm.selectLocation) {
            //         vm.tempThirtySixHrWeatherForecastData = Object.assign({}, item);
            //     }
            // });

            // vm.$store.state.WeeklyWeatherForecastData.filter((item) => {
            //     if (item.locationName == vm.selectLocation) {
            //         vm.tempWeeklyWeatherForecastData = Object.assign({}, item);
            //     }
            // });
            vm.RHCircle();
            vm.WDArrow();
            vm.CIBar();
            vm.UVLevelColor();

            $('.weatherImg').on('load', function () {
                $('.weatherImg').hide(0).fadeIn(500);
                $('.weatherImg').off('load')
            })
        },
    },
    filters: {
        onlyShowHour(e) {
            return e.slice(11, 16)
        },
        onlyShowDate(e) {
            return `${e.slice(5, 7)}/${e.slice(8, 10)}`
        }
    },
    mounted() {
        console.log("mounted");

        this.RHCircle();
        this.WDArrow();
        this.CIBar();
        this.UVLevelColor();

        $('.weatherImg').on('load', function () {
            $('.weatherImg').hide(0).fadeIn(500);
            $('.weatherImg').off('load')
        })
    }
})
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
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 2fr 1fr 1fr;
    gap: 30px;

    padding: 20px;
}

.locationSelectBarContainer {
    grid-column: span 2;
    display: flex;
    gap: 30px;
}

.weatherTitleIcon {
    height: 50px;

}

.locationSelectBar {
    border: none;
    width: 20%;
    font-size: 30px;
    letter-spacing: 10px;
}

.thirty-six-hr-forecast {
    display: flex;
    justify-content: space-around;

    gap: 2rem;
    align-items: stretch;
    background-color: #146C94;
    padding: 2rem;
    border-radius: 15px;

    grid-column: span 2;
}

.thirty-six-hr-forecast-item {
    border-radius: 15px;
    background-color: #19A7CE;
    text-align: center;
    padding: 2rem 1rem;
    width: 250px;
}

.thirty-six-hr-forecast-item>.title {
    font-weight: bolder;
    font-size: 32px;
    letter-spacing: 2px;
    margin: 0;

    color: white;
}

.thirty-six-hr-forecast-item>.subtitle {
    font-size: 14px;
    margin-bottom: 0;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
}

.thirty-six-hr-forecast-item>.weatherImg {
    height: 100px;
    margin: 2rem 0;
}

.TEMPPoPflexbox {
    display: flex;
    justify-content: space-around;
}

.TEMPPoPflexbox>p {
    font-size: 17px;
    font-weight: bold;
    margin: 0;
    color: white;
}

.TEMPPoPflexbox>.weatherIcon {
    height: 25px;
}

.weekForecast {
    grid-area: 1/3/5/4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: #146C94;
    font-weight: bold;
}

.weekForecast>.weekForecastItemHeader {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    height: 5%;

    border: solid #146C94 3px;
    background-color: #146C94;
    color: white;
    border-radius: 10px;
    padding: 10px 1rem;
}

.weekForecast>.weekForecastItemHeader>.headerLine {
    width: 3px;
    height: 100%;
    background-color: white;
}

.weekForecast>.weekForecastItem {
    height: 13%;
    border: solid #146C94 3px;
    border-radius: 15px;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
}

.weekForecast>.weekForecastItem>.date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.weekForecast>.weekForecastItem>.line {
    background-color: #146C94;
    height: 100%;
    width: 3px;
}

.weekForecast>.weekForecastItem>.tempPart {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    text-align: center;
}

.weekForecast>.weekForecastItem>.tempPart>.day>.weatherImg,
.weekForecast>.weekForecastItem>.tempPart>.night>.weatherImg {
    height: 56px;
}

.weekForecast>.weekForecastItem>.tempPart>.day {
    padding: 0 1rem;
}

.weekForecast>.weekForecastItem>.tempPart>.night {
    padding: 0 1rem;
}

.relevantInfo {
    background-color: #146C94;
    border-radius: 15px;
    padding: 2rem 1.5rem;
    color: white;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
}

.relevantInfo>div>h2 {
    margin-bottom: 2rem;
    text-shadow: 2px 2px 2px black;
    letter-spacing: 2px;
}

.relevantInfo>div>h4 {
    letter-spacing: 2px;
}

.relevantInfo>.relevantRHInfo {
    display: flex;
    justify-content: center;
}

.relevantInfo>div>.RHCircle>p {
    font-size: 30px;
    margin: 0;
}

.relevantInfo>div>.RHCircle {
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    --RHPercentage: 0%;
}

.relevantInfo>div>.RHCircle::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(#19A7CE var(--RHPercentage), white 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
    mask: radial-gradient(farthest-side, #0000 80%, #000 20%);

    /* transition: background 3s ease; */
    /* transition-property: background;
    transition-duration: 3s; */
}

.relevantInfo>.relevantWDInfo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.relevantInfo>.relevantWDInfo>.arrow {
    --arrowDeg: 0deg;

    height: 100px;
    transform: rotate(var(--arrowDeg));
}

.relevantInfo>.relevantCIInfo {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
}

.relevantInfo>.relevantCIInfo>.CIText {
    --down: -85px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    color: #000;

    position: relative;
    left: var(--down);
}

.relevantInfo>.relevantCIInfo>.CIText>p {
    margin: 0;
    font-weight: bold;
}

.relevantInfo>.relevantCIInfo>.CIText>.down {
    width: 20px;
}

.relevantInfo>.relevantCIInfo>.CIBar {
    background: linear-gradient(to right, rgb(38, 0, 128), blue, rgb(0, 128, 128), green, yellow, red);
    width: 100%;
    height: 20px;
}

.relevantInfo>.relevantUVInfo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.relevantInfo>.relevantUVInfo>.UVCircle {
    height: 100%;
    aspect-ratio: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
}

.relevantInfo>.relevantUVInfo>.UVCircle::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(orange, red, purple 35%, rgba(255, 255, 255, 0) 35% 65%, green 65%, green, rgb(255, 255, 0), orange);
    -webkit-mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
    mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
}

.relevantInfo>.relevantUVInfo>.UVCircle>p {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
}</style>

