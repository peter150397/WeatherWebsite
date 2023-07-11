<template>
    <div class="weatherForecastContainer">
        <div class="locationSelectBarContainer">
            <img src="@/assets/weatherIcon/placeholder.png" alt="">
            <select v-model="selectLocation">
                <option :value="item" v-for="item in $store.state.locationArray" :key="item">{{ item }}</option>
            </select>
        </div>

        <!-- 36HR Forecast -->
        <div class="thirtySixHrForecastContainer">
            <div class="thirtySixHrForecastItem">
                <h2>
                    {{ changeTitle(temp36HrData.weatherElement[0].time[0].startTime.slice(11, 16), true) }}
                </h2>
                <p>
                    {{ temp36HrData.weatherElement[0].time[0].startTime | onlyShowHour }} ~
                    {{ temp36HrData.weatherElement[0].time[0].endTime | onlyShowHour }}
                </p>

                <img :src="weatherImgSwitch(temp36HrData.weatherElement[0].time[0].parameter.parameterValue)" alt=""
                    class="weatherImg" :title="temp36HrData.weatherElement[0].time[0].parameter.parameterName">

                <div class="TEMPPoPflexbox">
                    <div>
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            temp36HrData.weatherElement[1].time[0].parameter.parameterName }}%</p>
                    </div>
                    <div>
                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>
                            {{ temp36HrData.weatherElement[2].time[0].parameter.parameterName }}°C~
                            {{ temp36HrData.weatherElement[4].time[0].parameter.parameterName }}°C
                        </p>
                    </div>

                </div>
            </div>
            <div class="thirtySixHrForecastItem">
                <h2>
                    {{ changeTitle(temp36HrData.weatherElement[0].time[1].startTime.slice(11, 16)) }}
                </h2>

                <p>
                    {{ temp36HrData.weatherElement[0].time[1].startTime | onlyShowHour }} ~
                    {{ temp36HrData.weatherElement[0].time[1].endTime | onlyShowHour }}
                </p>

                <img :src="weatherImgSwitch(temp36HrData.weatherElement[0].time[1].parameter.parameterValue)" alt=""
                    class="weatherImg" :title="temp36HrData.weatherElement[0].time[1].parameter.parameterName">

                <div class="TEMPPoPflexbox">
                    <div>
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            temp36HrData.weatherElement[1].time[1].parameter.parameterName }}%</p>
                    </div>
                    <div>
                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>
                            {{ temp36HrData.weatherElement[2].time[1].parameter.parameterName }}°C~
                            {{ temp36HrData.weatherElement[4].time[1].parameter.parameterName }}°C
                        </p>
                    </div>
                </div>
            </div>
            <div class="thirtySixHrForecastItem">
                <h2>
                    {{ changeTitle(temp36HrData.weatherElement[0].time[2].startTime.slice(11, 16)) }}
                </h2>

                <p>
                    {{ temp36HrData.weatherElement[0].time[2].startTime | onlyShowHour }} ~
                    {{ temp36HrData.weatherElement[0].time[2].endTime | onlyShowHour }}
                </p>

                <img :src="weatherImgSwitch(temp36HrData.weatherElement[0].time[2].parameter.parameterValue)" alt=""
                    class="weatherImg" :title="temp36HrData.weatherElement[0].time[2].parameter.parameterName">

                <div class="TEMPPoPflexbox">
                    <div>
                        <img src="@/assets/weatherIcon/umbrella.png" alt="" class="weatherIcon">
                        <p>{{
                            temp36HrData.weatherElement[1].time[2].parameter.parameterName }}%</p>
                    </div>

                    <div>
                        <img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">
                        <p>
                            {{ temp36HrData.weatherElement[2].time[2].parameter.parameterName }}°C~
                            {{ temp36HrData.weatherElement[4].time[2].parameter.parameterName }}°C
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="weekForecastHeader weekForecastDefault">
            <div>
                <img src="@/assets/weatherIcon/date.png" alt="">
            </div>
            <div></div>
            <div>
                <img src="@/assets/weatherIcon/sun.png" alt="">
                <img src="@/assets/weatherIcon/moon.png" alt="">
            </div>
        </div>

        <!-- week Forecast -->
        <div class="weekForecastContainer">
            <div class="weekForecastItem weekForecastDefault" v-for="item in 6" :key="item">
                <div>
                    <h5>{{ getWeek(item) }}</h5>
                    <h5>
                        {{ tempWeeklyData.weatherElement[8].time[item * 2 -
                            switchWeeklyWeatherTime(tempWeeklyData.weatherElement[8].time[0].endTime)].startTime |
                            onlyShowDate }}
                    </h5>
                </div>
                <div class="weekForecastLine"></div>
                <div>
                    <div>
                        <img :src="weatherImgSwitch(tempWeeklyData.weatherElement[6].time[item * 2].elementValue[1].value)"
                            alt="" :title="tempWeeklyData.weatherElement[6].time[item * 2].elementValue[0].value"
                            class="weatherImg">
                        <p>
                            {{ tempWeeklyData.weatherElement[8].time[item * 2 -
                                switchWeeklyWeatherTime(tempWeeklyData.weatherElement[8].time[0].endTime)].elementValue[0].value
                            }}°C
                            ~
                            {{ tempWeeklyData.weatherElement[12].time[item * 2 -
                                switchWeeklyWeatherTime(tempWeeklyData.weatherElement[8].time[0].endTime)].elementValue[0].value
                            }}°C
                        </p>
                    </div>
                    <div>
                        <img :src="weatherImgSwitch(tempWeeklyData.weatherElement[6].time[item * 2 + 1].elementValue[1].value)"
                            alt="" :title="tempWeeklyData.weatherElement[6].time[item * 2 + 1].elementValue[0].value"
                            class="weatherImg">
                        <p>
                            {{ tempWeeklyData.weatherElement[8].time[item * 2 -
                                switchWeeklyWeatherTime(tempWeeklyData.weatherElement[8].time[0].endTime) +
                                1].elementValue[0].value }}°C~
                            {{ tempWeeklyData.weatherElement[12].time[item * 2 -
                                switchWeeklyWeatherTime(tempWeeklyData.weatherElement[8].time[0].endTime) +
                                1].elementValue[0].value }}°C
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <!-- other Relevant Infomation : RH -->
        <div class="relevantInfo">
            <div class="relevantInfoText">
                <h2>相對溼度</h2>
                <h4>{{ tempWeeklyData.weatherElement[2].time[0].elementValue[0].value }} %</h4>
            </div>
            <div class="relevantInfoImg">
                <div class="RHCircle" id="RHCircle">
                    <h2>無</h2>
                </div>
            </div>
        </div>

        <!-- other Relevant Infomation : Wind Speed -->
        <div class="relevantInfo">
            <div class="relevantInfoText">
                <h2>最大風速</h2>
                <h4>{{ tempWeeklyData.weatherElement[4].time[0].elementValue[0].value }} m/s</h4>
            </div>
            <div class="relevantInfoImg">
                <img src="@/assets/weatherIcon/arrow.png" alt="" id="windDirectionarrow">
                <p></p>
            </div>
        </div>

        <!-- other Relevant Infomation : CI -->
        <div class="relevantInfo">
            <div class="relevantInfoText">
                <h2>舒適度</h2>
                <h4>{{ tempWeeklyData.weatherElement[3].time[0].elementValue[0].value }} ~ {{
                    tempWeeklyData.weatherElement[7].time[0].elementValue[0].value }}</h4>
            </div>
            <div class="CIInfo relevantInfoImg">
                <div id="CIDownArrow">
                    <p>無資料</p>
                    <img src="@/assets/weatherIcon/down.png" alt="" class="down">
                </div>
                <div class="CIBar"></div>
            </div>
        </div>

        <!-- other Relevant Infomation : UV -->
        <div class="relevantInfo">
            <div class="relevantInfoText">
                <h2>紫外線</h2>
                <h4>{{ tempWeeklyData.weatherElement[9].time[0].elementValue[0].value }}</h4>

            </div>
            <div class="relevantUVInfo relevantInfoImg">
                <div class="UVCircle">
                    <h4 id="UVLevel"></h4>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import $ from "jquery";

export default {
    data() {
        return {
            selectLocation: "桃園市",

            weatherImg: {
                cloud: require("@/assets/weather/cloud.png"),
                clouds: require("@/assets/weather/clouds.png"),
                cloudyDay: require("@/assets/weather/cloudy-day.png"),
                fog: require("@/assets/weather/fog.png"),
                rainDrops: require("@/assets/weather/rain-drops.png"),
                raining: require("@/assets/weather/raining.png"),
                snowing: require("@/assets/weather/snowing.png"),
                storm: require("@/assets/weather/storm.png"),
                sun: require("@/assets/weather/sun.png"),
                wind: require("@/assets/weather/wind.png"),
            },
        }
    },
    computed: {
        temp36HrData() {
            const weatherArray = this.$store.state.thirtySixHrWeatherForecastData

            for (let i = 0; i < weatherArray.length; i++) {
                if (weatherArray[i].locationName == this.selectLocation) {
                    return weatherArray[i];
                }
            }
        },
        tempWeeklyData() {
            const weatherArray = this.$store.state.WeeklyWeatherForecastData

            for (let i = 0; i < weatherArray.length; i++) {
                if (weatherArray[i].locationName === this.selectLocation) {
                    setTimeout(() => {
                        this.RHCircle(weatherArray[i]);
                        this.WDArrow(weatherArray[i]);
                        this.CIBar(weatherArray[i]);
                        this.UVLevelColor(weatherArray[i]);
                        this.weatherImgFadeIn();
                    }, 0)

                    return weatherArray[i];
                }
            }
        }
    },
    methods: {
        changeTitle(time, isToday = false) {
            if (time == '06:00') {
                if (isToday) {
                    return '今天早上'
                } else {
                    return '明天早上'
                }
            } else if (time == '12:00') {
                return '今日下午'
            } else if (time == '18:00' || time == '00:00') {
                return '今晚明晨'
            }
        },
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
        switchWeeklyWeatherTime(time) {
            if (time.slice(11, 16) == '06:00') {
                return 1
            } else {
                return 0
            }
        },
        RHCircle(weather) {
            let RHValue = weather.weatherElement[2].time[0].elementValue[0].value;

            $('#RHCircle').css('--RHPercentage', `${RHValue}%`)

            if (RHValue <= 33 && RHValue > 0) {
                $('#RHCircle > h2').text('低')
            } else if (RHValue <= 66 && RHValue > 33) {
                $('#RHCircle > h2').text('中')
            } else if (RHValue > 66) {
                $('#RHCircle > h2').text('高')
            }
        },
        WDArrow(weather) {
            let WDValue = function () {
                switch (weather.weatherElement[13].time[0].elementValue[0].value) {
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

            $("#windDirectionarrow").animate({
                rotate: `${WDValue()}deg`
            }, 500)
        },
        CIBar(weather) {
            const minValue = Number(weather.weatherElement[3].time[0].elementValue[0].value);
            const maxValue = Number(weather.weatherElement[7].time[0].elementValue[0].value);

            let CIValue = (minValue + maxValue) / 2;

            setTimeout(() => {
                let clientWidth = document.querySelector('.CIBar').clientWidth;

                let changePixel = CIValue * (clientWidth / 40) - (clientWidth / 2);
                $("#CIDownArrow").animate({
                    left: `${changePixel}px`
                }, 500)
            }, 1)


            if (CIValue <= 10) {
                $("#CIDownArrow").css('color', 'rgb(89, 0, 255)')
                $("#CIDownArrow > p").text('非常寒冷')
            } else if (CIValue > 10 && CIValue <= 15) {
                $("#CIDownArrow").css('color', 'rgb(0, 153, 255)')
                $("#CIDownArrow > p").text('寒冷')
            } else if (CIValue > 15 && CIValue <= 19) {
                $("#CIDownArrow").css('color', 'rgb(0, 247, 255)')
                $("#CIDownArrow > p").text('稍有寒意')
            } else if (CIValue > 19 && CIValue <= 26) {
                $("#CIDownArrow").css('color', 'rgb(0, 255, 0)')
                $("#CIDownArrow > p").text('舒適')
            } else if (CIValue > 26 && CIValue <= 30) {
                $("#CIDownArrow").css('color', 'orange')
                $("#CIDownArrow > p").text('悶熱')
            } else if (CIValue > 30) {
                $("#CIDownArrow").css('color', 'red')
                $("#CIDownArrow > p").text('易中暑')
            }
        },
        UVLevelColor(weather) {
            const UVValue = weather.weatherElement[9].time[0].elementValue[1].value;
            switch (UVValue) {
                case "低量級":
                    $("#UVLevel").css('color', 'green')
                    $("#UVLevel").text(UVValue)
                    break;
                case "中量級":
                    $("#UVLevel").css('color', 'yellow')
                    $("#UVLevel").text(UVValue)
                    break;
                case "高量級":
                    $("#UVLevel").css('color', 'orange')
                    $("#UVLevel").text(UVValue)
                    break;
                case "過量級":
                    $("#UVLevel").css('color', 'red')
                    $("#UVLevel").text(UVValue)
                    break;
                case "危險級":
                    $("#UVLevel").css('color', 'purple')
                    $("#UVLevel").text(UVValue)
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
        },
        weatherImgFadeIn() {
            $('.weatherImg').hide(0).fadeIn(500);
        }
    },
    filters: {
        onlyShowHour(e) {
            return e.slice(11, 16)
        },
        onlyShowDate(e) {
            return `${e.slice(5, 7)}/${e.slice(8, 10)}`
        }
    },
}
</script>


<style scoped>
h2 {
    font-size: 30px;
    letter-spacing: 2px;
}

h4 {
    font-size: 24px;
}

h5 {
    font-size: 20px;
}

p{
    text-align: center;
}

.weatherForecastContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px auto 1fr 1fr;
    gap: 2rem;
    background-color: #FEFF86;

    padding: 4rem 10vw;
}

.weatherForecastContainer>* {
    border-radius: 15px;
}

.locationSelectBarContainer {
    grid-column: span 2;
    display: flex;
    gap: 30px;
}

.locationSelectBarContainer>img {
    height: 50px;
    margin: 0;
}

.locationSelectBarContainer>select {
    font-size: 30px;
    letter-spacing: 10px;
    background-color: #FEFF86;
}

.thirtySixHrForecastContainer,
.relevantInfo {
    display: flex;
    justify-content: space-between;
    background-color: #146C94;
    padding: 2rem;
    color: #FEFF86;
    letter-spacing: 1px;
}

.thirtySixHrForecastContainer {
    grid-column: span 2;
}

.thirtySixHrForecastItem {
    border-radius: inherit;
    background-color: #19A7CE;
    padding: 2rem 1rem;
    width: 30%;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.thirtySixHrForecastItem>.weatherImg {
    width: 50%;
    margin: 1vw 0;
}

.TEMPPoPflexbox {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.TEMPPoPflexbox>* {
    display: flex;
    align-items: center;
    gap: 5px;
    letter-spacing: 0;
}

.TEMPPoPflexbox .weatherIcon {
    height: 24px;
}

.weekForecastDefault {
    display: flex;
    justify-content: space-between;
    border: solid #146C94 3px;
}

.weekForecastDefault>div:nth-child(1) {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.weekForecastDefault>div:nth-child(2) {
    width: 3px;
    height: 100%;
}

.weekForecastDefault>div:nth-child(3) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75%;
}

.weekForecastHeader {
    grid-area: 1/3/2/4;

    background-color: #146C94;
    padding: .5rem;
}

.weekForecastHeader>div:nth-child(2) {
    background-color: #FEFF86;
}

.weekForecastHeader img {
    height: 20px;
}

.weekForecastContainer {
    grid-area: 2/3/5/4;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;

    color: #146C94;
    font-weight: 900;
}

.weekForecastItem {
    padding: 1rem .5rem;
    border-radius: inherit;
}

.weekForecastItem:hover {
    background-color: #146C94;
    color: #FEFF86;
}

.weekForecastItem:hover .weekForecastLine {
    background-color: #FEFF86;
}

.weekForecastItem>div:nth-child(1) {
    flex-direction: column;
    gap: 5px;
}

.weekForecastItem>div:nth-child(2) {
    background-color: #146C94;
}

.weekForecastItem img {
    height: 56px;
}

.relevantInfo>* {
    width: 45%;
}

.relevantInfo>.relevantInfoText {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.relevantInfo>.relevantInfoImg {
    display: flex;
    justify-content: center;
    align-items: center;
}

.RHCircle {
    height: 100%;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.relevantInfo .RHCircle::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(#19A7CE var(--RHPercentage, 0), #FEFF86 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
    mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
}

#windDirectionarrow {
    width: 75%;
    transform: rotate(0deg);
}

.CIInfo {
    gap: 10px;
    flex-direction: column;
}

#CIDownArrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    position: relative;
    left: 0px;
}

#CIDownArrow>img {
    width: 20px;
}

.CIBar {
    background: linear-gradient(to right, rgb(38, 0, 128), blue, rgb(0, 128, 128), green, yellow, red);
    width: 100%;
    height: 15px;
}

.UVCircle {
    height: 100%;
    aspect-ratio: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
}

.relevantInfo>.relevantInfoImg>.UVCircle::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(orange, red, purple 35%, rgba(255, 255, 255, 0) 35% 65%, green 65%, green, rgb(255, 255, 0), orange);
    -webkit-mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
    mask: radial-gradient(farthest-side, #0000 80%, #000 20%);
}

#UVLevel {
    color: white;
    transition: color 1s 0s;
}


@media (max-width:991px) {
    h2 {
        font-size: 4vw;
        letter-spacing: 0px;
    }

    h4 {
        font-size: 3.5vw;
    }

    h5 {
        font-size: 4vw;
    }
    p{
        font-size: 2vw;
    }

    .weatherForecastContainer {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 1fr 1fr;
        gap: 1rem;
    }

    .locationSelectBarContainer {
        grid-column: span 2;
        justify-content: center;
        gap: 10px;
    }

    .thirtySixHrForecastContainer {
        padding: 1rem;
    }
    .thirtySixHrForecastContainer > *{
        width: 32%;
        padding: 1rem;
        gap: 10px;
    }

    .thirtySixHrForecastItem>.weatherImg {
        height: auto;
        width: 100%;
        margin: 0;
    }

    .TEMPPoPflexbox {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .weekForecastHeader {
        grid-column: span 2;
        grid-area: 5/1/6/3;
    }

    .weekForecastContainer {
        grid-area: 6/1/7/3;
        gap: 1rem;
    }

    .weekForecastItem img {
        height: 90px;
    }

    .relevantInfo {
        padding: 1rem;
    }

    .relevantInfo>* {
        width: 50%;
    }

    .RHCircle , .UVCircle{
        height: auto;
        width: 100%;
    }
}

@media (max-width:1235px) {
    .weatherForecastContainer {
        padding: 2rem 5vw;
    }
}</style>

