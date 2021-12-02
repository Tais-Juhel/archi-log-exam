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
    </div>
</template>

<script>
export default {
    name: "Score",
    data() {
        return {
            score: 8000
        }
    },
}
</script>