<template>
  <div id="story-e-1" class="story">
    <div class="story-content-container">
      <spotlightSimpleAlt story="e" :activeSlide="activeSlide"></spotlightSimpleAlt>
      <!--<slider story="e" />-->
      <swipe story="e" />
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
  name: 'story-e-1',
  components: {
    Swipe,
    SpotlightSimpleAlt
  },
  data () {
    return {
      header: 'The range of reptiles',
      description: '' +
      'Emerald skinks are found throughout<br />the tropical <nobr>Indo-Pacific</nobr> ' +
      'region, and can range from <nobr>blue-green</nobr>, to brownish,<br />to bright ' +
      'green. On islands with only the bright green version, color ' +
      'provides a<br />visible clue of lower genetic diversity.',
      activeSlide: 1
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/e/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-e-1 {
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
