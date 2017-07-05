<template>
  <div class="back-fade">
    <div class="back-fade-container">
      <div class="show" :id="'image-view-1-story-' + story + ''" />
      <div :class="{ show: !fade }" :id="'image-view-2-story-' + story + ''" />
    </div>
  </div>
</template>

<script>
var timerFade
export default {
  name: 'back-fade',
  props: ['story', 'caption'],
  data () {
    return {
      fade: true
    }
  },
  mounted: function () {
    var self = this
    timerFade = setTimeout(function () {
      self.fade = false
    }, 500)
  },
  destroyed: function () {
    clearTimeout(timerFade)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.back-fade {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: $screen-width;

  .back-fade-container {
    position: relative;
    width: $screen-width;
    height: 1300px;
    overflow: hidden;
    div {
      position: absolute;
      width: $screen-width;
      height: 1300px;
      background-repeat: no-repeat;
      opacity: 0;
      transition: opacity 2s ease;
      &.show {
        opacity: 1;
      }
    }
    #image-view-1-story-e {
      z-index: 2;
      background-image: url('/static/images/story-e-5-image-1.png');
    }
    #image-view-2-story-e {
      background-image: url('/static/images/story-e-5-image-2.png');
      z-index: 1;
    }
    #image-view-1-story-b {
      z-index: 1;
      background-image: url('/static/images/story-b-4-image-1.png');
    }
    #image-view-2-story-b {
      background-image: url('/static/images/story-b-4-image-2.png');
      z-index: 2;
    }

  }
}

</style>
