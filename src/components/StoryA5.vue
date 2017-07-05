<template>
  <div id="story-a-5" class="story">
    <div class="story-content-container">
      <revealPlusPlus story="a" />
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
import RevealPlusPlus from './RevealPlusPlus'

export default {
  name: 'story-a-5',
  components: {
    RevealPlusPlus
  },
  data () {
    return {
      header: 'Where can you<br />see sea slugs?',
      description: '' +
      'With more than 2,000 known species,<br />the Coral Triangle bioregion in the ' +
      'Philippines showcases the stunning diversity of nudibranchs. Closer to home, ' +
      'you can spot brightly colored sea slugs like the opalescent nudibranch in ' +
      'California&rsquo;s coastal tidepools. '
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

#story-a-5 {
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
