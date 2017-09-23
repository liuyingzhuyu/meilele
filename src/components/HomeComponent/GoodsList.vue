<template>
  <div class="goods-list">
    <div class="goods-list-title">
    
      —— 猜你喜欢——
    </div>
    <div class="goods-list-content">
       <div class="goods-list-content-item" v-for="item in goodsList">
	        <a href="#/my">
	        	<img v-lazy="'http://img004.mllres.com/'+ item.goods_thumb">
	        	<p class="price">¥{{item.show_price}}</p>
	        	<p class="name">{{item.show_price}}</p>
	          <p class="sale">已售<font id="s2-52735">385</font></p>
	        </a>
       </div>  
        
    
    
    </div>  
      
      
      
  </div>
</template>

<script>
import axiosGet from '../../axios/axios'
console.log(axiosGet,"0000000")
export default {
  name: 'goods-list',
  data () {
    return {
     goodsList:[] 
    }
  },
  method:{
  	
  },
  components:{
		
  },
  mounted(){
  	 var that=this
  	
  	 console.log("9999999")
		  axiosGet("/dubbo_api/mll/articleAd/getLikeProducts",function(data){
				console.log(data)
			  that.goodsList=data.result
			},{
				userTags:'k2507*l0406*s0005*m0605*m2103*f1103*m1001*f1503*s0501*m3001*k6501*s0201*c0101*m0301*f0401*f1401*g0401',
				pagSize:"50",
				cid:'nqaj7vgktij_6058891',
			})
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
  }
}
</script>


<style scoped  lang="scss">
.goods-list{
	width: 100%;
	.goods-list-title{
		  height: 3em;
		 /* background: #fff;*/
		  display: flex;
		  justify-content: center;
		  align-items: center;
	}
	.goods-list-content{
		    width: 100%;
		    display: flex;
		    justify-content: space-between;
		    flex-wrap: wrap;
		  .goods-list-content-item{
		  	  width: 49%;
		  	  margin-bottom:8px;
		  	  background:#fff;
		  	  a{ font-size: .8em;
		  	  	img{
		  	  	width: 100%;
		  	  	height: 1.3rem;
		  	  }
		  	  p{
		  	  	padding: 3px 3px;
		  	  }
		  	  .price{
		  	  	
		  	  }
		  	  .name{
		  	  	 width: 90%;
		  	  	 white-space: nowrap;
		  	  	 overflow: hidden;
		  	  	 text-overflow: ellipsis;
		  	  }
		  	  .sale{
		  	  	color: #ababab;
		  	  }
		  	  }
		  	  
		  }
		  
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
</style>
