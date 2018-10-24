import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import ShopCart from '../views/nav1/ShopCart.vue'
import Lifecycle from '../views/nav1/Lifecycle.vue'
import echarts from '../views/echarts/echarts.vue'
import Comp from '../views/comp/Comp.vue'
import Compbus from '../views/compbus/Compbus.vue'
import Directive from '../views/directive/Directive.vue'

let routes = [
  {
    path: '/login',
    name: '',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '导航一',//name 对应左侧菜单名
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/main', component: Main, name: '主页', hidden: true },
        { path: '/table', component: Table, name: '模拟用户列表' },
        { path: '/shopCart', component: ShopCart, name: '购物车(vuex)demo' },
        { path: '/lifecycle', component: Lifecycle, name: '生命周期' },
    ]
  },
  {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'fa fa-bar-chart',
      children: [
          { path: '/echarts', component: echarts, name: 'echarts' }
      ]
  },
  {
      path: '/',
      component: Home,
      name: '导航三',
      iconCls: 'fa fa-bar-chart',
      children: [
          { path: '/comp', component: Comp, name: '父子组件及互相通信' },
          { path: '/compbus', component: Compbus, name: '非父子组件的通信' }
      ]
  },
  {
      path: '/',
      component: Home,
      name: '导航四',
      iconCls: 'fa fa-bar-chart',
      children: [
          { path: '/directive', component: Directive, name: '自定义指令' }
      ]
  }
]

export default routes
