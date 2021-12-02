<template>
  <nav>
    <img src="./assets/title_PI.svg" alt="logo" class="logo-nav" v-if="notTitleOnPage">
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      notTitleOnPage: true,
      onHome: true,
      pageWithTitle: [
        "/",
        "/login",
        "/register"
      ]
    }
  },
  watch: {
    '$route'() {
      if(this.pageWithTitle.indexOf(this.$route.path.trim()) > -1) {
        this.notTitleOnPage = false
      } else {
        this.notTitleOnPage = true
      }

      (this.$route.path.trim() == "/") ? this.onHome = true : this.onHome = false
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: 'Kaushan Script', cursive;
  text-decoration: none;
}

body {
  background: url("./assets/background-patern.svg");
  background-position: center;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 100px;
  width: 96vw;

  .logo-nav {
    margin: auto;
    margin-left: 0;
    height: 36px;
  }

  .user {
    display: flex;
    align-items: center;
    margin: auto;
    margin-right: 0;

    .username {
      font-size: 18px;
      margin-right: 30px;
    }

    .classement {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: #034078;
    }
  }
}
</style>
