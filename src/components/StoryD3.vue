<template>
  <div id="story-d-3" class="story">
    <div class="story-content-container">
      <specimenMorph story="d" />
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
import SpecimenMorph from './SpecimenMorph'

export default {
  name: 'story-d-3',
  components: {
    SpecimenMorph
  },
  data () {
    return {
      header: 'Why does the Academy<br />keep specimens?',
      description: '' +
      'With at least 1.2 million specimens of 11,000 species, the ' +
      'Academy&rsquo;s fish collection offers an incredible library ' +
      'of life. Scientists around the world borrow thousands of ' +
      'specimens each year to unlock new knowledge of how our world works.'
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

#story-d-3 {
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
