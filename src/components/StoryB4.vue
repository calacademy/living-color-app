<template>
  <div id="story-b-4" class="story">
    <div class="story-content-container">
      <div class="caption" :class="{ show: show }">
        <h3 v-html="caption.title"></h3>
        <p v-html="caption.body"></p>
      </div>
      <backFade story="b" :caption="this.caption" />
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
  name: 'story-b-4',
  components: {
    BackFade
  },
  data () {
    return {
      show: false,
      header: 'How can DNA guide conservation?',
      description: '' +
      'By comparing the DNA of Pacific seahorses sold at market with a map ' +
      'of known genetic populations, scientists have learned where these ' +
      'rare seahorses need greater protection.',
      caption: {
        'title': 'Marine Sanctuaries',
        'body': 'Seahorses in these areas need more protection from overfishing.'
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
      this.$router.push('/b/2')
    }
  },
  destroyed: function () {
    clearTimeout(timerCaption)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-b-4 {
  width: $screen-width;
  height: $screen-height;

  .caption {
    width: 360px;
    height: 350px;
    position: absolute;
    z-index: 9999;
    top: 830px;
    left: 100px;
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
