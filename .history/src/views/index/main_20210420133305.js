import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'
import httpRequest from '@/request/httpRequest'

Vue.component('tinymce', Tinymce)
Vue.use
Vue.config.productionTip = false
Vue.prototype.$http = httpRequest
// 非生产环境, 适配mockjs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
