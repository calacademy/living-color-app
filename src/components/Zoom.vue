<template>
  <div class="zoom">
    <div class="zoom-lens" :class="{ zoomed: zoom }" :id="'zoom-story-' + story + ''" />
    <div v-html="caption" class="caption" :class="{ show: show }" />
  </div>
</template>

<script>
var timerZoom
var timerCaption
export default {
  name: 'zoom',
  props: ['story', 'caption'],
  data () {
    return {
      zoom: false,
      show: false
    }
  },
  mounted: function () {
    var self = this
    timerZoom = setTimeout(function () {
      self.zoom = true
    }, 1000)
    timerCaption = setTimeout(function () {
      self.show = true
    }, 2000)
  },
  destroyed: function () {
    clearTimeout(timerZoom)
    clearTimeout(timerCaption)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-c-5 {
  .zoom {
    .zoomed {
      animation: zoom-story-c 1s ease-out;
      animation-fill-mode: forwards;
    }
    .caption {
      top: 910px;
      left: 700px;
    }
  }
}

#story-b-3 {
  .zoom {
    .zoomed {
      animation: zoom-story-b 1s ease-out;
      animation-fill-mode: forwards;
    }
    .caption {
      top: 690px;
      left: 720px;
    }
  }
}

.zoom {
  width: 400px;
  height: 400px;
  // position: fixed;

  .zoom-lens {
    top: 0;
    border-radius:50%;
    width: 150px;
    height: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    //box-shadow: 0 0 30px 4px #000;
  }
  #zoom-story-c {
    background-image: url('/static/images/story-c-5-zoom-focus.png');
  }
  #zoom-story-b {
    background-image: url('/static/images/story-b-3-zoom-focus.png');
  }

  .caption {
    position: fixed;
    //width: 150px;
    display: block;
    font-size: $story-popup-font-size-p;
    line-height: $story-popup-line-height-p;
    color: $story-popup-color-p;
    font-weight: $story-popup-font-weight-p;
    letter-spacing: $story-popup-letter-spacing-p;
    font-style: normal;
    transition: opacity 1s ease;
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }

}

@keyframes zoom-story-c {
  to {
    transform: translate(110px, 80px) scale(2.85, 2.85);
  }
}
@keyframes zoom-story-b {
  to {
    transform: translate(290px, -280px) scale(2.85, 2.85);
  }
}

</style>
