<template>
  <div class="button-custom" :class="[color, size]">
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: {
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
  cursor: pointer;

  //size
  &.small {
    height: 50px;
    padding: 0 80px;
    border-radius: 25px;
    font-size: 24px;
  }
  &.big {
    height: 80px;
    border-radius: 40px;
    font-size: 36px;
    padding: 0 40px;
  }

  //color
  &.light {
    background-color: #FEFCFB;
    color: #034078;
  }
  &.valid {
    background-color: #17A940;
    color: #FEFCFB;
  }
  &.dark {
    background-color: #034078;
    color: #FEFCFB;
  }
  &.ultradark {
    background-color: #001F45;
    color: #FEFCFB;
  }
}
</style>
