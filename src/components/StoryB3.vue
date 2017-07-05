<template>
  <div id="story-b-3" class="story">
    <div class="story-content-container">
      <div class="zoom-feature" />
      <zoom story="b" :caption="this.caption" />
      <div class="feature-intro-info">
        <h1 v-html="header"></h1>
        <p v-html="description"></p>
      </div>
      <div class="cta-container">
        <button class="back" @click="userActionHandler"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Zoom from './Zoom'

export default {
  name: 'story-b-3',
  components: {
    Zoom
  },
  data () {
    return {
      header: 'What can specimens<br />show us?',
      description: '' +
      'Specimens can help us learn about the evolution of Pacific seahorses ' +
      'and the threats they face. Scientists have mapped five distinct ' +
      'genetic populations of Pacific seahorses through the careful study ' +
      'of museum collections.',
      caption: 'Scientists use fluorescent<br />dyes to visualize DNA.'
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

#story-b-3 {
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
  .story-content-container {
    .zoom-feature {
      position: absolute;
      z-index: 0;
      left: 0px;
      top: 0px;
      width: $screen-width;
      height: $screen-height;
      background-image: url('/static/images/story-b-3-zoom-feature.png');
      background-repeat: no-repeat;
    }
    .zoom {
      position: absolute;
      top: 660px;
      left: 460px;
    }
  }
}

</style>
