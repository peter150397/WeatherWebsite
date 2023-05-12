<template>
    <div>
        <h1 class="locationTitle">{{ testData.records.location[0].locationName }}</h1>
        <div class="container">
            <div class="thirty-six-hr-forecast">
                <div class="thirty-six-hr-forecast-item">
                    <p class="title">今晚</p>
                    <p class="subtitle">{{ testData.records.location[0].weatherElement[0].time[0].startTime | onlyShowHour }} ~
                        {{ testData.records.location[0].weatherElement[0].time[0].endTime | onlyShowHour }}</p>
                    <p>{{ testData.records.location[0].weatherElement[0].time[0].parameter.parameterName }}</p>
                    <p><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[1].time[0].parameter.parameterName }}%</p>
                    <p><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[2].time[0].parameter.parameterName }}°C ~ 
                        {{ testData.records.location[0].weatherElement[4].time[0].parameter.parameterName }}°C
                    </p> 
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title">明早</p>
                    <p class="subtitle">{{ testData.records.location[0].weatherElement[0].time[1].startTime | onlyShowHour }} ~
                        {{ testData.records.location[0].weatherElement[0].time[1].endTime | onlyShowHour }}</p>
                    <p>{{ testData.records.location[0].weatherElement[0].time[1].parameter.parameterName }}</p>
                    <p><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[1].time[1].parameter.parameterName }}%</p>
                    <p><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[2].time[1].parameter.parameterName }}°C ~ 
                        {{ testData.records.location[0].weatherElement[4].time[1].parameter.parameterName }}°C
                    </p>
                </div>
                <div class="thirty-six-hr-forecast-item">
                    <p class="title">明晚</p>
                    <p class="subtitle">{{ testData.records.location[0].weatherElement[0].time[2].startTime | onlyShowHour }} ~
                        {{ testData.records.location[0].weatherElement[0].time[2].endTime | onlyShowHour }}</p>
                    <p>{{ testData.records.location[0].weatherElement[0].time[2].parameter.parameterName }}</p>
                    <p><img src="@/assets/weatherIcon/humidity.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[1].time[2].parameter.parameterName }}%</p>
                    <p><img src="@/assets/weatherIcon/temperature.png" alt="" class="weatherIcon">{{ testData.records.location[0].weatherElement[2].time[2].parameter.parameterName }}°C ~ 
                        {{ testData.records.location[0].weatherElement[4].time[2].parameter.parameterName }}°C
                    </p>
                </div>
            </div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </div>
    </div>
</template>

<style scoped>

.locationTitle{
    text-align: center;
    margin: 20px 0 0;

}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    gap: 30px;

    padding: 20px;
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
    padding: 2rem;
    width: 220px;
}

.thirty-six-hr-forecast-item > p{
    margin: 2px 0;
    letter-spacing: 1px;
}

.thirty-six-hr-forecast-item > .title{
    font-weight: bolder;
    font-size: 20px;
}
.thirty-six-hr-forecast-item > .subtitle{
    font-size: 10px;
    margin-bottom: 10px;
    color: rgb(129, 129, 129);
}
.weatherIcon{
    height: 18px;
    margin: 5px 10px;
}

</style>

<script>
export default ({
    data() {
        return {
            testData: {
                "success": "true",
                "result": {
                },
                "records": {
                    "datasetDescription": "三十六小時天氣預報",
                    "location": [
                        {
                            "locationName": "桃園市",
                            "weatherElement": [
                                {
                                    "elementName": "Wx",
                                    "time": [
                                        {
                                            "startTime": "2023-05-12 18:00:00",
                                            "endTime": "2023-05-13 06:00:00",
                                            "parameter": {
                                                "parameterName": "多雲時陰短暫陣雨",
                                                "parameterValue": "9"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 06:00:00",
                                            "endTime": "2023-05-13 18:00:00",
                                            "parameter": {
                                                "parameterName": "陰天",
                                                "parameterValue": "7"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 18:00:00",
                                            "endTime": "2023-05-14 06:00:00",
                                            "parameter": {
                                                "parameterName": "陰短暫陣雨",
                                                "parameterValue": "11"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "elementName": "PoP",
                                    "time": [
                                        {
                                            "startTime": "2023-05-12 18:00:00",
                                            "endTime": "2023-05-13 06:00:00",
                                            "parameter": {
                                                "parameterName": "30",
                                                "parameterUnit": "百分比"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 06:00:00",
                                            "endTime": "2023-05-13 18:00:00",
                                            "parameter": {
                                                "parameterName": "20",
                                                "parameterUnit": "百分比"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 18:00:00",
                                            "endTime": "2023-05-14 06:00:00",
                                            "parameter": {
                                                "parameterName": "30",
                                                "parameterUnit": "百分比"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "elementName": "MinT",
                                    "time": [
                                        {
                                            "startTime": "2023-05-12 18:00:00",
                                            "endTime": "2023-05-13 06:00:00",
                                            "parameter": {
                                                "parameterName": "22",
                                                "parameterUnit": "C"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 06:00:00",
                                            "endTime": "2023-05-13 18:00:00",
                                            "parameter": {
                                                "parameterName": "22",
                                                "parameterUnit": "C"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 18:00:00",
                                            "endTime": "2023-05-14 06:00:00",
                                            "parameter": {
                                                "parameterName": "22",
                                                "parameterUnit": "C"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "elementName": "CI",
                                    "time": [
                                        {
                                            "startTime": "2023-05-12 18:00:00",
                                            "endTime": "2023-05-13 06:00:00",
                                            "parameter": {
                                                "parameterName": "舒適"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 06:00:00",
                                            "endTime": "2023-05-13 18:00:00",
                                            "parameter": {
                                                "parameterName": "舒適"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 18:00:00",
                                            "endTime": "2023-05-14 06:00:00",
                                            "parameter": {
                                                "parameterName": "舒適"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "elementName": "MaxT",
                                    "time": [
                                        {
                                            "startTime": "2023-05-12 18:00:00",
                                            "endTime": "2023-05-13 06:00:00",
                                            "parameter": {
                                                "parameterName": "25",
                                                "parameterUnit": "C"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 06:00:00",
                                            "endTime": "2023-05-13 18:00:00",
                                            "parameter": {
                                                "parameterName": "26",
                                                "parameterUnit": "C"
                                            }
                                        },
                                        {
                                            "startTime": "2023-05-13 18:00:00",
                                            "endTime": "2023-05-14 06:00:00",
                                            "parameter": {
                                                "parameterName": "24",
                                                "parameterUnit": "C"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    },
    filters: {
        onlyShowHour(e) {
            return e.slice(11,16)
        }
    }
})
</script>
