<template>
  <div id="story-e-5" class="story">
    <div class="story-content-container">
      <div class="caption" :class="{ show: show }">
        <h3 v-html="caption.title"></h3>
        <p v-html="caption.body"></p>
      </div>
      <backFade story="e" />
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
var timerCaption
import BackFade from './BackFade'

export default {
  name: 'story-e-5',
  components: {
    BackFade
  },
  data () {
    return {
      show: false,
      header: 'How do these skinks<br />get around?',
      description: '' +
      'Scientists believe that emerald skinks have sometimes hitched rides ' +
      'to new islands on palm trees washed out to sea.',
      caption: {
        'title': '',
        'body': 'Indo-Pacific region'
      }
    }
  },
  mounted: function () {
    var self = this
    timerCaption = setTimeout(function () {
      self.show = true
    }, 500)
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/e/2')
    }
  },
  destroyed: function () {
    clearTimeout(timerCaption)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-e-5 {
  width: $screen-width;
  height: $screen-height;

  .caption {
    width: 360px;
    height: 350px;
    position: absolute;
    z-index: 9999;
    top: 625px;
    left: 480px;
    transition: opacity 1s ease;
    opacity: 0;
    &.show {
      opacity: 1;
    }
    h3 {
      font-size: $story-popup-font-size-h3;
      line-height: $story-popup-line-height-h3;
      color: $story-popup-color-h3;
      font-weight: $story-popup-font-weight-h3;
      letter-spacing: $story-popup-letter-spacing-h3;
      font-style: normal;
    }
    p {
      font-size: $story-popup-font-size-p;
      line-height: $story-popup-line-height-p;
      color: $story-popup-color-p;
      font-weight: $story-popup-font-weight-p;
      letter-spacing: $story-popup-letter-spacing-p;
      font-style: normal;
    }
  }

  .feature-intro-info {
    position: absolute;
    bottom: 0px;
  }
  .cta-container {
    position: absolute;
    bottom: 330px;
    right: 135px;
  }
}

</style>
