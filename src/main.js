import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/default1.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data() {
    return {
      once: 0
    }
  },
  mounted() {
    document.onclick = () => {
      this.once++
      if (this.once <= 1) {
        let audio = document.querySelector('audio')
        audio.play()
      } else {
        document.onclick = null
      }
    }
  }
})
