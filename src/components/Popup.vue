<template>
  <div :class="{ open: isOpen }" class="popup">
    <div @click="changeState" class="popup-punch" />
    <h4 v-html="eyebrow" :class="{ open: isOpen }" />
    <h3 v-html="title" :class="{ open: isOpen }" />
    <p v-html="description" :class="{ open: isOpen }" />
  </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      isOpen: false
    }
  },
  props: ['eyebrow', 'title', 'description', 'story', 'wi'],
  methods: {
    changeState: function () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
      this.$parent.$parent.$options.methods.registerLastUserEventFromChild(this.$parent.$parent, this.story, 'popup', this.wi)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/_vars.scss";
.popup {

  position: absolute;
  z-index: 9999;
  width: 320px;
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
    left: 120px;
    width: 80px;
    height: 80px;
  }
  h4 {
    margin-top: 110px;
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
  &#story-a4-popup1 {
    top: 772px;
    left: 60px;
    h4 {
      margin-top: 100px;
    }
    h4, h3, p {
      margin-left: 20px;
      width: 320px;
    }
  }
  &#story-a4-popup2 {
    top: 786px;
    left: 380px;
    h4 {
      margin-top: 100px;
    }
    h4, h3, p {
      margin-left: 20px;
      width: 280px;
    }
  }
  &#story-a4-popup3 {
    top: 884px;
    left: 690px;
    h4 {
      margin-top: 100px;
    }
    h4, h3, p {
      margin-left: 20px;
      width: 340px;
    }
  }
  &#story-c4-popup1 {
    top: 880px;
    left: 60px;
    h4, h3, p {
      margin-left: 20px;
      width: 340px;
    }
  }
  &#story-c4-popup2 {
    top: 1050px;
    left: 410px;
    h4, h3, p {
      margin-left: 90px;
      width: 150px;
    }
  }
  &#story-c4-popup3 {
    top: 850px;
    left: 710px;
    h4, h3, p {
      margin-left: 35px;
      width: 310px;
    }
  }
}
</style>
