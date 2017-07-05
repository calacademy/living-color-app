<template>
  <div id="story-c-4" class="story">
    <div class="story-content-container">
      <div class="story-popup-container">
        <div class="popup-feature" />
        <popup id="story-c4-popup1" :eyebrow="pop1.eyebrow" :title="pop1.title" :description="pop1.description" story="c" wi="1"></popup>
        <popup id="story-c4-popup2" :eyebrow="pop2.eyebrow" :title="pop2.title" :description="pop2.description" story="c" wi="2"></popup>
        <popup id="story-c4-popup3" :eyebrow="pop3.eyebrow" :title="pop3.title" :description="pop3.description" story="c" wi="3"></popup>
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
import Popup from './Popup'
export default {
  name: 'story-c-4',
  components: {
    Popup
  },
  data () {
    return {
      header: 'Where does this frog<br />get its poison?',
      description: '' +
      'This frog&rsquo;s toxin comes from its diet. Scientists used molecular analysis ' +
      'to<br />learn which prey animal provided the poison’s precursor.',
      pop1: {
        eyebrow: 'Solenopsis bicolor',
        title: 'The Chemical Carrier',
        description: 'This ant contains the histrionicotoxins for which the frog is named.'
      },
      pop2: {
        eyebrow: 'Solenopsis <span class="norm">sp.</span>',
        title: '',
        description: ''
      },
      pop3: {
        eyebrow: 'Acromyrmex subterraneus',
        title: '',
        description: ''
      }
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

#story-c-4 {
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
  .story-popup-container {
    .popup-feature {
      position: absolute;
      z-index: 1;
      top: 10px;
      left: 0;
      width: 1080px;
      height: 1044px;
      background-image: url('/static/images/story-c-4-popup-feature.png');
      background-repeat: no-repeat;
    }
  }

}

</style>
