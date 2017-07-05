<template>
  <div :class="{ open: isOpen }" class="reveal" :id="'reveal-' + story">
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
  name: 'reveal',
  data () {
    return {
      isOpen: false,
      btn1: null,
      btn2: null
    }
  },
  props: ['story'],
  mounted: function () {
    if (this.story === 'e') {
      this.btn1 = 'SEE LIVING COLOR'
      this.btn2 = 'SHOW SPECIMEN'
    } else if (this.story === 'd') {
      this.btn1 = 'SHOW'
      this.btn2 = 'HIDE'
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
.reveal {
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
    top: 1000px;

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

  &#reveal-d {
    transition: background-image 1s linear;
    background-image: url('/static/images/story-d-4-reveal-hide-bg.png');
    &.open {
      background-image: url('/static/images/story-d-4-reveal-show-bg.png');
    }
    .show-hide-button {
      top: 1040px;
    }
  }

  &#reveal-e {
    transition: background-image 1s linear;
    background-image: url('/static/images/story-e-3-reveal-hide-bg.png');
    &.open {
      background-image: url('/static/images/story-e-3-reveal-show-bg.png');
    }
    .show-hide-button {
      top: 980px;
    }
  }

}
</style>
