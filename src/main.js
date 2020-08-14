// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 多语言
import i18n from './language';
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});



// 状态管理
import store from './store/index.js';

// 解决移动端点击延时300问题
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 默认focus指令
Vue.directive('focus', {
  inserted: function (el) {
    el.querySelector('input').focus();
  }
})


// 粘贴板
import VueClipboard from 'vue-clipboard2';
VueClipboard.config.autoSetContainer = true 
Vue.use(VueClipboard)



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
