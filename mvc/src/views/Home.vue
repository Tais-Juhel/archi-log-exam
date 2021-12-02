<template>
  <div class="home">
    <img src="../assets/title_PI.svg" alt="logo" class="logo">
    <ButtonCustom  name="Nouvelle Partie" color="dark" size="big"/>
  </div>
</template>

<script>
import ButtonCustom from '@/components/ButtonCustom'

export default {
  name: 'Home',
  components: {
    ButtonCustom
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    margin-bottom: 30px;
  }
}
</style>
