<template>
  <div :class="{ open: isOpen }" class="popup-plus-fade">
    <div class="fade-bg-container">
      <div class="fade-bg-1" :class="{ show: isOpen }" />
      <div class="fade-bg-2" :class="{ show: isOpen }" />
      <div class="fade-bg-3" :class="{ show: isOpen }" />
      <div class="fade-bg-4" :class="{ show: isOpen }" />
      <div class="fade-bg-5" :class="{ show: isOpen }" />
      <div class="fade-bg-6" :class="{ show: isOpen }" />
    </div>
    <div class="popup-container" :class="{ open: isOpen }">
      <div @click="changeState" class="popup-punch" />
      <h4 v-html="eyebrow" :class="{ open: isOpen }" />
      <h3 v-html="title" :class="{ open: isOpen }" />
      <p v-html="description" :class="{ open: isOpen }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-plus-fade',
  data () {
    return {
      isOpen: false
    }
  },
  props: ['eyebrow', 'title', 'description', 'story', 'wi'],
  methods: {
    changeState: function () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
      this.$parent.$parent.$options.methods.registerLastUserEventFromChild(this.$parent.$parent, this.story, 'popup-plus', this.wi)
      this.randomizeElements()
    },
    randomizeElements: function () {
      var fadebg1 = document.querySelector('.fade-bg-1')
      var fadebg2 = document.querySelector('.fade-bg-2')
      var fadebg3 = document.querySelector('.fade-bg-3')
      var fadebg4 = document.querySelector('.fade-bg-4')
      var fadebg5 = document.querySelector('.fade-bg-5')
      var fadebg6 = document.querySelector('.fade-bg-6')

      var arr = [1, 2, 3, 4, 5, 6]
      var currentIndex = arr.length
      var temporaryValue
      var randomIndex
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temporaryValue
      }
      var arrNew = arr
      fadebg1.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[0] + '.png)'
      fadebg2.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[1] + '.png)'
      fadebg3.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[2] + '.png)'
      fadebg4.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[3] + '.png)'
      fadebg5.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[4] + '.png)'
      fadebg6.style.backgroundImage = 'url(/static/images/story-e-4-popup-plus-' + arrNew[5] + '.png)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/_vars.scss";
.popup-plus-fade {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @keyframes ppf-fadein-1 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 1; }
    30% { opacity: 1; }
    40% { opacity: 1; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes ppf-fadein-2 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 0; }
    30% { opacity: 1; }
    40% { opacity: 1; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes ppf-fadein-3 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 0; }
    30% { opacity: 0; }
    40% { opacity: 1; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes ppf-fadein-4 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 0; }
    30% { opacity: 0; }
    40% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes ppf-fadein-5 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 0; }
    30% { opacity: 0; }
    40% { opacity: 0; }
    50% { opacity: 0; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes ppf-fadein-6 {
    0% { opacity: 0; }
    10% { opacity: 0; }
    20% { opacity: 0; }
    30% { opacity: 0; }
    40% { opacity: 0; }
    50% { opacity: 0; }
    60% { opacity: 0; }
    70% { opacity: 1; }
    80% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 1; }
  }

  .fade-bg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: $screen-width;
    height: $screen-height;
    z-index: 3;

    div {
      position: absolute;
      width: $screen-width;
      height: $screen-height;
      background-repeat: no-repeat;
      opacity: 0;
    }
    .fade-bg-1 {
      z-index: 4;
      background-image: url('/static/images/story-e-4-popup-plus-1.png');
      &.show {
        animation: ppf-fadein-1 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-bg-2 {
      z-index: 5;
      background-image: url('/static/images/story-e-4-popup-plus-2.png');
      &.show {
        animation: ppf-fadein-2 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-bg-3 {
      z-index: 6;
      background-image: url('/static/images/story-e-4-popup-plus-3.png');
      &.show {
        animation: ppf-fadein-3 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-bg-4 {
      z-index: 7;
      background-image: url('/static/images/story-e-4-popup-plus-4.png');
      &.show {
        animation: ppf-fadein-4 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-bg-5 {
      z-index: 8;
      background-image: url('/static/images/story-e-4-popup-plus-5.png');
      &.show {
        animation: ppf-fadein-5 3s;
        animation-fill-mode: forwards;
      }
    }
    .fade-bg-6 {
      z-index: 9;
      background-image: url('/static/images/story-e-4-popup-plus-6.png');
      &.show {
        animation: ppf-fadein-6 3s;
        animation-fill-mode: forwards;
      }
    }
  }

  .popup-container {
    top: 820px;
    left: 430px;
    position: absolute;
    z-index: 9999;
    width: 260px;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center top;
    background-image: url('../assets/popup-open.png');
    &.open {
      background-image: url('../assets/popup-close.png');
    }

    .popup-punch {
      position: absolute;
      top: -4px;
      left: 100px;
      width: 80px;
      height: 80px;
    }
    h4 {
      margin-top: 100px;
      font-size: $story-popup-font-size-h4;
      line-height: $story-popup-line-height-h4;
      color: $story-popup-color-h4;
      font-weight: $story-popup-font-weight-h4;
      letter-spacing: $story-popup-letter-spacing-h4;
      font-style: italic;
      visibility: hidden;
      &.open {
        visibility: visible;
      }
    }
    h3 {
      font-size: $story-popup-font-size-h3;
      line-height: $story-popup-line-height-h3;
      color: $story-popup-color-h3;
      font-weight: $story-popup-font-weight-h3;
      letter-spacing: $story-popup-letter-spacing-h3;
      font-style: normal;
      visibility: hidden;
      &.open {
        visibility: visible;
      }
    }
    p {
      font-size: $story-popup-font-size-p;
      line-height: $story-popup-line-height-p;
      color: $story-popup-color-p;
      font-weight: $story-popup-font-weight-p;
      letter-spacing: $story-popup-letter-spacing-p;
      font-style: normal;
      visibility: hidden;
      &.open {
        visibility: visible;
      }
    }

  }

}
</style>
