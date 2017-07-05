<template>
  <div id="story-c-5" class="story">
    <div class="story-content-container">
      <div class="zoom-feature" />
      <zoom story="c" :caption="this.caption" />
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
  name: 'story-c-5',
  components: {
    Zoom
  },
  data () {
    return {
      header: 'What do young harlequin poison frogs eat?',
      description: '' +
      'Tadpoles in the <i>Oophaga</i> genus must eat their mother&rsquo;s eggs ' +
      'to survive. Every other day,<br />she delivers her eggs to the plant cups ' +
      'where the tadpoles grow.',
      caption: '<i>Oophaga</i> tadpole on<br />its mother&rsquo;s back'
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

#story-c-5 {
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
  .story-content-container {
    .zoom-feature {
      position: absolute;
      z-index: 0;
      left: 0px;
      top: 0px;
      width: $screen-width;
      height: $screen-height;
      background-image: url('/static/images/story-c-5-zoom-feature.png');
      background-repeat: no-repeat;
    }
    .zoom {
      position: absolute;
      top: 530px;
      left: 630px;
    }
  }

}

</style>
