<template>
  <div :class="{ open: isOpen }" class="reveal-plus" :id="'reveal-plus-' + story">
    <div class="two-col-caption-container">
      <div class="two-col-caption" v-html="caption1" />
      <div class="two-col-caption" v-html="caption2" />
    </div>
    <div class="show-hide-button-container">
      <div :class="{ open: isOpen }" class="show-hide-button" @click="changeState">
        <span class="reveal-text-show">{{ btn1 }}</span>
        <span class="reveal-text-hide">{{ btn2 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reveal-plus',
  data () {
    return {
      isOpen: false,
      caption1: null,
      caption2: null,
      btn1: null,
      btn2: null
    }
  },
  props: ['story'],
  mounted: function () {
    if (this.story === 'c') {
      this.caption1 = 'Oophaga sylvatica'
      this.caption2 = 'Oophaga histrionica'
      this.btn1 = 'SEE LIVING COLOR'
      this.btn2 = 'SHOW SPECIMEN'
    } else if (this.story === 'a') {
      this.caption1 = '5 cm long (1.97 in)'
      this.caption2 = '8.2 cm long (3.25 in)'
      this.btn1 = 'COMPARE SIZE'
      this.btn2 = 'SHOW SPECIMEN'
    }
  },
  methods: {
    changeState: function () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
      this.$parent.$parent.$options.methods.registerLastUserEventFromChild(this.$parent.$parent, this.story, 'reveal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";
.reveal-plus {
  position: absolute;
  top: 0;
  left: 0;
  width: $screen-width;
  height: $screen-height;
  background-repeat: no-repeat;
  background-position: center top;
  &.open {
    .two-col-caption-container {
      opacity: 1;
    }
  }

  .show-hide-button-container {
    position: absolute;
    z-index: 999;
    width: $screen-width;
    text-align: center;

    .show-hide-button {
      display: inline-block;
      padding-left: 40px;
      padding-right: 40px;
      height: 70px;
      //border-radius: 18px;
      border: 4px solid $reveal-button-color;
      span {
        text-align: center;
        margin-top: 20px;
        font-size: $reveal-font-size;
        line-height: $reveal-line-height;
        color: $reveal-button-color;
        font-weight: $reveal-font-weight;
        letter-spacing: $reveal-letter-spacing;
      }
      .reveal-text-show {
        display: block;
      }
      .reveal-text-hide {
        display: none;
      }
      &.open {
        .reveal-text-show {
          display: none;
        }
        .reveal-text-hide {
          display: block;
        }
      }
      &:active {
        opacity: .5;
        //background-color: $reveal-button-color-active;
        span {
          color: $reveal-button-color;
        }
      }
    }
  }

  .two-col-caption-container {
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 240px;
    width: $screen-width - ($content-padding * 2);
    left: $content-padding;
    height: 100px;
    transition: opacity 1s linear;
    .two-col-caption {
      width: ($screen-width - ($content-padding * 2)) / 2;
      height: 100px;
      display: block;
      text-align: center;
      font-size: $story-1-font-size-p;
      font-weight: $story-1-font-weight-p;
      color: $story-1-color-p;
      font-style: italic;
      float: left;
    }
  }

  &#reveal-plus-c {
    transition: background-image 1s linear;
    background-image: url('/static/images/story-c-3-reveal-hide-bg.png');
    &.open {
      background-image: url('/static/images/story-c-3-reveal-show-bg.png');
    }
    & .show-hide-button-container {
      top: 1020px;
    }
  }

  &#reveal-plus-a {
    transition: background-image 1s linear;
    background-image: url('/static/images/story-a-3-reveal-hide-bg.png');
    &.open {
      background-image: url('/static/images/story-a-3-reveal-show-bg.png');
    }
    .two-col-caption-container {
      left: 0 !important;
      width: $screen-width !important;
      top: 385px !important;
      .two-col-caption {
        vertical-align: top;
        width: $screen-width !important;
        float: none !important;
        font-style: normal !important;
        height: 470px !important;
      }
    }
    & .show-hide-button-container {
      top: 960px;
    }
  }

}
</style>
