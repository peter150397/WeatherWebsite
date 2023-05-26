<template>
    <div>
        <div class="container">

            <div class="burgerBarContainer">
                <div class="burgerBarFlexBox">
                    <h1>Peter的氣象網站</h1>
                    <img src="@/assets/weatherIcon/burger-bar.png" alt="" class="burgerBarImg">
                </div>
                
                <div class="burgerBarLinkContainer">
                    <router-link to="/currentweather">
                        <p>即時天氣狀況</p>
                    </router-link>
                    <router-link to="/weatherforecast">
                        <p>一周天氣預測</p>
                    </router-link>
                    <router-link to="/earthquake">
                        <p>近期地震資訊</p>
                    </router-link>
                </div>
            </div>

            <div class="normalContainer">
                <h1>Peter的氣象網站</h1>
                <div class="normalLinkContainer">
                    <router-link to="/currentweather">
                        <p>即時天氣狀況</p>
                    </router-link>
                    <router-link to="/weatherforecast">
                        <p>一周天氣預測</p>
                    </router-link>
                    <router-link to="/earthquake">
                        <p>近期地震資訊</p>
                    </router-link>
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
            isClick: false
        }
    },
    mounted() {
        const vm = this

        $('.burgerBarImg').click(function () {
            $('.burgerBarLinkContainer').slideToggle(500)
        })
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
    margin: 0;
    padding: 1rem;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/bg-title.jpg');
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
}


.normalLinkContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
}

.normalLinkContainer>a:hover {
    box-shadow: 0 -5px 0 white inset;
    transform: translateY(-5px);
    padding-bottom: 5px;

    transition-duration: 0.5s;
}

.burgerBarContainer{
    display: none;
}


.burgerBarImg {
    border: solid 3px white;
    border-radius: 15px;
    padding: 0.6rem;
    height: 30px;

    cursor: pointer;
}

h1 {
    color: white;
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 20px;
    text-align: center;

    padding: 70px 0;
}

p {
    color: white;
    font-size: 25px;
    letter-spacing: 5px;
}

a {
    text-decoration-line: none;
}

@media (max-width:991px) {
    .normalContainer{
        display: none;
    }

    .burgerBarContainer{
        display: inline;
    }
    .burgerBarContainer > .burgerBarFlexBox{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .burgerBarContainer > .burgerBarFlexBox > .burgerBarImg{
        position: absolute;
        right: 1rem;
    }

    .burgerBarContainer > .burgerBarLinkContainer{
        display: none;
        text-align: end;
    }
    .burgerBarContainer > .burgerBarLinkContainer > a > p{
        margin: 5px 0;
    }
    .burgerBarContainer > .burgerBarLinkContainer > a :hover{
        box-shadow: 5px 0 0 white;
        transform: translateX(-5px);
        padding-right: 15px;

        transition-duration: 0.5s;
    }


    h1{
        padding: 20px 0;
    }
}

</style>