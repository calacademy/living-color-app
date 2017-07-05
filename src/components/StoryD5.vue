<template>
  <div id="story-d-5" class="story">
    <div class="story-content-container">
      <div class="story-popup-container">
        <div class="popup-feature" />
        <popupPlus id="story-d5-popup1" :title="pop1.title" :description="pop1.description" story="d" wi="1" />
      </div>
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
import PopupPlus from './PopupPlus'

export default {
  name: 'story-d-5',
  components: {
    PopupPlus
  },
  data () {
    return {
      header: 'Why is it called<br />a scorpionfish?',
      description: '' +
      'Potential predators, and unsuspecting divers, beware! Scorpionfish ' +
      'are so named because their spike-like fins and webbed rays pack a ' +
      'potent poison.',
      pop1: {
        eyebrow: '',
        title: '',
        description: '' +
        'A scorpionfish sting causes intense pain and swelling. ' +
        'A severe sting can cause bleeding, breathing difficulties, ' +
        'and nausea&mdash;or worse. Ouch!'
      }
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/d/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-d-5 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info {
    position: absolute;
    bottom: 0px;
  }
  .cta-container {
    position: absolute;
    z-index: 2;
    bottom: 330px;
    right: 135px;
  }
  .story-popup-container {
    .popup-feature {
      position: absolute;
      z-index: 1;
      top: 240px;
      left: 0;
      width: $screen-width;
      height: $screen-height;
      background-image: url('/static/images/story-d-5-popup-feature.png');
      background-repeat: no-repeat;
    }
  }
}

</style>
