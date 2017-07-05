<template>
  <div id="story-c-2" class="story">
    <div class="story-content-container">
      <div class="story-explore">
        <ul>
          <li :class="{ visited: (this.$parent.storyAExplore1Visited === true) }" @click="userActionHandler('/c/3')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Value of Collections</h1>
              <h2>What&rsquo;s related to a<br />harlequin poison frog?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore2Visited === true) }" @click="userActionHandler('/c/4')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Look Closer</h1>
              <h2>Where does this frog<br />get its poison?</h2>
            </div>
          </li>
          <li :class="{ visited: (this.$parent.storyAExplore3Visited === true) }" @click="userActionHandler('/c/5')">
            <div class="explore-item-fader" />
            <div class="explore-item-text">
              <h1>Fun Facts</h1>
              <h2>What do young harlequin<br />poison frogs eat?</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'story-c-2',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    userActionHandler: function (target) {
      switch (target) {
        case '/c/3':
          this.$parent.storyAExplore1Visited = true
          break
        case '/c/4':
          this.$parent.storyAExplore2Visited = true
          break
        case '/c/5':
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

#story-c-2 {
  width: $screen-width;
  height: $screen-height;
  .story-explore {
    background-image: url('/static/images/explore-c-top.png');
    background-position: center top;
    ul {
      li:nth-child(1){
        background-image: url('/static/images/explore-c-item-1.png');
      }
      li:nth-child(2){
        background-image: url('/static/images/explore-c-item-2.png');
      }
      li:nth-child(3){
        background-image: url('/static/images/explore-c-item-3.png');
      }
    }
  }
}

</style>
