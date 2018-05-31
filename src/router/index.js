import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import ShopCart from '../views/nav1/ShopCart.vue'
import Lifecycle from '../views/nav1/Lifecycle.vue'
import echarts from '../views/echarts/echarts.vue'

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
  }
]

export default routes
