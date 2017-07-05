<template>
  <div id="app">
    <spinner :show="!loaded"></spinner>
    <div id="asset-preloader" :class="{ show: loaded === false }">
      <img src="/static/images/bubble-fish-62.png" />
      <img src="/static/images/bubble-frog-62.png" />
      <img src="/static/images/bubble-nudibranch-62.png" />
      <img src="/static/images/bubble-seahorse-62.png" />
      <img src="/static/images/bubble-skink-62.png" />
      <img src="/static/images/explore-a-item-1.png" />
      <img src="/static/images/explore-a-item-2.png" />
      <img src="/static/images/explore-a-item-3.png" />
      <img src="/static/images/explore-a-top.png" />
      <img src="/static/images/explore-b-item-1.png" />
      <img src="/static/images/explore-b-item-2.png" />
      <img src="/static/images/explore-b-item-3.png" />
      <img src="/static/images/explore-b-top.png" />
      <img src="/static/images/explore-c-item-1.png" />
      <img src="/static/images/explore-c-item-2.png" />
      <img src="/static/images/explore-c-item-3.png" />
      <img src="/static/images/explore-c-top.png" />
      <img src="/static/images/explore-d-item-1.png" />
      <img src="/static/images/explore-d-item-2.png" />
      <img src="/static/images/explore-d-item-3.png" />
      <img src="/static/images/explore-d-top.png" />
      <img src="/static/images/explore-e-item-1.png" />
      <img src="/static/images/explore-e-item-2.png" />
      <img src="/static/images/explore-e-item-3.png" />
      <img src="/static/images/explore-e-top.png" />
      <img src="/static/images/slide-fish.png" />
      <img src="/static/images/slide-frog.png" />
      <img src="/static/images/slide-nudibranch.png" />
      <img src="/static/images/slide-seahorse.png" />
      <img src="/static/images/slide-skink.png" />
      <img src="/static/images/story-a-1-slider-bar.png" />
      <img src="/static/images/story-a-1-spotlight-1.png" />
      <img src="/static/images/story-a-1-spotlight-2.png" />
      <img src="/static/images/story-a-1-spotlight-3.png" />
      <img src="/static/images/story-a-1-spotlight-4.png" />
      <img src="/static/images/story-a-1-spotlight-5.png" />
      <img src="/static/images/story-a-3-reveal-hide-bg.png" />
      <img src="/static/images/story-a-3-reveal-show-bg.png" />
      <img src="/static/images/story-a-4-popup-feature.png" />
      <img src="/static/images/story-a-5-reveal-hide-bg.png" />
      <img src="/static/images/story-a-5-reveal-show-bg.png" />
      <img src="/static/images/story-b-1-slider-bar.png" />
      <img src="/static/images/story-b-1-spotlight-bg-1.png" />
      <img src="/static/images/story-b-1-spotlight-bg-2.png" />
      <img src="/static/images/story-b-1-spotlight-bg-3.png" />
      <img src="/static/images/story-b-1-spotlight-bg-4.png" />
      <img src="/static/images/story-b-1-spotlight-bg-5.png" />
      <img src="/static/images/story-b-1-spotlight-ob-1.png" />
      <img src="/static/images/story-b-1-spotlight-ob-2.png" />
      <img src="/static/images/story-b-1-spotlight-ob-3.png" />
      <img src="/static/images/story-b-1-spotlight-ob-4.png" />
      <img src="/static/images/story-b-1-spotlight-ob-5.png" />
      <img src="/static/images/story-b-3-zoom-feature.png" />
      <img src="/static/images/story-b-3-zoom-focus.png" />
      <img src="/static/images/story-b-4-image-1.png" />
      <img src="/static/images/story-b-4-image-2.png" />
      <img src="/static/images/story-c-1-slider-bar.png" />
      <img src="/static/images/story-c-1-spotlight-1.png" />
      <img src="/static/images/story-c-1-spotlight-2.png" />
      <img src="/static/images/story-c-1-spotlight-3.png" />
      <img src="/static/images/story-c-1-spotlight-4.png" />
      <img src="/static/images/story-c-1-spotlight-5.png" />
      <img src="/static/images/story-c-3-reveal-hide-bg.png" />
      <img src="/static/images/story-c-3-reveal-show-bg.png" />
      <img src="/static/images/story-c-4-popup-feature.png" />
      <img src="/static/images/story-c-5-zoom-feature.png" />
      <img src="/static/images/story-c-5-zoom-focus.png" />
      <img src="/static/images/story-d-3-specimen-1.png" />
      <img src="/static/images/story-d-3-specimen-2.png" />
      <img src="/static/images/story-d-4-reveal-hide-bg.png" />
      <img src="/static/images/story-d-4-reveal-show-bg.png" />
      <img src="/static/images/story-d-5-popup-feature.png" />
      <img src="/static/images/story-e-1-slider-bar.png" />
      <img src="/static/images/story-e-1-spotlight-1.png" />
      <img src="/static/images/story-e-1-spotlight-2.png" />
      <img src="/static/images/story-e-1-spotlight-3.png" />
      <img src="/static/images/story-e-1-spotlight-4.png" />
      <img src="/static/images/story-e-1-spotlight-5.png" />
      <img src="/static/images/story-e-3-reveal-hide-bg.png" />
      <img src="/static/images/story-e-3-reveal-show-bg.png" />
      <img src="/static/images/story-e-4-popup-feature.png" />
      <img src="/static/images/story-e-4-popup-plus-1.png" />
      <img src="/static/images/story-e-4-popup-plus-2.png" />
      <img src="/static/images/story-e-4-popup-plus-3.png" />
      <img src="/static/images/story-e-4-popup-plus-4.png" />
      <img src="/static/images/story-e-4-popup-plus-5.png" />
      <img src="/static/images/story-e-4-popup-plus-6.png" />
      <img src="/static/images/story-e-5-image-1.png" />
      <img src="/static/images/story-e-5-image-2.png" />
    </div>
    <div id="story-container">
      <transition name="fade" mode="out-in">
        <router-view v-bind:slide="slideView"></router-view>
      </transition>
    </div>
    <div id="slideshow-container" :class="{ show: (this.$route.path === '/') }">
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="slideView"></component>
      </transition>
    </div>
    <nav id="nav">
      <ul>
        <router-link tag="li" id="nav-li-c" to="/c" :event="['mousedown', 'touchstart']" @touchstart.native="registerLastUserEventFromApp('c', 'main-navigation')">
          <div class="nav-icon" id="nav-icon-c" :class="{ active: ((this.$route.path.indexOf('/c') > -1) || (this.slideView === 'slide-3')) }" @touchstart.native="registerLastUserEventFromApp('c', 'main-navigation')" />
          <div class="nav-text" id="nav-text-c" :class="{ active: ((this.$route.path.indexOf('/c') > -1) || (this.slideView === 'slide-3')) }" @touchstart.native="registerLastUserEventFromApp('c', 'main-navigation')">Harlequin<br />Frog</div>
        </router-link>
        <router-link tag="li" id="nav-li-e" to="/e" :event="['mousedown', 'touchstart']" @touchstart.native="registerLastUserEventFromApp('e', 'main-navigation')">
          <div class="nav-icon" id="nav-icon-e" :class="{ active: ((this.$route.path.indexOf('/e') > -1) || (this.slideView === 'slide-5')) }" @touchstart.native="registerLastUserEventFromApp('e', 'main-navigation')" />
          <div class="nav-text" id="nav-text-e" :class="{ active: ((this.$route.path.indexOf('/e') > -1) || (this.slideView === 'slide-5')) }" @touchstart.native="registerLastUserEventFromApp('e', 'main-navigation')">Emerald<br />Skink</div>
        </router-link>
        <router-link tag="li" id="nav-li-a" to="/a" :event="['mousedown', 'touchstart']" @touchstart.native="registerLastUserEventFromApp('a', 'main-navigation')">
          <div class="nav-icon" id="nav-icon-a" :class="{ active: ((this.$route.path.indexOf('/a') > -1) || (this.slideView === 'slide-1')) }" @touchstart.native="registerLastUserEventFromApp('a', 'main-navigation')" />
          <div class="nav-text" id="nav-text-a" :class="{ active: ((this.$route.path.indexOf('/a') > -1) || (this.slideView === 'slide-1')) }" @touchstart.native="registerLastUserEventFromApp('a', 'main-navigation')">Anna's<br />Chromodoris</div>
        </router-link>
        <router-link tag="li" id="nav-li-d" to="/d" :event="['mousedown', 'touchstart']" @touchstart.native="registerLastUserEventFromApp('d', 'main-navigation')">
          <div class="nav-icon" id="nav-icon-d" :class="{ active: ((this.$route.path.indexOf('/d') > -1) || (this.slideView === 'slide-4')) }" @touchstart.native="registerLastUserEventFromApp('d', 'main-navigation')" />
          <div class="nav-text" id="nav-text-d" :class="{ active: ((this.$route.path.indexOf('/d') > -1) || (this.slideView === 'slide-4')) }" @touchstart.native="registerLastUserEventFromApp('d', 'main-navigation')">Stone<br />Scorpionfish</div>
        </router-link>
        <router-link tag="li" id="nav-li-b" to="/b" :event="['mousedown', 'touchstart']" @touchstart.native="registerLastUserEventFromApp('b', 'main-navigation')">
          <div class="nav-icon" id="nav-icon-b" :class="{ active: ((this.$route.path.indexOf('/b') > -1) || (this.slideView === 'slide-2')) }" @touchstart.native="registerLastUserEventFromApp('b', 'main-navigation')" />
          <div class="nav-text" id="nav-text-b" :class="{ active: ((this.$route.path.indexOf('/b') > -1) || (this.slideView === 'slide-2')) }" @touchstart.native="registerLastUserEventFromApp('b', 'main-navigation')">Pacific<br />Seahorse</div>
        </router-link>
      </ul>
    </nav>
    <div id="btn-credits" :class="{ show: this.showCreditsButton() }" @click="registerCreditsUserSelect" />
    <transition name="credits">
      <credits :show="showCredits" v-if="showCredits" />
    </transition>
  </div>
</template>

<script>
var timerLoaded
import Spinner from './components/Spinner'
import Credits from './components/Credits'

export default {
  name: 'app',
  data () {
    return {
      loaded: false,
      slideView: null,
      currentRoutePath: null,
      dateLastUserEvent: null,
      storyAExplore1Visited: null,
      storyAExplore2Visited: null,
      storyAExplore3Visited: null,
      showCredits: false
    }
  },
  components: {
    Spinner,
    'slide-3': {
      template: '<div class="slide" id="slide-3" />'
    },
    'slide-5': {
      template: '<div class="slide" id="slide-5" />'
    },
    'slide-1': {
      template: '<div class="slide" id="slide-1" />'
    },
    'slide-4': {
      template: '<div class="slide" id="slide-4" />'
    },
    'slide-2': {
      template: '<div class="slide" id="slide-2" />'
    },
    Credits
  },
  mounted: function () {
    var self = this
    this.intervalPathWatcher = setInterval(function () {
      self.currentRoutePath = self.$route.path
    }, 500)
    this.intervalInactivityWatcher = setInterval(function () {
      let user = self.dateLastUserEvent
      var seconds = 30 * 1000
      var now = new Date()
      var check = new Date(now.getTime() - (seconds))
      if (user !== null) {
        if (user < check) {
          self.dateLastUserEvent = null
          self.showCredits = false
          self.$router.push('/')
        }
      }
    }, 5000)
    timerLoaded = setTimeout(function () {
      self.loaded = true
    }, (90000)) // 90 sec for prod
    this.autoNavigateApp() // turn on for prod
  },
  methods: {
    nextSlide: function () {
      var currSlide = this.slideView
      if (currSlide === 'slide-3') {
        this.slideView = 'slide-5'
      } else if (currSlide === 'slide-5') {
        this.slideView = 'slide-1'
      } else if (currSlide === 'slide-1') {
        this.slideView = 'slide-4'
      } else if (currSlide === 'slide-4') {
        this.slideView = 'slide-2'
      } else if (currSlide === 'slide-2') {
        this.slideView = 'slide-3'
      }
    },
    registerLastUserEventFromChild: function (self, story, ui, wi) {
      self._data.dateLastUserEvent = new Date()
      this.googleTagManagerEventSend(story, ui, wi)
    },
    registerLastUserEventFromApp: function (story, ui) {
      this.dateLastUserEvent = new Date()
      this.googleTagManagerEventSend(story, ui)
    },
    registerCreditsUserSelect: function () {
      this.dateLastUserEvent = new Date()
      this.googleTagManagerEventSend('credits', 'photo-credits-button')
      this.showCredits = true
    },
    resetStoryExploreVisitData: function (self) {
      self._data.storyAExplore1Visited = null
      self._data.storyAExplore2Visited = null
      self._data.storyAExplore3Visited = null
    },
    autoNavigateApp: function () {
      var self = this
      var arrayPagePaths = ['a', 'b', 'c', 'd', 'e']
      var intStoryExtraPages = 5
      var intDelay = 18000
      arrayPagePaths.forEach(function (x, i) {
        var strPath = '/' + x
        for (var j = 0; j <= intStoryExtraPages; ++j) {
          if (j === 0) {
            setTimeout(() => self.$router.push(strPath), (intDelay))
            intDelay += 2000
          } else {
            let strPathDeep = strPath + '/' + j
            setTimeout(() => self.$router.push(strPathDeep), (intDelay))
            intDelay += 2000
          }
        }
      })
      setTimeout(() => self.$router.push('/'), (intDelay))
    },
    googleTagManagerEventSend: function (story, ui, wi) {
      if ((story) && (ui)) {
        var category = null
        var action = null
        var label = null

        // CONTENT-ORIENTED EVENTS SCHEMA

        // descriptive story name trans
        switch (story) {
          case 'c':
            category = 'CONTENT Harlequin Frog'
            break
          case 'e':
            category = 'CONTENT Emerald Skink'
            break
          case 'a':
            category = 'CONTENT Annas Chromodoris'
            break
          case 'd':
            category = 'CONTENT Stone Scorpionfish'
            break
          case 'b':
            category = 'CONTENT Pacific Seahorse'
            break
          case 'credits':
            category = 'CONTENT Photo Credits'
            break
          default:
            break
        }

        switch (ui) {
          case 'main-navigation':
            action = 'Navigation To Via'
            label = 'Main Navigation'
            break
          case 'intro-slideshow':
            action = 'Navigation To Via'
            label = 'Intro Slideshow'
            break
          case 'story-splash-page':
            action = 'Anxious Selection'
            label = 'Splash Page'
            break
          case 'popup':
            action = 'Widget Popup Selection'
            label = 'Item ' + wi
            break
          case 'popup-plus':
            action = 'Widget Popup Selection'
            label = 'Item ' + wi
            break
          case 'slider':
            action = 'Widget Slider Selection'
            label = 'Item ' + wi
            break
          case 'reveal':
            action = 'Widget Show Hide Selection'
            label = 'Button'
            break
          case 'photo-credits-button':
            action = 'Photo Credits Selection'
            label = 'Button'
            break
          default:
            break
        }

        if (category && action && label) {
          // console.log(category, action, label)
          window.dataLayer.push({
            'event': 'lc-event-trigger',
            'lc-category': category,
            'lc-action': action,
            'lc-label': label
          })
        }

        // UI-ORIENTED EVENTS SCHEMA

        category = null
        action = null
        label = null

        // descriptive story name trans
        switch (ui) {
          case 'intro-slideshow':
            category = 'UI Intro Slideshow'
            action = 'Select Story'
            break
          case 'main-navigation':
            category = 'UI Main Navigation'
            action = 'Select Story'
            break
          case 'story-splash-page':
            category = 'UI Story Splash Page'
            action = 'Anxious Select'
            break
          case 'popup':
            category = 'UI Widget Engagement'
            action = 'Popup Select'
            break
          case 'popup-plus':
            category = 'UI Widget Engagement'
            action = 'Popup Select'
            break
          case 'slider':
            category = 'UI Widget Engagement'
            action = 'Slider Select'
            break
          case 'reveal':
            category = 'UI Widget Engagement'
            action = 'Show Hide Select'
            break
          case 'photo-credits-button':
            category = 'UI Photo Credits Button'
            action = 'Select'
            break
          default:
            break
        }

        switch (story) {
          case 'c':
            label = 'Harlequin Frog'
            break
          case 'e':
            label = 'Emerald Skink'
            break
          case 'a':
            label = 'Annas Chromodoris'
            break
          case 'd':
            label = 'Stone Scorpionfish'
            break
          case 'b':
            label = 'Pacific Seahorse'
            break
          case 'credits':
            label = 'Photo Credits'
            break
          default:
            break
        }

        if (label && wi) {
          label += ' ' + wi
        }

        if (category && action && label) {
          // console.log(category, action, label)
          window.dataLayer.push({
            'event': 'lc-event-trigger',
            'lc-category': category,
            'lc-action': action,
            'lc-label': label
          })
        }
      }
    },
    showCreditsButton: function () {
      if (
        ((this.$route.path.indexOf('/a/') > -1) ||
        (this.$route.path.indexOf('/b/') > -1) ||
        (this.$route.path.indexOf('/c/') > -1) ||
        (this.$route.path.indexOf('/d/') > -1) ||
        (this.$route.path.indexOf('/e/') > -1)) &&
        (this.showCredits === false)
      ) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    currentRoutePath: function (val, oldVal) {
      if (val === '/') {
        this.slideView = 'slide-3'
        this.intervalSlideshow = setInterval(() => this.nextSlide(), (4000))
      } else {
        clearInterval(this.intervalSlideshow)
        this.slideView = null
      }
    }
  },
  destroyed: function () {
    clearTimeout(timerLoaded)
  }
}
</script>

<style src="./styles/global.scss" lang="scss"></style>
