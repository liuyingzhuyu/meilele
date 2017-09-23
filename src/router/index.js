import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Discount from '@/components/Discount'
import Cart from '@/components/Cart'
import My from '@/components/My'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/discount',
      name: 'Discount',
      component: Discount
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/*',  //重定向 写在最下面，原有的匹配不上，就匹配这个
      name: 'Home',
      component: Home
    },
  ]
})
