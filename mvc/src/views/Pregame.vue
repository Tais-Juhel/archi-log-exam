<template>
    <div class="pregame">
        <div class="category">
            <h2>Catégorie</h2>
            <select v-model="categChoice">
                <option v-for="categ in categories" :key="categ.id" :value="categ._id">{{categ.name}}</option>
            </select>
        </div>
        <div class="difficulty">
            <h2>Difficulté</h2>
            <select v-model="difficulty">
                <option value="1">Facile</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Difficile</option>
            </select>
        </div>
        <ButtonCustom name="C'est parti !" color="dark" size="big" @click="validParams"/>
    </div>
</template>

<script>
import ButtonCustom from "@/components/ButtonCustom"
import axios from 'axios'

export default {
    name: "Pregame",
    data() {
        return {
            categories: [],
            categChoice: "",
            difficulty: ""
        }
    },
    components: {
        ButtonCustom
    },
    mounted() {
        axios.get("http://localhost:3000/api/categorie")
            .then(res => {
                console.log(res.data.rows)
                this.categories = res.data.rows
            })
    },
    methods: {
        validParams() {
            document.cookie = "categorie="+this.categChoice
            document.cookie = "difficulty="+this.difficulty
            this.$router.push('/qcm')
        }
    }
}
</script>

<style lang="scss" scoped>
.pregame {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .category, .difficulty {
        width: 800px;
        margin-bottom: 30px;

        h2 {
            font-size: 24px;
            color: #0A1128;
            margin-left: 20px;
            margin-bottom: 10px;
        }

        select {
            height: 100px;
            width: 100%;
            border-radius: 10px;
            font-size: 36px;
            color: #FEFCFB;
            background-color: #034078;
            outline: none;
        }
    }
}
</style>