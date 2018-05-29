import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import ShopCart from '../views/nav1/ShopCart.vue'
import List from '../views/nav1/List.vue'
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
        { path: '/table', component: Table, name: '用户列表' },
        { path: '/shopCart', component: ShopCart, name: '购物车(vuex)demo' },
        { path: '/list', component: List, name: 'List' },
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
