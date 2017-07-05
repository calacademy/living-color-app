<template>
  <div id="story-a-3" class="story">
    <div class="story-content-container">
      <revealPlus story="a" />
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
import RevealPlus from './RevealPlus'

export default {
  name: 'story-a-3',
  components: {
    RevealPlus
  },
  data () {
    return {
      header: 'Why collect these<br />tiny treasures?',
      description: '' +
      'Nudibranchs have a special place at the Academy. Despite their small ' +
      'size, these specimens can provide scientists with a wealth of ' +
      'information: evidence of new species, insight into evolutionary ' +
      'relationships, and clues to the health<br />of our oceans.'
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/a/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-a-3 {
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
