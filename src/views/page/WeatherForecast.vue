<template>
    <div>

        <div class="container">
            <select class="locationSelectBar" v-model="selectLocation">
                <option value="">請選擇地區</option>
                <option :value="item" v-for="item in $store.state.locationArray" :key="item">{{ item }}</option>
            </select>
            <h1 class="locationTitle"><img src="@/assets/weatherIcon/placeholder.png" alt="" class="weatherIcon">{{
                thirtySixHrWeatherForecastData[0].locationName }}</h1>
            <div class="thirty-six-hr-forecast">
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[0].startTime.slice(11, 16) == '12:00'">
                        今日白天</p>
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[0].startTime.slice(11, 16) == '18:00'">
                        今晚明晨</p>
                    <p class="subtitle">{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[0].startTime |
                        onlyShowHour }} ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[0].endTime | onlyShowHour }}</p>
                    <p>{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[0].parameter.parameterName }}</p>
                    <span><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[1].time[0].parameter.parameterName }}%</span>
                    <span><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[2].time[0].parameter.parameterName }}°C ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[4].time[0].parameter.parameterName }}°C
                    </span>
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[1].startTime.slice(11, 16) == '18:00'">
                        今晚明晨</p>
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[1].startTime.slice(11, 16) == '06:00'">
                        明日白天</p>

                    <p class="subtitle">{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[1].startTime |
                        onlyShowHour }} ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[1].endTime | onlyShowHour }}</p>

                    <p>{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[1].parameter.parameterName }}</p>

                    <span><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[1].time[1].parameter.parameterName }}%</span>

                    <span><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[2].time[1].parameter.parameterName }}°C ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[4].time[1].parameter.parameterName }}°C
                    </span>
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[2].startTime.slice(11, 16) == '06:00'">
                        明日白天</p>
                    <p class="title"
                        v-if="thirtySixHrWeatherForecastData[0].weatherElement[0].time[2].startTime.slice(11, 16) == '18:00'">
                        明日晚上</p>

                    <p class="subtitle">{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[2].startTime |
                        onlyShowHour }} ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[2].endTime | onlyShowHour }}</p>

                    <p>{{ thirtySixHrWeatherForecastData[0].weatherElement[0].time[2].parameter.parameterName }}</p>

                    <span><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[1].time[2].parameter.parameterName }}%</span>

                    <span><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{
                        thirtySixHrWeatherForecastData[0].weatherElement[2].time[2].parameter.parameterName }}°C ~
                        {{ thirtySixHrWeatherForecastData[0].weatherElement[4].time[2].parameter.parameterName }}°C
                    </span>
                </div>
            </div>
            <div class="weekForecast">

            </div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </div>
    </div>
</template>


<script>
export default ({
    data() {
        return {
            thirtySixHrWeatherForecastData: [],
            selectLocation: '',
        }
    },
    created() {
        this.thirtySixHrWeatherForecastData = this.$store.state.thirtySixHrWeatherForecastData;
    },
    filters: {
        onlyShowHour(e) {
            return e.slice(11, 16)
        }
    },

})
</script>


<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto 2fr 1fr 1fr;
    gap: 30px;

    padding: 20px;
}

.locationSelectBar {
    grid-column: span 3;
    height: 2rem;
}

.locationTitle {
    grid-column: span 2;
    text-align: start;
    margin: 0;
    letter-spacing: 5px;
}

.thirty-six-hr-forecast {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    background-color: #146C94;
    padding: 2rem;
    border-radius: 15px;

    grid-column: span 2;
}

.thirty-six-hr-forecast-item {
    border-radius: 15px;
    background-color: #B0DAFF;
    text-align: center;
    padding: 1rem;
    width: 250px;
}

.thirty-six-hr-forecast-item>span {
    margin: 2px 0;
    font-size: 15px;
}

.thirty-six-hr-forecast-item>.title {
    font-weight: bolder;
    font-size: 25px;
    letter-spacing: 2px;
    margin: 0;
}

.thirty-six-hr-forecast-item>.subtitle {
    font-size: 10px;
    margin-bottom: 0;
    color: rgb(129, 129, 129);
}

.thirty-six-hr-forecast-item > span {
    margin: 5px;
    padding: 5px;
}
.thirty-six-hr-forecast-item > span >.weatherIcon {
    height: 20px;
    margin-right: 5px;
}

.weekForecast {
    grid-area: 2/3/6/4;
}


h1 > .weatherIcon {
    height: 50px;
    margin: 0;
    margin-right: 30px;
}
</style>

