import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 配置每一个实例对象都可以使用vue-router
import Mint from 'mint-ui';
Vue.use(Mint);

import axios from 'axios'
Vue.prototype.$http = axios

import $ from 'jquery'

import Vuex from 'vuex'

Vue.use(Vuex)
import store from '../data/js/data.js'

import '../node_modules/mint-ui/lib/style.css'
import router from './assets/js/router.js'
import './assets/icon/iconfont.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})