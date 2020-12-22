import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/iconfont/iconfont.css'

 
Vue.config.productionTip = false
// 全局配置地址
axios.defaults.baseURL='http://127.0.0.1:5555';
Vue.prototype.$http=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
