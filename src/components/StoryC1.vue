<template>
  <div id="story-c-1" class="story">
    <div class="story-content-container">
      <spotlightSimpleAlt story="c" :activeSlide="activeSlide"></spotlightSimpleAlt>
      <!--<slider story="c" />-->
      <swipe story="c" />
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
import SpotlightSimpleAlt from './SpotlightSimpleAlt'

export default {
  name: 'story-c-1',
  components: {
    Swipe,
    SpotlightSimpleAlt
  },
  data () {
    return {
      header: 'Visual variety',
      description: '' +
      'Most individuals within a poisonous species look alike&mdash;it helps ' +
      'predators learn the patterns to avoid. However, this frog species ' +
      'mates with closely related species, making its color pattern highly ' +
      'variable.',
      activeSlide: 1
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/c/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-c-1 {
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
  .spotlight {
    top: 90px;
  }
  .swipe {
    top: 825px;
  }
}

</style>
