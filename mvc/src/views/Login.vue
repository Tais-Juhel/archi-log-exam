<template>
  <div class="register">
    <img src="../assets/title_PI_wave.svg" alt="logo" class="logo">
    <form action="" class="register-form">
      <div class="fields">
        <input placeholder="Identifiant" type="text">
        <input placeholder="Mot de passe" type="password">
      </div>
      <ButtonCustom @click="login" name="Connexion" color="light" size="small"/>
    </form>
    {{posts}}
  </div>
</template>

<script>
import ButtonCustom from '@/components/ButtonCustom'
import axios from 'axios';
export default {
  name: "Login",
  components: {
    ButtonCustom
  },
  data() {
    return {
          posts:[],

    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/users/')
      .then(response => (this.posts = response.data))
      console.log("test")  },

  methods: {
    login: function(){
      console.log('log');
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
    height: 350px;
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
        height: 350px;
        background-color: #1282A2;
        top: 15px;
        left: 15px;
        border-radius: 20px;
    }
  }
}
</style>
