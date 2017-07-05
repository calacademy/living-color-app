<template>
  <div id="story-a" class="story" @click="userActionHandler('story-splash-page')">
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
  name: 'story-a',
  data () {
    return {
      header: 'Anna&rsquo;s<br />Chromodoris',
      subheader: 'Chromodoris annae'
    }
  },
  methods: {
    userActionHandler: function (ui) {
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent, 'a', ui)
      this.$router.push('/a/1')
    }
  },
  mounted: function () {
    this.$parent.$options.methods.resetStoryExploreVisitData(this.$parent)
    timerRouter = setTimeout(() => this.$router.push('/a/1'), (2000))
  },
  destroyed: function () {
    clearTimeout(timerRouter)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-a {
  width: $screen-width;
  height: $screen-height;
  background-image: url('/static/images/slide-nudibranch.png');
  .name-container {
    position: absolute;
    top: 1225px;
  }
}

</style>
