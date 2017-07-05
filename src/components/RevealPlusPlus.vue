<template>
  <div :class="{ open: isOpen }" class="reveal-plus-plus" :id="'reveal-plus-plus-' + story">
    <div class="two-col-caption-container">
      <div class="two-col-caption" v-html="caption1" />
      <div class="two-col-caption" v-html="caption2" />
    </div>
    <div class="two-col-caption-container-hide" :class="{ open: isOpen }">
      <div class="two-col-caption" v-html="caption3" />
      <div class="two-col-caption" v-html="caption4" />
    </div>
    <div class="show-hide-button-container">
      <div :class="{ open: isOpen }" class="show-hide-button" @click="changeState">
        <span class="reveal-text-show">REVEAL HABITAT</span>
        <span class="reveal-text-hide">HIDE MAPS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reveal-plus-plus',
  data () {
    return {
      isOpen: false,
      caption1: null,
      caption2: null,
      caption3: null,
      caption4: null
    }
  },
  props: ['story'],
  mounted: function () {
    if (this.story === 'a') {
      this.caption1 = 'Hermissenda opalescens'
      this.caption2 = 'Chromodoris annae'
      this.caption3 = 'California Coast'
      this.caption4 = 'Coral Triangle'
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
.reveal-plus-plus {
  position: absolute;
  top: 0;
  left: 0;
  width: $screen-width;
  height: $screen-height;
  background-repeat: no-repeat;
  background-position: center top;

  .show-hide-button-container {
    position: absolute;
    z-index: 999;
    width: $screen-width;
    text-align: center;
    top: 1040px;

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
          //color: $reveal-button-color;
        }
      }
    }
  }

  &#reveal-plus-plus-a {
    transition: background-image 1s linear;
    background-image: url('/static/images/story-a-5-reveal-hide-bg.png');
    &.open {
      background-image: url('/static/images/story-a-5-reveal-show-bg.png');
    }
    .show-hide-button {
      top: 1070px;
    }
  }

  .two-col-caption-container {
    position: absolute;
    top: 90px;
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

  .two-col-caption-container-hide {
    position: absolute;
    top: 470px;
    width: $screen-width - ($content-padding * 2);
    left: $content-padding;
    height: 100px;
    //visibility: hidden;
    opacity: 0;
    transition: opacity 1s linear;
    &.open {
      //visibility: visible;
      opacity: 1;
    }
    .two-col-caption {
      width: ($screen-width - ($content-padding * 2)) / 2;
      height: 100px;
      display: block;
      text-align: center;
      font-size: $story-1-font-size-p;
      font-weight: $story-1-font-weight-p;
      color: $story-1-color-p;
      font-style: normal;
      float: left;
    }
  }


}
</style>
