<template>
  <div id="home" @click="userActionHandler('intro-slideshow')">
    <div class="caption">
      Collected Knowledge:<br />
      Specimens From the Academy<br />
      <span class="slide-cta">TAP TO EXPLORE</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: ['slide'],
  data () {
    return {
      target: '/a'
    }
  },
  methods: {
    userActionHandler: function (ui) {
      var story = this.target.replace('/', '')
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent, story, ui)
      this.$router.push(this.target)
    }
  },
  watch: {
    slide: function () {
      switch (this.slide) {
        case 'slide-1':
          this.target = '/a'
          break
        case 'slide-2':
          this.target = '/b'
          break
        case 'slide-3':
          this.target = '/c'
          break
        case 'slide-4':
          this.target = '/d'
          break
        case 'slide-5':
          this.target = '/e'
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#home {
  position: relative;
  width: $screen-width;
  height: $screen-height;

  .caption {
    position: absolute;
    width: $screen-width;
    text-align: center;;
    font-size: $font-size-p-home;
    font-weight: $font-weight-p-home;
    top: 1400px;
    span {
      margin: 0;
      padding: 0;
      display: inline-block;
      padding-top: 50px;
    }
  }

}

</style>
