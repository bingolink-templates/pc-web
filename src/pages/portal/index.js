// normalize.css 统一不同浏览器上的元素样式。
import 'normalize.css'
import 'libs/jquery.js'

import Vue from 'vue'
import App from './app.vue'
import UtilPath from 'utils/path'

var urlParams = UtilPath.resolveUrlParams(window.location.href)

if (urlParams.access_token) {
  $.ajaxSetup({
    traditional: true,
    cache: false,
    global: false,
    timeout: 60000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer ' + urlParams.access_token
    },
    error: function (xhr) {
      if (xhr.status == 401) {
        window.location.href = window.PATH.authUrl;
      }
    }
  });

  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })
} else {
  window.location.href = window.PATH.authUrl;
}
