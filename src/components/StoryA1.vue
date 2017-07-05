<template>
  <div id="story-a-1" class="story">
    <div class="story-content-container">
      <spotlightSimple story="a" :activeSlide="activeSlide"></spotlightSimple>
      <!--<slider story="a" />-->
      <swipe story="a" />
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
import SpotlightSimple from './SpotlightSimple'

export default {
  name: 'story-a-1',
  components: {
    Swipe,
    SpotlightSimple
  },
  data () {
    return {
      header: 'Brilliant warning',
      description: 'Anna&rsquo;s chromodoris belongs to a brightly ' +
      'colored group of nudibranchs. The bold hues of these sea slugs ' +
      'are a clear warning to hungry fish: This tender bite is toxic.',
      activeSlide: 1
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/a/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-a-1 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info{
    position: absolute;
    bottom: 0px;
  }
  .cta-container {
    position: absolute;
    bottom: 330px;
    right: 135px;
  }
  .spotlight-simple {
    top: 90px;
  }
  .swipe {
    top: 825px;
  }
}

</style>
