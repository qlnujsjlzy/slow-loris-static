// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

const FastClick = require('fastclick')

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body)
}, false)

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, isLoading) {
      state.isLoading = isLoading
    }
  }
})

router.beforeEach((route, redirect, next) => {
  /* 显示加载中动画 */
  store.commit('updateLoadingStatus', true)
  next()
})

router.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit('updateLoadingStatus', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
