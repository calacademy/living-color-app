<template>
  <div id="story-a-4" class="story">
    <div class="story-content-container">
      <div class="story-popup-container">
        <div class="popup-feature" />
        <popupPlus id="story-a4-popup1" :title="pop1.title" :description="pop1.description" story="a" wi="1" />
        <popupPlus id="story-a4-popup2" :title="pop2.title" :description="pop2.description" story="a" wi="2" />
        <popupPlus id="story-a4-popup3" :title="pop3.title" :description="pop3.description" story="a" wi="3" />
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
  name: 'story-a-4',
  components: {
    PopupPlus
  },
  data () {
    return {
      header: 'What do you see<br />in the details?',
      description: '' +
      'Sea slugs come in a fantastic array of<br />body shapes and colors. Different ' +
      'species<br />can be identified by carefully observing<br />the differences in ' +
      'color, pattern, structures, and genetics.',
      pop1: {
        title: 'Scent & taste organs',
        description: '' +
        'These organs sense chemicals in the water, helping nudibranchs find ' +
        'nearby food and mates.'
      },
      pop2: {
        title: 'Bold markings',
        description: '' +
        'Interestingly, nudibranchs can only detect light and dark, so they ' +
        'can&rsquo;t see their own brilliant colors!'
      },
      pop3: {
        title: 'External gills',
        description: '' +
        'Sea slugs take in oxygen through their external gills, but they ' +
        'can also do so through their skin.'
      }
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

#story-a-4 {
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
      left: 0px;
      top: 0px;
      width: $screen-width;
      height: $screen-height;
      background-image: url('/static/images/story-a-4-popup-feature.png');
      background-repeat: no-repeat;
    }
  }

}

</style>
