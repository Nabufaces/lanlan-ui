import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/'
    },
    // {
    //   path: '/findMusic',
    //   component: resolve => {require(['@/components/findMusic/findMusic'],resolve)},
    //   redirect: '/findMusic/personalRecommend',
    //   children: [
    //     {
    //       path: '/findMusic/personalRecommend',
    //       component: resolve => {require(['@/components/personalRecommend/personalRecommend'],resolve)}
    //     },
    //     {
    //       path: '/findMusic/songMenu',
    //     },
    //     {
    //       path: '/findMusic/hostStation',
    //     },
    //     {
    //       path: '/findMusic/rankList',
    //     }
    //   ]
    // },
    // {
    //   path: '/myMusic',
    //   component: resolve => {require(['@/components/myMusic/myMusic'],resolve)},
    //   children: [
    //     {
    //       path: '/myMusic/musicList'
    //     }
    //   ]
    // },
    // {
    //   path: '/findFriends'
    // },
    // {
    //   path: '/userAccount',
    //   component: resolve => {require(['@/components/userAccount/userAccount'],resolve)}
    // }
  ]
})
