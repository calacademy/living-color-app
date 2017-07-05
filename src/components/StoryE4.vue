<template>
  <div id="story-e-4" class="story">
    <div class="story-content-container">
      <div class="story-popup-container">
        <div class="popup-feature" />
        <popupPlusFade id="story-e4-popup1" :title="pop1.title" :description="pop1.description" story="e" wi="1" />
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
import PopupPlusFade from './PopupPlusFade'
export default {
  name: 'story-e-4',
  components: {
    PopupPlusFade
  },
  data () {
    return {
      header: 'What lives inside a skink?',
      description: '' +
      'By carefully studying skink digestive ecology, scientists have discovered ' +
      'species of parasites that only live inside emerald skinks. ' +
      'For these tiny creatures, a skink&rsquo;s body is their entire world.',
      pop1: {
        title: '<i>Eimeria nuiailan</i>',
        description: '' +
        'Healthy reptiles often have small numbers of parasites, ' +
        'but too many can sicken the animal.'
      }
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

#story-e-4 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info {
    position: absolute;
    z-index: 2;
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
      top: 0;
      left: 0;
      width: $screen-width;
      height: $screen-height;
      background-image: url('/static/images/story-e-4-popup-feature.png');
      background-repeat: no-repeat;
    }
  }

}

</style>
