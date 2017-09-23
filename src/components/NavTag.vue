<template>
  <footer class="NavTag">
    <router-link to="/">
    	<span class="icon iconfont icon-shouye"></span>
    	 首页
    </router-link>
    <router-link to="/classify">
    	<span class="icon iconfont icon-fenlei1"></span>
    	 分类
    </router-link>
     <router-link to="/discount">
    	<!--<img src="http://img003.mllres.com/images/201709/1505688717747771665.gif">-->
    	优惠
    </router-link>
    <router-link to="/cart">
    	<span class="icon iconfont icon-gouwuche"></span>
    	购物车
    </router-link>
    <router-link to="/my">
    	<span class="icon iconfont icon-20150825tubiaolianxizhuanhuan03"></span>
    	我的
    </router-link>
  </footer>
</template>

<script>
//import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'nav-tag',
  data () {
    return {
      selected:""
    }
  }
}
</script>


<style scoped>



.router-link-exact-active{
	color: blue;
}
</style>
