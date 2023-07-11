<template>
    <div>
        <div class="container">
            <div class="burgerBarContainer">
                <div class="burgerBarFlexBox">
                    <h1>Peter的氣象網站</h1>
                    <img src="@/assets/weatherIcon/burger-bar.png" alt="" class="burgerBarImg" @click="linkSlideToggle">
                </div>
                
                <div class="burgerBarLinkContainer">
                    <router-link to="/">
                        即時天氣狀況
                    </router-link>
                    <router-link to="/weatherforecast">
                        一周天氣預測
                    </router-link>
                    <router-link to="/earthquake">
                        近期地震資訊
                    </router-link>
                </div>
            </div>

            <div class="normalContainer">
                <h1>Peter的氣象網站</h1>
                <div class="normalLinkContainer">
                    <router-link to="/">
                        即時天氣狀況
                    </router-link>
                    <router-link to="/weatherforecast">
                        一周天氣預測
                    </router-link>
                    <router-link to="/earthquake">
                        近期地震資訊
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    methods: {
        linkSlideToggle() {
            $('.burgerBarLinkContainer').slideToggle(500)
        }
    },
}
</script>

<style scoped>
h1 , a {
    color: white;
}

.container {
    padding: 1rem;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/bg-title.jpg');
    background-position: center 30%;
    background-size: cover;
}


.normalLinkContainer {
    display: flex;
    justify-content: space-around;
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
    height: 60px;

    position: absolute;
    right: 1rem;

    cursor: pointer;
}

h1 {
    font-size: 50px;
    letter-spacing: 20px;
    text-align: center;

    padding: 70px 0;
}

a {
    font-size: 25px;
    letter-spacing: 5px;
}

@media (max-width:991px) {
    .normalContainer{
        display: none;
    }

    .burgerBarContainer{
        display: inline;
    }
    .burgerBarFlexBox{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .burgerBarLinkContainer{
        display: none;
        text-align: end;
    }
    .burgerBarLinkContainer > a {
        margin: 5px 0;
        display: block;
    }
    .burgerBarLinkContainer > a:hover{
        box-shadow: 5px 0 0 white;
        transform: translateX(-5px);
        padding-right: 15px;

        transition-duration: 0.5s;
    }

    h1{
        padding: 20px 56px;
        letter-spacing: 10px;
    }
}

</style>