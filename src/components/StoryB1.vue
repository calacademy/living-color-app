<template>
  <div id="story-b-1" class="story">
    <div class="story-content-container">
      <spotlightFancy story="b" :activeSlide="activeSlide"></spotlightFancy>
      <!--<slider story="b"></slider>-->
      <swipe story="b" />
      <div class="feature-intro-info">
        <h1 v-html="header"></h1>
        <p v-html="description"></p>
      </div>
      <div class="cta-container">
        <button class="forward" @click="userActionHandler"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Swipe from './Swipe'
import SpotlightFancy from './SpotlightFancy'

export default {
  name: 'story-b-1',
  components: {
    Swipe,
    SpotlightFancy
  },
  data () {
    return {
      header: 'Brilliant at blending',
      description: '' +
      'This seahorse&rsquo;s hue ranges from <nobr>greenish-yellow</nobr> to maroon, ' +
      'depending on<br />the grass, sponge, or sea fan it inhabits. When ' +
      'the seahorse settles into a new environment, it can slowly change ' +
      'color to blend in better with its new background.',
      activeSlide: 1
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/b/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-b-1 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info {
    position: absolute;
    bottom: 0px;
  }
  .cta-container {
    position: absolute;
    bottom: 330px;
    right: 135px;
  }
  .swipe {
    top: 890px;
  }
}

</style>
