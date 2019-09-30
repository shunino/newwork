// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueQuillEditor from 'vue-quill-editor'

import axios from 'axios'
Vue.prototype.$http=axios
//设置cookie
Vue.prototype.$setCookie = function (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  console.log(cname + "=" + cvalue + "; " + expires);
  document.cookie = cname + "=" + cvalue + "; " + expires;
  console.log(document.cookie);
}
//获取cookie
  Vue.prototype.$getCookie =  function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  console.log("获取cookie,现在循环")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    console.log(c)
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

Vue.prototype.$commonGo = function(src){
  this.$router.push({path:src});
}

Vue.prototype.$userId = null;
Vue.prototype.$token = null;

Vue.use(axios);

import $ from 'jquery'

import 'bootstrap'
Vue.use(VueQuillEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
