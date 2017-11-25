import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/affix'
    },
    {
      path: '/affix',
      component: resolve => {require(['../components/affix'],resolve)}
    },
    {
      path: '/gird',
      component: resolve => {require(['../components/grid'],resolve)}
    }
  ]
})
