// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import '../theme/index.css'
import './styles/base.scss'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import routes from './router'
//import store from './vuex/store'
import store from './store/index'
import Mock from './mock'
import './plugins/jquery-vendor'
import 'font-awesome/css/font-awesome.min.css'
Mock.funAdapter();

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

// vue-echarts
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }

  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // template: '<App/>',
  router,
  store,
  data: {
    rootNum: 0
  },
  // components: { App }
  render: h => h(App)
}).$mount('#app')
