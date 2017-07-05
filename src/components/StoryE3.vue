<template>
  <div id="story-e-3" class="story">
    <div class="story-content-container">
      <reveal story="e" />
      <div class="feature-intro-info">
        <h1 v-html="header"></h1>
        <p v-html="description"></p>
      </div>
      <div class="cta-container">
        <button class="back" @click="userActionHandler"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from './Reveal'

export default {
  name: 'story-e-3',
  components: {
    Reveal
  },
  data () {
    return {
      header: 'Why do these skink specimens change color?',
      description: '' +
      'The emerald skink turns blue when it&rsquo;s preserved. Why? Its vivid ' +
      'green comes<br />from a yellow pigment that fades in alcohol and a blue ' +
      'hue that doesn&rsquo;t. While preservation may alter an organism&rsquo;s ' +
      'color, genetic information may be available for generations to come.'
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/e/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-e-3 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info {
    position: absolute;
    bottom: 0px;
  }
  .cta-container {
    position: absolute;
    bottom: 330px;
    right: 135px;
  }
}

</style>
