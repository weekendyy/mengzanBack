// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from "axios"
import router from './router'
import ElementUI from 'element-ui'
import api from "./api/api.js"
import func from "./public/func"
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.less'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.func = func
Vue.prototype.api = api
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
