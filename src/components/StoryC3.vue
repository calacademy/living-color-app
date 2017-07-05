<template>
  <div id="story-c-3" class="story">
    <div class="story-content-container">
      <revealPlus story="c" />
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
  name: 'story-c-3',
  components: {
    RevealPlus
  },
  data () {
    return {
      header: 'What&rsquo;s related to a<br />harlequin poison frog?',
      description: '' +
      '<i>Oophaga histrionica</i> and <i>Oophaga sylvatica</i><br />can look very similar, ' +
      'and they used to be considered one species. The Academy&rsquo;s collection helped ' +
      'scientists distinguish the two species in 1956. Careful study of specimens ' +
      'revealed their differences.'
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/c/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-c-3 {
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
