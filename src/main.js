// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './utils'
import store from './store';
import router from './router'

// require('./api')
import './mixin'
import './api'
import './components'
import './filter'
import './directives'

Vue.config.productionTip = false
import App from './App'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
