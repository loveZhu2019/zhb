import Home from "../pages/home";
import Login from "../pages/login";
import NotFund from "../pages/not-fund";
import List from "../pages/list";
import Chart from '../pages/list/chart'

export default {
  admin: [{
    path: '/admin/home', component: Home, show: true, title: '首页',
  }, {
    title: '统计', path: '/chart', children: [
      {
        path: '/admin/list', component: List, show: true, title: '列表'
      }, {
        path: '/admin/chart', component: Chart, show: true, title: 'Chart图表'
      }
    ]
  }],
  other: [{
    path: '/404', component: NotFund
  }, {
    path: '/login', component: Login
  }]
}