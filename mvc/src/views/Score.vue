<template>
    <div class="score">
        <div class="score-card">
            <h2>Résultat</h2>
            <div class="score-div">
                <p>Score:</p>
                <span>{{score}}</span>
                <p>pts</p>
            </div>
        </div>
        <ButtonCustom name="Retour au menu" size="big" color="ultradark" @click="toHome"/>
    </div>
</template>

<script>
import ButtonCustom from '@/components/ButtonCustom'

export default {
    name: "Score",
    data() {
        return {
            score: 8000
        }
    },
    components: {
        ButtonCustom
    },
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.score {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    .score-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 900px;
        background-color: #034078;
        border-radius: 20px;
        margin: 50px 0;

        &::after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 15px;
            left: 15px;
            width: 900px;
            height: 300px;
            border-radius: 20px;
            background-color: #1282A2;
        }

        h2 {
            font-size: 42px;
            color: #FEFCFB;
        }

        .score-div {
            display: flex;
            align-items: flex-end;
            color: #FEFCFB;

            p {
                font-size: 28px;
            }

            span {
                font-size: 90px;
                margin: 0 20px;
                height: 100px;
            }
        }
    }
}
</style>