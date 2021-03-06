import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import(/* webpackChunkName: "login-group" */ '../components/login/Login')
const Home = () => import(/* webpackChunkName: "home-group" */ '../components/home/Home')

const BeautyLog = () => import(/* webpackChunkName: "log-group" */ '../components/log/BeautyLog')
const B2cLog = () => import(/* webpackChunkName: "log-group" */ '../components/log/B2cLog')

const TranslateForB2b = () => import(/* webpackChunkName: "translate-group" */ '../components/translate/TranslateForB2b.vue')
const TranslateForB2c = () => import(/* webpackChunkName: "translate-group" */ '../components/translate/TranslateForB2c.vue')

const WatchDuty = () => import(/* webpackChunkName: "translate-group" */ '../components/duty/WatchDuty.vue')



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/duty'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/beauty-log',
          name: 'BeautyLog',
          component: BeautyLog
        },
        {
          path: '/b2c-log',
          name: 'B2cLog',
          component: B2cLog
        },
        {
          path: '/translate-b2b',
          name: 'TranslateForB2b',
          component: TranslateForB2b
        },
        {
          path: '/translate-b2c',
          name: 'TranslateForB2c',
          component: TranslateForB2c
        },
        {
          path: '/duty',
          name: 'WatchDuty',
          component: WatchDuty
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   debugger
//   if (to.matched.length > 0) {
//     next()
//   } else {
//     let path = to.path;
//     let catId = 1;
//     if (path.indexOf('question-list/')) {
//       let num = path.indexOf('question-list/');
//       catId = path.slice(15, 15 + 1);
//       debugger
//     }
//     next({
//       path: "/"
//     });
//   }
// })
export default router
