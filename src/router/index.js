import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login/Login.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo.vue'

const MSite = () => import('../views/MSite/MSite.vue')
const Search = () => import('../views/Search/Search.vue')
const Order = () => import('../views/Order/Order.vue')
const Profile = () => import('../views/Profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
