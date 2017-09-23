<template>
  <footer class="NavTag">
    <router-link to="/">
    	<i class="icon iconfont icon-shouye home"></i>
    	 首页
    </router-link>
    <router-link to="/classify">
    	<i class="icon iconfont icon-fenlei1"></i>
    	 分类
    </router-link>
     <router-link to="/discount">
    	<!--<img src="http://img003.mllres.com/images/201709/1505688717747771665.gif">-->
    	优惠
    </router-link>
    <router-link to="/cart">
    	<i class="icon iconfont icon-gouwuche"></i>
    	购物车
    </router-link>
    <router-link to="/my">
    	<i class="icon iconfont icon-20150825tubiaolianxizhuanhuan03"></i>
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


<style lang="scss" scoped>

	.router-link-exact-active{
		color: #dd2727;
		font-weight: bold;
		
	}
	.NavTag{
		 width: 100%;
		 height: 3.5em;
		 position: fixed;
		 bottom:0 ;
		 left: 0; 
		 display: flex;
		 border-top: 1px solid #999 ;
		a{
			display: flex;
			width: 25%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: .8em;
			i{
				font-size: 1.5em;
			}
			.home{
				font-size: 1.8em;
			}
		}
		
	}




</style>
