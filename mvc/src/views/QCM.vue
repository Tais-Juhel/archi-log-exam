<template>
    <div class="qcm">
        <p class="question">{{question}}</p>
        <form class="answers">
            <div v-for="choice in answers" :key="choice.id" class="answer no-select" :id="`choice_${choice.id}`" @click="check(`#choice_${choice.id}`)">
                <input type="radio" name="answer" v-model="choice.isGood">
                <label for="answer">{{choice.answer}}</label>
            </div>
            <ButtonCustom name="Valider" size="big" color="valid" @click="valid" v-if="showButton"/>
            <ButtonCustom name="Suivant" size="big" color="dark" @click="next" v-if="isValid"/>
        </form>
    </div>
</template>

<script>
import ButtonCustom from '@/components/ButtonCustom'
import axios from 'axios'

export default {
    name: "QCM",
    data() {
        return {
            question: 'Cet emplacement sera-t-il réservé aux futurs questions ?',
            answers: [
                {
                    id: 1,
                    answer: "Oui, ça me parrait évident !",
                    isGood: true
                },
                {
                    id: 2,
                    answer: "Non, il faut être fou pour y coire !",
                    isGood: false
                },
                {
                    id: 3,
                    answer: "J’ai bien ri je mettrais 20/20 !",
                    isGood: false
                }
            ],
            showButton: false,
            isValid: false
        }
    },
    components: {
        ButtonCustom
    },
    mounted() {
        console.log(document.cookie)
        const body = {
            cateroyId: document.cookie.categorie,
            difficulty: document.cookie.difficulty,
            number: 5
        }
        axios.post("http://localhost:3000/api/questions/cat-dif", body)
            .then(res => console.log(res.data))
    },
    methods: {
        check(id) {
            if(!document.querySelector(id+">input").disabled) {
                document.querySelector(id+">input").checked = true
                document.querySelectorAll(".answer").forEach(answer => {
                    answer.classList = "answer no-select"
                })
                document.querySelector(id).classList.toggle("no-select")
                this.showButton = true
            }
        },

        valid() {
            this.answers.forEach(answer => {
                document.querySelectorAll(".answer").forEach(answerDiv => {
                    if("choice_"+answer.id === answerDiv.id && answer.isGood) {
                        console.log('good')
                        answerDiv.classList = "answer good"
                    } else if ("choice_"+answer.id === answerDiv.id && !answer.isGood && answerDiv.classList.value === "answer") {
                        console.log('wrong')
                        answerDiv.classList = "answer wrong"
                    } 
                    document.querySelector("#"+answerDiv.id+">input").toggleAttribute("disabled")
                })
            })
            this.showButton = !this.showButton
            this.isValid = !this.isValid
        },

        next() {
            this.$router.push('/score')
        }
    }
}
</script>

<style lang="scss" scoped>
.qcm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 28px;

    .question {
        width: 1000px;
        padding: 20px;
        background-color: #001F45;
        color: #FEFCFB;
        border-radius: 10px;
        margin-bottom: 50px;
    }

    .answer {
        display: flex;
        align-items: center;
        width: 900px;
        height: 100px;
        background-color: #034078;
        border-radius: 10px;
        margin-bottom: 25px;
        color: #FEFCFB;

        &.no-select {
            background-color: #1282A2;
        }

        &.good {
            background-color: #17A940
        }

        &.wrong {
            background-color: #BA2302
        }

        input {
            margin: 30px;
        }
    }
}
</style>