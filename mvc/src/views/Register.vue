<template>
  <div class="register">
    <img src="../assets/title_PI_wave.svg" alt="logo" class="logo">
    <form action="" class="register-form">
      <div class="fields">
        <input placeholder="Nom d'utilisateur" type="text" v-model="user.username">
        <input placeholder="Mail" type="email" v-model="user.email">
        <input placeholder="Mot de passe" type="password" v-model="user.password">
        <input placeholder="Confirmation du mot de passe" type="password" v-model="password2">
      </div>
      <ButtonCustom name="Inscription" color="light" size="small" @click="register"/>
    </form>
  </div>
</template>

<script>
import ButtonCustom from '@/components/ButtonCustom'
import axios from 'axios'

export default {
  name: "Register",
  components: {
    ButtonCustom
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      password2: ""
    }
  },
  methods: {
    register() {
      if(this.user.password === this.password2) {
        if(this.user.password.length >= 6) {
          axios.post('http://localhost:3000/api/users',this.user)
          this.$router.push("/login")
        } else {
          alert('Le mot de passe doit contenir au moins 6 caractères')
        }
      } else {
        alert('Les mot de passe doivent être identique')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .logo {
    margin: 60px 0;
  }

  .register-form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 800px;
    height: 450px;
    background-color: #034078;

    .fields {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      input {
        border: none;
        outline: none;
        height: 50px;
        width: 550px;
        border-radius: 10px;
        padding: 0 20px;
        font-size: 24px;
        background-color: #1282A2;
        color: #FEFCFB;

        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 800px;
        height: 450px;
        background-color: #1282A2;
        top: 15px;
        left: 15px;
        border-radius: 20px;
    }
  }
}
</style>
