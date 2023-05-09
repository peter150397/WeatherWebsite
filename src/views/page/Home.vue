<template>
    <div>
        <div class="flex-box">
            <img src="../../assets/Taiwan.jpg" alt="" class="Taiwan-img">
            <button class="location Keelung" @click="selectLocation = '基隆市';">
                <p>基隆市</p>
                <p>22.4°C</p>
            </button>

            <button class="location Taipei" @click="selectLocation = '臺北市';">
                <p>臺北市</p>
                <p>22.4°C</p>
            </button>
            <button class="location NewTaipei" @click="selectLocation = '新北市'">
                <p>新北市</p>
                <p>22.4°C</p>
            </button>
            <button class="location Taoyuan" @click="selectLocation = '桃園市';">
                <p>桃園市</p>
                <p>22.4°C</p>
            </button>
            <button class="location HsinchuCity" @click="selectLocation = '新竹市';">
                <p>新竹市</p>
                <p>22.4°C</p>
            </button>
            <button class="location HsinchuCountry" @click="selectLocation = '新竹縣';">
                <p>新竹縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Miaoli" @click="selectLocation = '苗栗縣';">
                <p>苗栗縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Taichung" @click="selectLocation = '臺中市';">
                <p>臺中市</p>
                <p>22.4°C</p>
            </button>
            <button class="location Nantou" @click="selectLocation = '南投縣';">
                <p>南投縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Changhua" @click="selectLocation = '彰化縣';">
                <p>彰化縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Yunlin" @click="selectLocation = '雲林縣';">
                <p>雲林縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location ChiayiCity" @click="selectLocation = '嘉義市';">
                <p>嘉義市</p>
                <p>22.4°C</p>
            </button>
            <button class="location ChiayiCountry" @click="selectLocation = '嘉義縣';">
                <p>嘉義縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Tainan" @click="selectLocation = '臺南市';">
                <p>臺南市</p>
                <p>22.4°C</p>
            </button>
            <button class="location Kaohsiung" @click="selectLocation = '高雄市';">
                <p>高雄市</p>
                <p>22.4°C</p>
            </button>
            <button class="location Pingtung" @click="selectLocation = '屏東縣';">
                <p>屏東縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Taitung" @click="selectLocation = '臺東縣';">
                <p>臺東縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Hualien" @click="selectLocation = '花蓮縣';">
                <p>花蓮縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Yilan" @click="selectLocation = '宜蘭縣';">
                <p>宜蘭縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Penghu" @click="selectLocation = '澎湖縣';">
                <p>澎湖縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Kinmen" @click="selectLocation = '金門縣';">
                <p>金門縣</p>
                <p>22.4°C</p>
            </button>
            <button class="location Lianjiang" @click="selectLocation = '連江縣';">
                <p>連江縣</p>
                <p>22.4°C</p>
            </button>
        </div>
        <div class="table-bg">
            <div class="table-div" v-if="selectLocation">
                <table>
                    <thead>
                        <th>縣市</th>
                        <th>鄉鎮市</th>
                        <th>測站位置</th>
                        <th>觀測時間</th>
                        <th>溫度</th>
                        <th>相對溼度</th>
                        <th>風速</th>
                        <th>天氣</th>
                    </thead>
                    <tbody v-for="item in filterData" :key="item.lat">
                        <tr>
                            <td>{{ item.parameter[0].parameterValue }}</td>
                            <td>{{ item.parameter[2].parameterValue }}</td>
                            <td>{{ item.locationName }}</td>
                            <td>{{ item.time.obsTime }}</td>
                            <td>{{ item.weatherElement[3].elementValue }} °C</td>
                            <td>{{ item.weatherElement[4].elementValue * 100 }}%</td>
                            <td>{{ item.weatherElement[2].elementValue }} m/s</td>
                            <td>{{ item.weatherElement[14].elementValue }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectLocation: '',
            filterData: [],
        }
    },
    watch: {
        selectLocation() {
            const vm = this;
            vm.filterData = [];

            vm.$store.state.weatherData.forEach((item) => {
                if (vm.selectLocation == item.parameter[0].parameterValue) {
                    vm.filterData.push(item)
                }
            })
        }
    },
}
</script>

<style>
.flex-box {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 2rem 0;
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

    text-align: center;
}

.location:hover {
    background-color: #146C94;
    color: #B0DAFF;
}

.Keelung {
    right: 33%;
    top: 0.5%;
}

.Taipei {
    right: 39%;
    top: -1%;
}

.NewTaipei {
    right: 30%;
    top: 10%;
}

.Taoyuan {
    right: 44%;

}

.HsinchuCity {
    right: 47%;
    top: 9%;
}

.HsinchuCountry {
    right: 41%;
    top: 15%;
}

.Miaoli {
    right: 51.5%;
    top: 15%;
}

.Taichung {
    right: 53.5%;
    top: 24%;
}

.Nantou {
    right: 44%;
    top: 39%;
}

.Changhua {
    right: 54.7%;
    top: 33%;
}

.Yunlin {
    right: 56.5%;
    top: 43%;
}

.ChiayiCity {
    right: 47%;
    top: 52%;
}

.ChiayiCountry {
    right: 57%;
    top: 52%;
}

.Tainan {
    right: 57.5%;
    top: 63%;
}

.Kaohsiung {
    right: 55%;
    top: 74%;
}

.Pingtung {
    right: 51%;
    top: 85%;
}

.Taitung {
    right: 40%;
    top: 78%;
}

.Hualien {
    right: 34%;
    top: 41%;
}

.Yilan {
    right: 31%;
    top: 22%;
}

.Penghu {
    left: 30%;
    top: 48%;
}

.Kinmen {
    left: 30%;
    top: 29%;
}

.Lianjiang {
    left: 30%;
    top: 13%;
}


.table-bg {
    background-color: #146C94;
    padding: 3rem 20%;
}
.table-div{
    background-color: white;
    border-radius: 20px;
    padding: 2rem;
}

table {
    margin: 0 auto;
    border-spacing: 20px;
    border-collapse: collapse;
}

th , td {
    padding: 1rem;
    border-bottom: solid 2px rgb(204, 204, 204);
}

p {
    margin: 0;
    font-weight: bold;
}

body{
    font-family: 'Noto Sans SC', sans-serif;
}
</style>