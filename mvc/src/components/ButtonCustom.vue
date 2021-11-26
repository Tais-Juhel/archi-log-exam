<template>
  <div class="button-custom" :class="[color, size]">
    <router-link :to="{path: link}">{{name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: {
    link: String,
    name: String,
    color: String,
    size: String
  }
}
</script>

<style lang="scss" scoped>
.button-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  &.big {
    height: 80px;
    border-radius: 40px;
    font-size: 36px;
  }

  &.dark {
    background-color: #034078;

    a {
      color: #FEFCFB;
    }
  }
}
</style>
