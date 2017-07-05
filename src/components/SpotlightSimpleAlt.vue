<template>
  <div class="spotlight-simple-alt">
    <div class="spotlight-container">
      <div class="spotlight-fade-left" />
      <caption id="caption-alt" v-html="caption" class="show" />
      <div class="spotlight-overflow" :class="'pos' + activeSlide">
        <div class="spot" v-for="(slide, index) in slides" :id="'spotlight-' + story + '-' + slide.id" :key="index" />
      </div>
      <div class="spotlight-fade-right" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'spotlight-simple-alt',
  props: ['story', 'activeSlide'],
  data () {
    return {
      slides: null,
      caption: null
    }
  },
  created: function () {
    if (this.story === 'e') {
      this.caption = '<i>Lamprolepis smaragdina</i>'
      this.slides = [
        {
          'id': '1'
        },
        {
          'id': '2'
        },
        {
          'id': '3'
        },
        {
          'id': '4'
        },
        {
          'id': '5'
        }
      ]
    } else if (this.story === 'c') {
      this.caption = '<i>Oophaga histrionica</i>'
      this.slides = [
        {
          'id': '1'
        },
        {
          'id': '2'
        },
        {
          'id': '3'
        },
        {
          'id': '4'
        },
        {
          'id': '5'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.spotlight-simple-alt {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: $screen-width;

  .spotlight-container {
    position: relative;
    margin-top: 196px;
    display: inline-block;
    width: $screen-width;
    height: 700px;
    overflow: hidden;
    .spotlight-fade-left {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 200px;
      height: 600px;
      background: linear-gradient(to right,
        rgba(black, 1), rgba(black, 0));
    }
    .spotlight-fade-right {
      position: absolute;
      right: 0;
      z-index: 1;
      width: 200px;
      height: 600px;
      background: linear-gradient(to left,
        rgba(black, 1), rgba(black, 0));
    }
    caption {
      opacity: 0;
      margin-left: 0;
      width: $screen-width;
      display: block;
      position: absolute;
      top: 0;
      text-align: center;
      font-size: $story-1-font-size-p;
      font-weight: $story-1-font-weight-p;
      color: $story-1-color-p;
      transition: opacity .5s linear;
      &.show {
        opacity: 1;
      }
      &.hide {
        visibility: hidden;
      }
    }
    .spotlight-overflow {
      backface-visibility: hidden;
      position: absolute;
      width: 10000px;
      height: 700px;
      transition: transform 0.5s linear;
      &.pos1 {
        transform: translate3d(0, 0, 0)
      }
      &.pos2 {
        transform: translate3d(0 - $screen-width, 0, 0)
      }
      &.pos3 {
        transform: translate3d(0 - ($screen-width * 2), 0, 0)
      }
      &.pos4 {
        transform: translate3d(0 - ($screen-width * 3), 0, 0)
      }
      &.pos5 {
        transform: translate3d(0 - ($screen-width * 4), 0, 0)
      }
      .spot {
        position: relative;
        float: left;
        width: $screen-width;
        height: 700px;
        background-position: center 80px;
        background-repeat: no-repeat;
        &#spotlight-e-1 {
          background-image: url('/static/images/story-e-1-spotlight-1.png');
        }
        &#spotlight-e-2 {
          background-image: url('/static/images/story-e-1-spotlight-2.png');
        },
        &#spotlight-e-3 {
          background-image: url('/static/images/story-e-1-spotlight-3.png');
        }
        &#spotlight-e-4 {
          background-image: url('/static/images/story-e-1-spotlight-4.png');
        }
        &#spotlight-e-5 {
          background-image: url('/static/images/story-e-1-spotlight-5.png');
        }

        &#spotlight-c-1 {
          background-image: url('/static/images/story-c-1-spotlight-1.png');
        }
        &#spotlight-c-2 {
          background-image: url('/static/images/story-c-1-spotlight-2.png');
        },
        &#spotlight-c-3 {
          background-image: url('/static/images/story-c-1-spotlight-3.png');
        }
        &#spotlight-c-4 {
          background-image: url('/static/images/story-c-1-spotlight-4.png');
        }
        &#spotlight-c-5 {
          background-image: url('/static/images/story-c-1-spotlight-5.png');
        }
      }
    }
  }
}

</style>
