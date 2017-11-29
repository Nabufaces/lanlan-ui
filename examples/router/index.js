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
      path: '/radio',
      component: resolve => {require(['../components/radio'],resolve)}
    },
    {
      path: '/checkbox',
      component: resolve => {require(['../components/checkbox'],resolve)}
    },
    {
      path: '/input',
      component: resolve => {require(['../components/input'],resolve)}
    },
    {
      path: '/select',
      component: resolve => {require(['../components/select'],resolve)}
    },
    {
      path: '/timePicker',
      component: resolve => {require(['../components/timePicker'],resolve)}
    },
    {
      path: '/datePicker',
      component: resolve => {require(['../components/datePicker'],resolve)}
    },
    {
      path: '/table',
      component: resolve => {require(['../components/table'],resolve)}
    },
    {
      path: '/message',
      component: resolve => {require(['../components/message'],resolve)}
    },
    {
      path: '/messageBox',
      component: resolve => {require(['../components/messageBox'],resolve)}
    },
    {
      path: '/modal',
      component: resolve => {require(['../components/modal'],resolve)}
    },
    {
      path: '/tooltip',
      component: resolve => {require(['../components/tooltip'],resolve)}
    },
    {
      path: '/tabs',
      component: resolve => {require(['../components/tabs'],resolve)}
    },
    {
      path: '/pagination',
        component: resolve => {require(['../components/pagination'],resolve)}
    },
    {
      path: '/backTop',
      component: resolve => {require(['../components/backTop'],resolve)}
    }
  ]
})
