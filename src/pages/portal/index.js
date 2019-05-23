// normalize.css 统一不同浏览器上的元素样式。
import 'normalize.css'

import Vue from 'vue'
// 用来发请求
import VueResource from 'vue-resource'

import App from './app.vue'
import UtilPath from 'utils/path'

Vue.use(VueResource)

var urlParams = UtilPath.resolveUrlParams(window.location.href)

if (urlParams.access_token) {
  window.access_token = urlParams.access_token;
  Vue.http.interceptors.push((request, next) => {
      request.headers.set('Authorization', 'Bearer ' + urlParams.access_token)
      next((response) => {
          // https://segmentfault.com/a/1190000004322487#articleHeader5
          // 跨域的根本拿不到响应头里面的数据
          if (response.status == 401) {
            window.location.href = window.PATH.authUrl;
          }
          return response
      })
  })
  new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
  })
} else {
  window.location.href = window.PATH.authUrl;
}
