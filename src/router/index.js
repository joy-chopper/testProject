import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import products from '@/views/products'
import oem from '@/views/oem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/oem',
      name: 'oem',
      component: oem
    }
  ]
})
