import Vue from 'vue'
import App from '@/App'
import router from '@/router'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const comp = new Constructor({
      router: router
    }).$mount()
    expect(comp.$el.children[0].className)
      .to.equal('loader-mask show')
  })
})
