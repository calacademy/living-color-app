<template>
  <div id="story-a-2" class="story">
    <div class="story-content-container">
      <div class="story-explore">
        <ul>
          <li :class="{ visited: (this.$parent.storyAExplore1Visited === true) }" @click="userActionHandler('/a/3')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Value of Collections</h1>
              <h2>Why collect these<br />tiny treasures?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore2Visited === true) }" @click="userActionHandler('/a/4')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Look Closer</h1>
              <h2>What do you see<br />in the details?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore3Visited === true) }" @click="userActionHandler('/a/5')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Fun Facts</h1>
              <h2>Where can you<br />see sea slugs?</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'story-a-2',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    userActionHandler: function (target) {
      switch (target) {
        case '/a/3':
          this.$parent.storyAExplore1Visited = true
          break
        case '/a/4':
          this.$parent.storyAExplore2Visited = true
          break
        case '/a/5':
          this.$parent.storyAExplore3Visited = true
          break
      }
      this.$parent.$options.methods.registerLastUserEventFromChild(this.$parent)
      this.$router.push(target)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

#story-a-2 {
  width: $screen-width;
  height: $screen-height;
  .story-explore {
    background-image: url('/static/images/explore-a-top.png');
    background-position: center top;
    ul {
      li:nth-child(1){
        background-image: url('/static/images/explore-a-item-1.png');
      }
      li:nth-child(2){
        background-image: url('/static/images/explore-a-item-2.png');
      }
      li:nth-child(3){
        background-image: url('/static/images/explore-a-item-3.png');
      }
    }
  }
}

</style>
