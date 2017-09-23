// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'

//引入mint-ui
import MintUI,{  Swipe, SwipeItem,Lazyload  }  from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入icon
import "./assets/iconfont/iconfont.js"
import "./assets/iconfont/iconfont.css"


Vue.use(MintUI)
Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//console.log(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
