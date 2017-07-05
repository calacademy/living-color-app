<template>
  <div id="story-d" class="story" @click="userActionHandler('story-splash-page')">
    <div class="story-content-container">
      <div class="name-container">
        <h1 v-html="header"></h1>
        <h2 v-html="subheader"></h2>
      </div>
    </div>
  </div>
</template>

<script>
var timerRouter
export default {
  name: 'story-d',
  data () {
    return {
      header: 'Stone<br />Scorpionfish',
      subheader: 'Scorpaena mystes'
    }
  },
  methods: {
    userActionHandler: function (ui) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent, 'd', ui)
      this.$router.push('/d/1')
    }
  },
  mounted: function () {
    this.$parent.$options.methods.resetStoryExploreVisitData(this.$parent)
    timerRouter = setTimeout(() => this.$router.push('/d/1'), (2000))
  },
  destroyed: function () {
    clearTimeout(timerRouter)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-d {
  width: $screen-width;
  height: $screen-height;
  background-image: url('/static/images/slide-fish.png');
  .name-container {
    position: absolute;
    top: 1260px;
  }
}

</style>
