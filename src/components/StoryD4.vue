<template>
  <div id="story-d-4" class="story">
    <div class="story-content-container">
      <reveal story="d" />
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
  name: 'story-d-4',
  components: {
    Reveal
  },
  data () {
    return {
      header: 'What makes this<br />fish <nobr>stone-like</nobr>?',
      description: '' +
      'Color, skin flaps, and tassels all help these<br />fish disappear, ' +
      'whether they&rsquo;re perched on ocean rocks or resting on sand. By ' +
      'staying very still, stone scorpionfish can ambush unsuspecting prey.'
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/d/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-d-4 {
  width: $screen-width;
  height: $screen-height;
  .feature-intro-info{
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
