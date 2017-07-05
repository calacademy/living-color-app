<template>
  <div id="slider" class="slider" :class="'slider-' + story">
    <div class="slider-cue">Slide to Explore</div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider'

export default {
  name: 'slider',
  props: ['story'],
  data: function () {
    return {
      selectedSlide: 1
    }
  },
  mounted: function () {
    var slider = document.getElementById('slider')
    noUiSlider.create(slider, {
      start: 1,
      // snap: true,
      behaviour: 'drag',
      padding: 1,
      step: 1,
      range: {
        'min': 0,
        'max': 6
      }
    })
    slider.noUiSlider.on('update', this.updateValue)
    slider.addEventListener('click', this.sliderTapHack, true)
  },
  methods: {
    updateValue: function (value) {
      this.$parent.activeSlide = Math.floor(value[0])
      this.$parent.$parent.$options.methods.registerLastUserEventFromChild(this.$parent.$parent, this.story, 'slider', this.selectedSlide)
    },
    sliderTapHack: function (e) {
      var slider = document.getElementById('slider')
      var x = e.clientX
      var n = 0
      if (x < 329) {
        n = 1
      } else if (x < 469) {
        n = 2
      } else if (x < 608) {
        n = 3
      } else if (x < 747) {
        n = 4
      } else if (x < 887) {
        n = 5
      }
      if (n > 0) {
        slider.noUiSlider.set(n)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_vars.scss";

#slider {
  position: absolute;
  z-index: 9999;
  width: 840px;
  height: 77px;
  //margin-left: ($screen-width - 700) / 2;
  margin-left: 52px;
}

.noUi-origin {
  width: 140px;
  height: 77px;
}

.noUi-target {
  background-position: 140px 0 !important;
  background-repeat: no-repeat !important;
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
}

.noUi-handle {
  margin-left: -5px !important;
  left: 0 !important;
  top: -35px !important;
  width: 150px !important;
  height: 150px !important;
  border: 10px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 30px 4px #000, inset 0 0 30px 4px #000;
  background-color: transparent;
  //cursor: none !important;
  &:before {
    background: transparent !important;
  }
  &:after {
    background: transparent !important;
  }
}

.slider-a {
  background-image: url('/static/images/story-a-1-slider-bar.png');
}
.slider-b {
  background-image: url('/static/images/story-b-1-slider-bar.png');
}
.slider-c {
  background-image: url('/static/images/story-c-1-slider-bar.png');
}
.slider-e {
  background-image: url('/static/images/story-e-1-slider-bar.png');
}

.slider {

  .slider-cue {
    pointer-events: none;
    position: absolute;
    margin-top: 130px;
    margin-left: (($screen-width - 312) / 2) - $content-padding;
    width: 312px;
    height: 33px;
    font-size: $story-caption-head-font-size;
    font-weight: $story-caption-head-font-weight;
    vertical-align: middle;
    text-align: center;
    text-shadow: 2px 2px #000;
  }

}

</style>
