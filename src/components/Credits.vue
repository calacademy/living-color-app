<template>
  <div class="credits" :class="{ show: show }" v-show="show">
    <h1>Photo Credits</h1>
    <div id="btn-close-credits" @click="closeSelf" />
    <div class="credits-list-container">
      <h2>Harlequin Frog</h2>
      <ul class="no-photos">
        <li>
          © Thomas Marent/Visuals Unlimited/Corbis
        </li>
        <li>
          © Thomas Marent/Visuals Unlimited/Corbis
        </li>
        <li>
          © Nicolas Cégalerba/Biosphoto/Corbis
        </li>
        <li>
          Joel Sartore, National Geographic Photo Ark
        </li>
        <li>
          Michael Turco/Visuals Unlimited, Inc.
        </li>
        <li>
          Santiago Ron, CC BY-NC 2.0, https://tinyurl.com/mt9aolc
        </li>
        <li>
          Mauricio Rivera Correa, CC BY-SA 2.5, https://tinyurl.com/mrzrwna
        </li>
        <li>
          Kathryn Whitney © California Academy of Sciences
        </li>
        <li>
          April Nobile, CC BY, www.AntWeb.org
        </li>
        <li>
          Will Ericson, CC BY, www.AntWeb.org
        </li>
        <li>
          © Tom Murray
        </li>
        <li>
          © Art Wolfe
        </li>
        <li>
          Mark Moffett/Minden Pictures/Getty Images
        </li>
      </ul>
      <h2>Emerald Skink</h2>
      <ul class="no-photos">
        <li>
          Daderot, CC0 1.0, https://tinyurl.com/mjhbqxw
        </li>
        <li>
          Merlijn Van Weerd, CC BY 3.0, https://tinyurl.com/kg72gjf
        </li>
        <li>
          © Mark O’Shea
        </li>
        <li>
          Auscape/Universal Images Group/Getty Images
        </li>
        <li>
          © Paddy Ryan/Ryan Photographic
        </li>
        <li>
          Kathryn Whitney © California Academy of Sciences
        </li>
        <li>
          © R. Scott Seville &amp; Chris T. McAllister.
        </li>
        <li>
          © Paul Starosta/Corbis
        </li>
        <li>
          Image by Reto Stöckli / NASA Visible Earth
        </li>
      </ul>
      <h2>Anna&rsquo;s Chromodoris</h2>
      <ul class="no-photos">
        <li>
          © Hal Beral/Corbis
        </li>
        <li>
          Gerard Soury/Oxford Scientific/Getty Images
        </li>
        <li>
          Steve Childs, CC BY 2.0, https://tinyurl.com/mractvs
        </li>
        <li>
          q phia, CC BY 2.0, https://tinyurl.com/luncxtc
        </li>
        <li>
          Silke Baron, CC BY 2.0, https://tinyurl.com/m4a35xj
        </li>
        <li>
          David R. Tribble, CC BY-SA 3.0, https://tinyurl.com/y7ka4awc
        </li>
        <li>
          Kathryn Whitney © California Academy of Sciences
        </li>
        <li>
          Tchami, CC BY-SA 2.0, https://tinyurl.com/ybwb8cxl
        </li>
        <li>
          Jerry Kirkhart, CC BY 2.0, https://tinyurl.com/n44wv5s
        </li>
        <li>
          Image by Reto Stöckli / NASA Visible Earth
        </li>
      </ul>
      <h2>Stone Scrpionfish</h2>
      <ul class="no-photos">
        <li>
          © Jonathan Lavan
        </li>
        <li>
          Josh Jensen/Undersea Productions
        </li>
        <li>
          Kathryn Whitney © California Academy of Sciences
        </li>
        <li>
          © Daniel Gotshall/Visuals Unlimited/Corbis
        </li>
      </ul>
      <h2>Pacific Seahorse</h2>
      <ul class="no-photos">
        <li>
          © Norbert Wu/Minden Pictures/Corbis
        </li>
        <li>
          © Shedd AQ/Edward G. Lines Jr./SeaPics.com
        </li>
        <li>
          Ed Bierman, CC BY 2.0, https://tinyurl.com/ybhz7fcf
        </li>
        <li>
          Ed Bierman, CC BY 2.0, https://tinyurl.com/l7g2qnx
        </li>
        <li>
          Mark Yokoyama, CC BY-NC-ND 2.0, https://tinyurl.com/l4bkvpf
        </li>
        <li>
          Claire Fackler, CC BY 2.0, https://tinyurl.com/l5re7mv
        </li>
        <li>
          Ed Bierman, CC BY 2.0, https://tinyurl.com/ms7p7cq
        </li>
        <li>
          Kathryn Whitney © California Academy of Sciences
        </li>
        <li>
          © David Fankhauser, University of Cincinnati
        </li>
        <li>
          Image by Reto Stöckli / NASA Visible Earth
        </li>
        <li>
          © iStock.com/raweenuttapong
        </li>
      </ul>
      <!--
      <h2>Harlequin Frog</h2>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-frog.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.<br />
            Some more info blah blah blah, and the blah blah blah.
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-frog.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-frog.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
      </ul>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-frog.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-frog.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
      </ul>
      <h2>Emerald Skink</h2>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-skink.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-skink.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
      </ul>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-skink.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
      </ul>
      <h2>Anna&rsquo;s Chromodoris</h2>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-nudibranch.png" />
          <caption>
            &copy; Photo Credit Here<br />
            Some more info blah blah blah, and the blah blah blah.
          </caption>
        </li>
      </ul>
      <h2>Stone Scorpionfish</h2>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-fish.png" />
        </li>
      </ul>
      <ul>
      </ul>
      <h2>Pacific Seahorse</h2>
      <ul class="with-photos">
        <li>
          <img src="/static/images/photo-credits-thumbs/slide-seahorse.png" />
        </li>
      </ul>
      <ul class="with-photos">
      </ul>
      -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'credits',
  props: ['show'],
  methods: {
    closeSelf: function () {
      this.$parent.showCredits = false
    },
    registerActiveUse: function () {
      this.$parent.dateLastUserEvent = new Date()
    }
  },
  created: function () {
    window.addEventListener('touchmove', this.registerActiveUse, false)
  },
  destroyed: function () {
    window.removeEventListener('touchmove', this.registerActiveUse, false)
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_vars.scss";

.credits {
  position: absolute;
  z-index: 2000;
  width: $screen-width;
  height: $screen-height;
  background-color: #000;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  h1 {
    width: $screen-width - (2 * $content-padding);
    margin-left: $content-padding;
    font-size: $story-1-font-size-h1;
    line-height: $story-1-line-height-h1;
    color: $story-1-color-h1;
    font-weight: $story-1-font-weight-h1;
    letter-spacing: $story-1-letter-spacing-h1;
    text-align: center;
    margin-top: 35px;
    padding-bottom: 42px;;
    // border-bottom: 1px solid $photo-credits-color;
    margin-bottom: 12px;
  }

  #btn-close-credits {
    position:absolute;
    bottom: 86px;
    left: ($screen-width / 2) - 58;
    width: 117px;
    height: 117px;
    background-image: url('../assets/btn-close-credits.png');
    &:active {
      opacity: .5;
    }
  }

  .credits-list-container {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    overflow-y: scroll;
    margin-left: $content-padding;
    width: $screen-width - $content-padding;
    height: $screen-height - $content-padding;
    h2 {
      font-size: $story-caption-head-font-size;
      line-height: $story-caption-head-line-height;
      font-weight: $story-caption-head-font-weight;
      padding-bottom: 0px;
      clear: both;
    }

    ul.with-photos {
      list-style: none;
      width: 495px;
      float: left;
      padding-bottom: $content-padding;
      li {
        list-style: none;
        width: 440px;
        padding-right: 55px;
        min-height: 150px;
        margin-bottom: $content-padding;
        float: left;
        img {
          width: 150px;
          height: 150px;
          background-color: #000;
          float: left;
        }
        caption {
          text-align: left;
          width: 270px;
          margin-top: -7px;
          margin-left: 20px;
          font-size: $photo-credits-font-size;
          line-height: $photo-credits-line-height;
          color: $photo-credits-color;
          font-weight: $photo-credits-font-weight;
          letter-spacing: $photo-credits-letter-spacing;
          float: left;
        }
      }
    }

    ul.no-photos {
      list-style: none;
      width: 100%;
      padding-bottom: $content-padding;
      li {
        list-style: none;
        width: 100%;
        //margin-bottom: $content-padding;
        text-align: left;
        //margin-top: -7px;
        font-size: $photo-credits-font-size;
        line-height: $photo-credits-line-height;
        color: $photo-credits-color;
        font-weight: $photo-credits-font-weight;
        letter-spacing: $photo-credits-letter-spacing;
      }
    }

  }

}

</style>
