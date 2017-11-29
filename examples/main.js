// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//生产环境
//import '../dist/lanlanui.css'
//import lanlanui from '../dist/lanlanui'
//测试环境
import lanlanui from '../src/main'
import index from './components/index.vue'
import hightlight from './lib/highlight'

Vue.config.productionTip = false;

Vue.use(lanlanui);
Vue.use(hightlight);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<index/>',
  components: { index }
});
