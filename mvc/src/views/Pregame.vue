<template>
    <div class="pregame">
        <div class="category">
            <h2>Catégorie</h2>
            <select>
                <option value="">--Please choose an option--</option>
            </select>
        </div>
        <div class="difficulty">
            <h2>Difficulté</h2>
            <select>
                <option value="easy">Facile</option>
                <option value="medium">Intermédiaire</option>
                <option value="hard">Difficile</option>
            </select>
        </div>
        <ButtonCustom name="C'est parti !" color="dark" size="big"/>
    </div>
</template>

<script>
import ButtonCustom from "@/components/ButtonCustom"

export default {
    name: "Pregame",
    components: {
        ButtonCustom
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