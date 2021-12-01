<template>
    <div class="qcm">
        <p class="question">{{question}}</p>
        <div class="answers">
            <div v-for="choice in answers" :key="choice.id" class="answer" @click="check(`choice_${choice.id}`)">
                <input :id="`choice_${choice.id}`" type="radio" name="answer" v-model="choice.isGood">
                <label for="answer">{{choice.answer}}</label>
            </div>
        </div>
    </div>
</template>

<script>
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
            ]
        }
    },
    methods: {
        check: (id) => {
            document.getElementById(id).checked = true
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

    .answer {
        display: flex;
        align-items: center;
        width: 900px;
        height: 100px;
        background-color: #1282A2;
        border-radius: 10px;
        margin-bottom: 25px;

        input {
            margin: 30px;
        }
    }
}
</style>