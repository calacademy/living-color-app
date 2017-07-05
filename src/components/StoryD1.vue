<template>
  <div id="story-d-1" class="story">
    <div class="story-content-container">
      <div class="movie-container">
        <video autobuffer autoplay loop preload="auto">
          <source id="mp4" src="/static/movies/story-d-1-movie.mov" type="video/mp4">
        </video>
      </div>
      <div class="feature-intro-info">
        <h1 v-html="header"></h1>
        <p v-html="description"></p>
      </div>
      <div class="cta-container">
        <button class="forward" @click="userActionHandler"></button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'story-d-1',
  data () {
    return {
      header: 'Fish flag',
      description: '' +
      'Color patterns on the dorsal fin mimic small fish, and may help to ' +
      'lure in potential prey. With their huge mouths, scorpionfish can ' +
      'gulp down fish fooled by their display.'
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

#story-d-1 {
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
