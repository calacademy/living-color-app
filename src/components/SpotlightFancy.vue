<template>
  <div class="spotlight-fancy">
    <div class="spotlight-container" :id="'spotlight-container-' + story">
      <div class="spot" :id="'spotlight-' + story"
      :class="'bg-' + activeSlide + ''">
        <div id="spotObject" :class="'spot-object-' + activeSlide" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'spotlight-fancy',
  props: ['story', 'activeSlide'],
  data () {
    return {
      activeFancy: this.activeSlide
    }
  },
  watch: {
    activeSlide: function () {
      this.activeFancy = this.activeSlide
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.spotlight-fancy {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: $screen-width;
  .spotlight-container {
    position: relative;
    display: inline-block;
    width: $screen-width;
    height: $screen-height;
    overflow: hidden;
    .spot {
      position: absolute;
      width: $screen-width;
      height: $screen-height;
      background-repeat: no-repeat;
      transition: background-image 1s ease-in;
      &.bg-1 {
        background-image: url('/static/images/story-b-1-spotlight-bg-1.png');
      }
      &.bg-2 {
        background-image: url('/static/images/story-b-1-spotlight-bg-2.png');
      }
      &.bg-3 {
        background-image: url('/static/images/story-b-1-spotlight-bg-3.png');
      }
      &.bg-4 {
        background-image: url('/static/images/story-b-1-spotlight-bg-4.png');
      }
      &.bg-5 {
        background-image: url('/static/images/story-b-1-spotlight-bg-5.png');
      }
      #spotObject {
        position: absolute;
        width: 500px;
        height: 800px;
        left: ($screen-width - 500) / 2;
        top: 100px;
        background-repeat: no-repeat;
        background-position: center;
        transition: background-image 1s ease-in;
        //transition-delay: 1s;
        &.spot-object-1 {
          background-image: url('/static/images/story-b-1-spotlight-ob-1.png');
        }
        &.spot-object-2 {
          background-image: url('/static/images/story-b-1-spotlight-ob-2.png');
        }
        &.spot-object-3 {
          background-image: url('/static/images/story-b-1-spotlight-ob-3.png');
        }
        &.spot-object-4 {
          background-image: url('/static/images/story-b-1-spotlight-ob-4.png');
        }
        &.spot-object-5 {
          background-image: url('/static/images/story-b-1-spotlight-ob-5.png');
        }
      }
      caption {
        margin-left: -10px;
        width: $screen-width;
        display: block;
        position: absolute;
        bottom: 43px;
        text-align: center;
        font-size: $story-1-font-size-p;
        font-weight: $story-1-font-weight-p;
        color: $story-1-color-p;
      }
      &#spotlight-b-1 {
        z-index: 101;
      }
      &#spotlight-b-2 {
        z-index: 102;
      }
    }

  }
}

</style>
