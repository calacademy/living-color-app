<template>
  <div class="loader-mask" :class="{ show: show }" v-show="show">
    <div class="spinner" :class="{ show: show }" v-show="show" />
  </div>
</template>

<script>
export default {
  name: 'spinner',
  props: ['show']
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.loader-mask {
  position: fixed;
  z-index: 1005 !important;
  top: 0;
  left: 0;
  width: $screen-width;
  height: $screen-height;
  background-color: #000;
  opacity: 0.9;

  .spinner {
    margin-top: ($screen-height / 2) - 40;
    margin-left: ($screen-width / 2) - 40;
    width: 80px;
    height: 80px;
    background-image: url('../assets/spinner.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    animation: roll 3s linear infinite;
  }

  @keyframes roll {
  from {
      transform: rotate(0);
    }
  to {
      transform: rotate(360deg);
    }
  }
}
</style>
