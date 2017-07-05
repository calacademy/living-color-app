<template>
  <div class="swipe" id="swipe" :class="'swipe-' + story">
    <div class="swipe-wrap">
      <div class="swiper" id="swiper">
        <div class="swipe-wrapper">
          <div class="tap-bar" id="tap-bar" />
          <div class="swipe-handle" id="swipe-handle" />
        </div>
      </div>
    </div>
    <div class="bg-swiper-bar" />
    <div class="slider-cue">Slide to Explore</div>
  </div>
</template>

<script>
// var timerDelay

export default {
  name: 'swipe',
  props: ['story'],
  data () {
    return {
      selectedSlide: 1
    }
  },

  mounted: function () {
    var self = this
    var swipe = {
      el: {
        swipeHandle: document.getElementById('swipe-handle'),
        tapBar: document.getElementById('tap-bar')
      },
      swipeWidth: 130,
      touchstartx: undefined,
      touchmovex: undefined,
      movex: undefined,
      index: 0,
      init: function () {
        this.bindUIEvents()
      },
      bindUIEvents: function () {
        this.el.swipeHandle.addEventListener('touchstart', function (event) {
          swipe.start(event)
        })
        this.el.swipeHandle.addEventListener('touchmove', function (event) {
          swipe.move(event)
        })
        this.el.swipeHandle.addEventListener('touchend', function (event) {
          swipe.end(event)
        })
        this.el.tapBar.addEventListener('click', function (event) {
          swipe.click(event)
        })
      },
      start: function (event) {
        this.el.swipeHandle.classList.remove('animate')
        this.touchstartx = event.touches[0].pageX
      },
      move: function (event) {
        this.touchmovex = event.touches[0].pageX
        this.movex = this.touchmovex - 235
        if ((this.movex > 25) && (this.movex < 590)) {
          this.el.swipeHandle.style.transform = 'translate3d(' + this.movex + 'px,0,0)'
        }
        var x = this.movex
        if (x <= 95) {
          self.updateValue(1)
        } else if (x <= 235) {
          self.updateValue(2)
        } else if (x <= 375) {
          self.updateValue(3)
        } else if (x <= 515) {
          self.updateValue(4)
        } else if (x > 515) {
          self.updateValue(5)
        }
      },
      end: function (event) {
        this.el.swipeHandle.className += ' animate'
        var rect = swipe.el.swipeHandle.getBoundingClientRect()
        var left = rect.left - 155
        if (left <= 95) {
          swipe.el.swipeHandle.style.transform = 'translate3d(25px,0,0)'
          self.updateValue(1)
        } else if (left <= 235) {
          swipe.el.swipeHandle.style.transform = 'translate3d(165px,0,0)'
          self.updateValue(2)
        } else if (left <= 375) {
          swipe.el.swipeHandle.style.transform = 'translate3d(305px,0,0)'
          self.updateValue(3)
        } else if (left <= 515) {
          swipe.el.swipeHandle.style.transform = 'translate3d(445px,0,0)'
          self.updateValue(4)
        } else if (left > 515) {
          swipe.el.swipeHandle.style.transform = 'translate3d(585px,0,0)'
          self.updateValue(5)
        }
      },
      click: function (e) {
        var x = e.clientX
        if (x <= 333) {
          swipe.el.swipeHandle.style.transform = 'translate3d(25px,0,0)'
          self.updateValue(1)
        } else if (x <= 471) {
          swipe.el.swipeHandle.style.transform = 'translate3d(165px,0,0)'
          self.updateValue(2)
        } else if (x <= 612) {
          swipe.el.swipeHandle.style.transform = 'translate3d(305px,0,0)'
          self.updateValue(3)
        } else if (x <= 753) {
          swipe.el.swipeHandle.style.transform = 'translate3d(445px,0,0)'
          self.updateValue(4)
        } else if (x > 753) {
          swipe.el.swipeHandle.style.transform = 'translate3d(585px,0,0)'
          self.updateValue(5)
        }
      }
    }
    swipe.init()
  },
  methods: {
    updateValue: function (val) {
      this.selectedSlide = val
      this.$parent.activeSlide = val
      this.$parent.$parent.$options.methods.registerLastUserEventFromChild(this.$parent.$parent, this.story, 'slider', this.selectedSlide)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.swipe-a {
  .bg-swiper-bar {
    background-image: url('/static/images/story-a-1-slider-bar.png');
  }
}
.swipe-b {
  .bg-swiper-bar {
    background-image: url('/static/images/story-b-1-slider-bar.png');
  }
}
.swipe-c {
  .bg-swiper-bar {
    background-image: url('/static/images/story-c-1-slider-bar.png');
  }
}
.swipe-e {
  .bg-swiper-bar {
    background-image: url('/static/images/story-e-1-slider-bar.png');
  }
}

.swipe {
position: absolute;
left: 150px;
width: 780px;
height: 230px;
text-align: middle;

  .bg-swiper-bar {
    position: absolute;
    z-index: 1;
    width: 700px;
    height: 77px;
    margin-left: 40px;
    margin-top: 76px;
    background-position: center;
    background-repeat: no-repeat;
  }


  .swipe-wrap {
    position: absolute;
    z-index: 2;
    width: 780px;
    height: 230px;
    left: 0px;
    top: 0px;
    .swiper {
      width: 780px;
      height: 230px;
      .swipe-wrapper {
        width: 780px;
        height: 230px;
        position: relative;
        overflow: hidden;
        .tap-bar {
          position: absolute;
          z-index: 0;
          width: 700px;
          height: 77px;
          margin-left: 40px;
          margin-top: 76px;
          background-color: transparent;
        }
        .swipe-handle {
          position: absolute;
          z-index: 1;
          transform: translatex(25px);
          width: 130px;
          height: 130px;
          border: 10px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 30px 4px #000, inset 0 0 30px 4px #000;
          background-color: transparent;
          margin-top: 40px;
          margin-left: 10px;
        }
      }
    }
  }
  .animate {
    transition: transform 0.1s ease-out;
  }
  .slider-cue {
    pointer-events: none;
    position: absolute;
    margin-top: 210px;
    width: 100%;
    height: 33px;
    font-size: $story-caption-head-font-size;
    font-weight: $slider-caption-font-weight;
    vertical-align: middle;
    text-align: center;
    text-shadow: 2px 2px #000;
  }
}

</style>
