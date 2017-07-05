<template>
  <div class="spotlight-simple">
    <div class="spotlight-container">
      <div class="spotlight-fade-left" />
      <div class="spotlight-overflow" :class="'pos' + activeSlide">
        <div class="spot" v-for="(slide, index) in slides" :id="'spotlight-' + story + '-' + slide.id" :key="index">
          <caption v-html="slide.caption" />
        </div>
      </div>
      <div class="spotlight-fade-right" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'spotlight-simple',
  props: ['story', 'activeSlide'],
  created: function () {
    if (this.story === 'a') {
      this.slides = [
        {
          'id': '1',
          'caption': '<i>Chromodoris annae</i>'
        },
        {
          'id': '2',
          'caption': '<i>Chromodoris magnifica</i>'
        },
        {
          'id': '3',
          'caption': '<i>Chromodoris lochi</i>'
        },
        {
          'id': '4',
          'caption': '<i>Chromodoris dianae</i>'
        },
        {
          'id': '5',
          'caption': '<i>Chromodoris joshi</i>'
        }
      ]
    } else if (this.story === 'c') {
      this.slides = [
        {
          'id': '1',
          'caption': 'Species name here'
        },
        {
          'id': '2',
          'caption': 'Species name here'
        },
        {
          'id': '3',
          'caption': 'tbd'
        },
        {
          'id': '4',
          'caption': 'tbd'
        },
        {
          'id': '5',
          'caption': 'tbd'
        }
      ]
    }
  },
  data () {
    return {
      slides: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.spotlight-simple {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: $screen-width;

  .spotlight-container {
    position: relative;
    margin-top: 110px;
    display: inline-block;
    width: $screen-width;
    height: 600px;
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
    .spotlight-overflow {
      backface-visibility: hidden;
      position: absolute;
      width: 10000px;
      height: 600px;
      //transition: left 1s linear;
      transition: transform 0.5s linear;
      &.pos1 {
        //left: 0;
        transform: translate3d(0, 0, 0)
      }
      &.pos2 {
        //left: 0 - $screen-width;
        transform: translate3d(0 - $screen-width, 0, 0)
      }
      &.pos3 {
        //left: 0 - ($screen-width * 2);
        transform: translate3d(0 - ($screen-width * 2), 0, 0)
      }
      &.pos4 {
        //left: 0 - ($screen-width * 3);
        transform: translate3d(0 - ($screen-width * 3), 0, 0)
      }
      &.pos5 {
        //left: 0 - ($screen-width * 4);
        transform: translate3d(0 - ($screen-width * 4), 0, 0)
      }
      .spot {
        position: relative;
        float: left;
        width: $screen-width;
        height: 600px;
        background-position: center 80px;
        background-repeat: no-repeat;
        caption {
          margin-left: 0px;
          width: $screen-width;
          display: block;
          position: absolute;
          top: 0px;
          text-align: center;
          font-size: $story-1-font-size-p;
          font-weight: $story-1-font-weight-p;
          color: $story-1-color-p;
        }
        &#spotlight-a-1 {
          background-image: url('/static/images/story-a-1-spotlight-1.png');
        }
        &#spotlight-a-2 {
          background-image: url('/static/images/story-a-1-spotlight-2.png');
        }
        &#spotlight-a-3 {
          background-image: url('/static/images/story-a-1-spotlight-3.png');
        }
        &#spotlight-a-4 {
          background-image: url('/static/images/story-a-1-spotlight-4.png');
        }
        &#spotlight-a-5 {
          background-image: url('/static/images/story-a-1-spotlight-5.png');
        }
        &#spotlight-c-1 {
          background-image: url('/static/images/story-c-1-spotlight-1.png');
        }
        &#spotlight-c-2 {
          background-image: url('/static/images/story-c-1-spotlight-2.png');
        }
        &#spotlight-c-3 {
          background-image: url('/static/images/story-c-1-spotlight-3.png');
        }
        &#spotlight-c-4 {
          background-image: url('/static/images/story-c-1-spotlight-4.png');
        }
        &#spotlight-c-5 {
          background-image: url('/static/images/story-c-1-spotlight-5.png');
        }
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
      }
    }
  }
}

</style>
