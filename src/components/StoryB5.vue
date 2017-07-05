<template>
  <div id="story-b-5" class="story">
    <div class="story-content-container">
      <div class="movie-container">
        <video autobuffer autoplay loop preload="auto">
          <source id="mp4" src="/static/movies/story-b-5-movie.mov" type="video/mp4">
        </video>
      </div>
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

export default {
  name: 'story-b-5',
  data () {
    return {
      header: 'What makes the Pacific seahorse unique?',
      description: '' +
      'Pacific seahorses are one of the largest seahorse species alive, ' +
      'growing up to<br />30 cm (12 in) in length. Like all seahorses, they ' +
      'have a horse-like head, a monkey-like tail, a kangaroo-like pouch, ' +
      'and the males give birth!'
    }
  },
  methods: {
    userActionHandler: function (event) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push('/b/2')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-b-5 {
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
  video {
  	z-index: 1;
  	border: 0;
  	position: absolute;
    top: 400px;
    left: 0;
  	//height: 1920px;
  	width: 1080px;
  }
}

</style>
