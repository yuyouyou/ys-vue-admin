import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import Form from '../views/nav1/Form.vue'
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
        { path: '/table', component: Table, name: 'Table' },
        { path: '/form', component: Form, name: 'Form' },
        { path: '/list', component: List, name: 'List' },
    ]
  },
  {
      path: '/',
      component: Home,
      name: 'echarts',
      iconCls: 'fa fa-bar-chart',
      children: [
          { path: '/echarts', component: echarts, name: 'echarts' }
      ]
  }
]

export default routes
