// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import '../dist/lanlanui.css'
import lanlanui from '../dist/lanlanui'
//import lanlanui from '../src/main'
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
