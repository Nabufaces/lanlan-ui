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
    },
    {
      path: '/button',
      component: resolve => {require(['../components/button'],resolve)}
    },
    {
      path: '/switch',
      component: resolve => {require(['../components/switch'],resolve)}
    },
    {
      path: '/tabs',
      component: resolve => {require(['../components/tabs'],resolve)}
    },
  ]
})