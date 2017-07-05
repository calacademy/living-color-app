<template>
  <div id="story-d-2" class="story">
    <div class="story-content-container">
      <div class="story-explore">
        <ul>
          <li :class="{ visited: (this.$parent.storyAExplore1Visited === true) }" @click="userActionHandler('/d/3')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Value of Collections</h1>
              <h2>Why does the Academy<br />keep specimens?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore2Visited === true) }" @click="userActionHandler('/d/4')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Look Closer</h1>
              <h2>What makes this<br />fish stone-like?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore3Visited === true) }" @click="userActionHandler('/d/5')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Fun Facts</h1>
              <h2>Why is it called<br />a scorpionfish?</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'story-d-2',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    userActionHandler: function (target) {
      switch (target) {
        case '/d/3':
          this.$parent.storyAExplore1Visited = true
          break
        case '/d/4':
          this.$parent.storyAExplore2Visited = true
          break
        case '/d/5':
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

#story-d-2 {
  width: $screen-width;
  height: $screen-height;
  .story-explore {
    background-image: url('/static/images/explore-d-top.png');
    background-position: center top;
    ul {
      li:nth-child(1){
        background-image: url('/static/images/explore-d-item-1.png');
      }
      li:nth-child(2){
        background-image: url('/static/images/explore-d-item-2.png');
      }
      li:nth-child(3){
        background-image: url('/static/images/explore-d-item-3.png');
      }
    }
  }
}

</style>
