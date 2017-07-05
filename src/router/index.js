import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StoryA from '@/components/StoryA'
import StoryA1 from '@/components/StoryA1'
import StoryA2 from '@/components/StoryA2'
import StoryA3 from '@/components/StoryA3'
import StoryA4 from '@/components/StoryA4'
import StoryA5 from '@/components/StoryA5'
import StoryB from '@/components/StoryB'
import StoryB1 from '@/components/StoryB1'
import StoryB2 from '@/components/StoryB2'
import StoryB3 from '@/components/StoryB3'
import StoryB4 from '@/components/StoryB4'
import StoryB5 from '@/components/StoryB5'
import StoryC from '@/components/StoryC'
import StoryC1 from '@/components/StoryC1'
import StoryC2 from '@/components/StoryC2'
import StoryC3 from '@/components/StoryC3'
import StoryC4 from '@/components/StoryC4'
import StoryC5 from '@/components/StoryC5'
import StoryD from '@/components/StoryD'
import StoryD1 from '@/components/StoryD1'
import StoryD2 from '@/components/StoryD2'
import StoryD3 from '@/components/StoryD3'
import StoryD4 from '@/components/StoryD4'
import StoryD5 from '@/components/StoryD5'
import StoryE from '@/components/StoryE'
import StoryE1 from '@/components/StoryE1'
import StoryE2 from '@/components/StoryE2'
import StoryE3 from '@/components/StoryE3'
import StoryE4 from '@/components/StoryE4'
import StoryE5 from '@/components/StoryE5'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
      meta: { title: 'Home' }
      /*
      props: {
        homeActiveSlide: null
      }
      */
    },
    {
      path: '/a',
      name: 'Story A',
      component: StoryA,
      meta: { title: 'Annas Chromodoris - Splash' }
    },
    {
      path: '/a/1',
      name: 'Story A Page 1',
      component: StoryA1,
      meta: { title: 'Annas Chromodoris - Brilliant Warning' }
    },
    {
      path: '/a/2',
      name: 'Story A Page 2',
      component: StoryA2,
      meta: { title: 'Annas Chromodoris - Explore Menu' }
    },
    {
      path: '/a/3',
      name: 'Story A Page 3',
      component: StoryA3,
      meta: { title: 'Annas Chromodoris - Value of Collections' }
    },
    {
      path: '/a/4',
      name: 'Story A Page 4',
      component: StoryA4,
      meta: { title: 'Annas Chromodoris - Look Closer' }
    },
    {
      path: '/a/5',
      name: 'Story A Page 5',
      component: StoryA5,
      meta: { title: 'Annas Chromodoris - Fun Facts' }
    },
    {
      path: '/b',
      name: 'Story B',
      component: StoryB,
      meta: { title: 'Pacific Seahorse - Splash' }
    },
    {
      path: '/b/1',
      name: 'Story B Page 1',
      component: StoryB1,
      meta: { title: 'Pacific Seahorse - Brilliant at Blending' }
    },
    {
      path: '/b/2',
      name: 'Story B Page 2',
      component: StoryB2,
      meta: { title: 'Pacific Seahorse - Explore Menu' }
    },
    {
      path: '/b/3',
      name: 'Story B Page 3',
      component: StoryB3,
      meta: { title: 'Pacific Seahorse - Value of Collections' }
    },
    {
      path: '/b/4',
      name: 'Story B Page 4',
      component: StoryB4,
      meta: { title: 'Pacific Seahorse - Look Closer' }
    },
    {
      path: '/b/5',
      name: 'Story B Page 5',
      component: StoryB5,
      meta: { title: 'Pacific Seahorse - Fun Facts' }
    },
    {
      path: '/c',
      name: 'Story C',
      component: StoryC,
      meta: { title: 'Harlequin Poison Frog - Splash' }
    },
    {
      path: '/c/1',
      name: 'Story C Page 1',
      component: StoryC1,
      meta: { title: 'Harlequin Poison Dart Frog - Visual Variety' }
    },
    {
      path: '/c/2',
      name: 'Story C Page 2',
      component: StoryC2,
      meta: { title: 'Harlequin Poison Dart Frog - Explore Menu' }
    },
    {
      path: '/c/3',
      name: 'Story C Page 3',
      component: StoryC3,
      meta: { title: 'Harlequin Poison Dart Frog - Value of Collections' }
    },
    {
      path: '/c/4',
      name: 'Story C Page 4',
      component: StoryC4,
      meta: { title: 'Harlequin Poison Dart Frog - Look Closer' }
    },
    {
      path: '/c/5',
      name: 'Story C Page 5',
      component: StoryC5,
      meta: { title: 'Harlequin Poison Dart Frog - Fun Facts' }
    },
    {
      path: '/d',
      name: 'Story D',
      component: StoryD,
      meta: { title: 'Stone Scorpionfsh - Splash' }
    },
    {
      path: '/d/1',
      name: 'Story D Page 1',
      component: StoryD1,
      meta: { title: 'Stone Scorpionfsh - Fish Flag' }
    },
    {
      path: '/d/2',
      name: 'Story D Page 2',
      component: StoryD2,
      meta: { title: 'Stone Scorpionfsh - Explore Menu' }
    },
    {
      path: '/d/3',
      name: 'Story D Page 3',
      component: StoryD3,
      meta: { title: 'Stone Scorpionfsh - Value of Collections' }
    },
    {
      path: '/d/4',
      name: 'Story D Page 4',
      component: StoryD4,
      meta: { title: 'Stone Scorpionfsh - Look Closer' }
    },
    {
      path: '/d/5',
      name: 'Story D Page 5',
      component: StoryD5,
      meta: { title: 'Stone Scorpionfsh - Fun Facts' }
    },
    {
      path: '/e',
      name: 'Story E',
      component: StoryE,
      meta: { title: 'Emerald Skink - Splash' }
    },
    {
      path: '/e/1',
      name: 'Story E Page 1',
      component: StoryE1,
      meta: { title: 'Emerald Skink - The Range of Reptiles' }
    },
    {
      path: '/e/2',
      name: 'Story E Page 2',
      component: StoryE2,
      meta: { title: 'Emerald Skink - Explore Menu' }
    },
    {
      path: '/e/3',
      name: 'Story E Page 3',
      component: StoryE3,
      meta: { title: 'Emerald Skink - Value of Collections' }
    },
    {
      path: '/e/4',
      name: 'Story E Page 4',
      component: StoryE4,
      meta: { title: 'Emerald Skink - Look Closer' }
    },
    {
      path: '/e/5',
      name: 'Story E Page 5',
      component: StoryE5,
      meta: { title: 'Emerald Skink - Fun Facts' }
    }
  ]
})
