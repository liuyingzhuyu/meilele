<template>
  <div class="home">
<!--   轮播图-->
    <mt-swipe :auto="4000">
		  <mt-swipe-item>
		  	<router-link to="/my">
		  	<img src="http://img003.mllres.com/images/201709/1505351332352863864.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/my">
		  	<img src="http://img002.mllres.com/images/201709/1505351397729029474.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/my">
		  	<img src="http://img003.mllres.com/images/201709/1505351270708241754.jpg"/>
		  	</router-link>
		  </mt-swipe-item>
		</mt-swipe>
		
		<!--分类-->
    <section class="section">
	    <router-link to="/">
	    	<img src="http://image.meilele.com/images/201607/1469670537560611962.png">
	    	<span>图览家居</span>
	    </router-link>
	    <router-link to="/classify">
	    	<img src="http://img003.mllres.com/images/201607/1467930412372228158.png">
	    	<span> 客户晒家</span>
	    </router-link>
	     <router-link to="/discount">
	    	<img src="http://image.meilele.com/images/201609/1474508258076950117.png">
	    	<span>体验馆</span>
	    </router-link>
	    <router-link to="/cart">
	    	<img src="http://image.meilele.com/images/201605/1463009598509005013.png">
	    	<span>客户端</span>
	    </router-link>
	    
	  </section>
	  
<!--	  头条轮播-->
    <div class="news">
    	<img class="Left" width="87" height="32" src="http://img004.mllres.com/images/201609/1474495202139451468.png">
      <em>:</em>
     <div class="swiper-container news_list">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<a href="http://m.meilele.com/special/m_201709_sjjhtqg.html?site_from=M_symmtt">
            		  <strong class="Left">惠</strong>
            		  <span>中秋国庆提前开场，全屋购大省15%</span>
            	</a>
            </div>
            <div class="swiper-slide">
            	<a href="http://m.meilele.com/special/m_201709_sjjhtqg.html?site_from=M_symmtt">
            		  <strong class="Left">惠</strong>
            		  <span>22222222</span>
            	</a>
            </div>
            
         </div>
  
      </div
    </div>
     </div>
<!--   活动-->
   
    <ul class="activity">
    	<li>
    		<a>
    			<img src="http://img004.mllres.com/images/201709/1506033090775890924.jpg">
    		</a>
    	</li>
    	<li>
    		<a>
    			<img src="http://img001.mllres.com/images/201709/1505079052194260173.jpg">
    		</a>
    	</li>
    	<li>
    		<a>
    			<img src="http://img004.mllres.com/images/201709/1506033090775890924.jpg">
    		</a>
    	</li>
    	
    </ul>
   
   
   
    
    <goods-list></goods-list>
    
    
    
    
    
       <nav-tag/>
  </div>
</template>

<script>

import NavTag from './NavTag'	
import GoodsList from "./HomeComponent/GoodsList"


export default {
  name: 'home',
  swiper:null,
  data () {
    return {
     
    }
  },
  methods:{
  	
//	getdata(){
//		axios.get('/dubbo_api/mll/articleAd/getLikeProducts',{
//			userTags:'',
//			pagSize:"50",
//			cid:'nqaj7vgktij_6058891',
//		}).then(function (response) {
//		    console.log(response);
//		  })
//		  .catch(function (error) {
//		    console.log(error);
//		  });
//	}
  },
  components:{
		NavTag,
		GoodsList
  },
  mounted(){
	 this.$options.swiper=new Swiper('.news_list', {
				 autoplay : 3000,     
				 direction: 'vertical'
		})
	
  }
//,
//watch(){
//	
//}
}
</script>


<style scoped lang="scss">


.home{
	.mint-swipe{
		width: 100%;
		height: 12em;
		.mint-swipe-item{
			height: 12em;
			img{
				width: 100%;
	    	height: 12em;
			}
		}
		.mint-swipe-indicator.is-active{
			background: red;
		}
	}
	.section{
		 width: 100%;
		 height: 4.5em;
		 background: #fff;
		 display: flex;
		 border-top: 1px solid #999 ;
		 padding: .5em 0;
		 border-bottom: 1px solid #e5e5e5;
		a{
			display: flex;
			width: 25%;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			font-size: .8em;
			
			img{
				width: 3em;
				height: 3em;
			
			}
			
		}
		
	}
	.news{
		width: 100%;
		height: 2.5em;
		background: #fff;
		padding: .5em  .5em;
		box-sizing: border-box;
		display:flex;
		align-items: center;
		.news_list{
			flex: 1;
			height: 2.5em;
			background: #fff;
			.swiper-wrapper{
				.swiper-slide{
		      
			    a{
				    width: 100%;
				    height: 100%;
				    float: left;
				    line-height: 32px;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
			    	line-height: 3em;
			    	font-size: .8em;
			    	strong{
			    		    color: #da0000;
                  padding: 0 10px;
			    	} 
			    }
				}
			}
		}
	}
	.activity{
		margin-top: 15px;
		width: 100%;
		height: 8em;
		display: flex;
		
		li{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
			height: 100%;
			}
		}
	}
	
	
	
	
	
	
	
}










</style>
