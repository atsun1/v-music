// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);
Vue.config.productionTip = false

const http = axios.create({
	baseURL:'http://112.74.99.5:3000/web/api'
})

Vue.prototype.$http = http;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
