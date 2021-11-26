<template>
  <div class="register">
    <img src="../assets/title_PI_wave.svg" alt="logo" class="logo">
    <form action="" class="register-form">
      <div class="fields">
        <input placeholder="Identifiant" type="text">
        <input placeholder="Mail" type="text">
        <input placeholder="Mot de passe" type="password">
        <input placeholder="Confirmation du mot de passe" type="password">
      </div>
      <ButtonCustom link="/login" name="Inscription" color="light" size="small"/>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.register {
  display: flex;
}
</style>
