<template>
  <div class="specimen-morph">
    <div class="specimen-morph-container">
      <div :class="{ show: morph }" :id="'specimen-view-1-story-' + story + ''">
        <div class="two-col-caption-container">
          <div class="two-col-caption" v-html="caption1" />
          <div class="two-col-caption" v-html="caption2" />
        </div>
      </div>
      <div :class="{ show: !morph }" :id="'specimen-view-2-story-' + story + ''" />
    </div>
  </div>
</template>

<script>
var timerMorph
export default {
  name: 'specimen-morph',
  props: ['story'],
  data () {
    return {
      morph: true,
      caption1: null,
      caption2: null
    }
  },
  mounted: function () {
    var self = this
    timerMorph = setTimeout(function () {
      self.morph = false
    }, 2000)
  },
  destroyed: function () {
    clearTimeout(timerMorph)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.specimen-morph {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: $screen-width;

  .specimen-morph-container {
    position: relative;
    width: $screen-width;
    height: 1300px;
    overflow: hidden;
    > div {
      position: absolute;
      z-index: 1;
      width: $screen-width;
      height: 1300px;
      background-repeat: no-repeat;
      opacity: 0;
      transition: opacity 2s ease;
      &.show {
        opacity: 1;
      }
    }
    
    #specimen-view-1-story-d {
      background-image: url('/static/images/story-d-3-specimen-1.png');
    }
    #specimen-view-2-story-d {
      background-image: url('/static/images/story-d-3-specimen-2.png');
    }

    .two-col-caption-container {
      position: absolute;
      z-index: 2;
      top: 150px;
      width: $screen-width - ($content-padding * 2);
      left: $content-padding;
      height: 100px;
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

  }
}

</style>
