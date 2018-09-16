<template>
	<div :class="$style.btn">
		<button>
			<span class="iconfont icon-huidaodingbu" 
				@click="handleBackToTop" 
				v-if="showBackToTopFlag"></span>
		</button>

		<router-link :to="{name:'shoppingcart'}" tag="div">
			<button>
				<span class="iconfont icon-gouwuche1"></span>
			</button>
		</router-link>

	</div>
</template>

<script>
export default {

  name: 'hbtn',

  data () {
    return {
    	showBackToTopFlag: false,
    }
  },
  methods:{
  	handleBackToTop: function(){
  		window.scrollTo(0,0)
  	},
		handleScroll: function () {
			const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset  //这段代码增强手机端兼容性，因为有的手机浏览器不认识document.documentElement.scrollTop
			//console.log(top)
			if(top>600){
				this.showBackToTopFlag = true
			}else{
				this.showBackToTopFlag = false
			}
		}
  },
  mounted: function () {
		window.addEventListener('scroll',this.handleScroll,true)
	},
}
</script>

<style lang="scss" module>
.btn{
	z-index: 99;
	position: fixed; 
	bottom:120px;
	right: 30px;
	button{
		padding:0;
		margin:10px;
		border:none;
		border-radius: 30px;
		background-color:rgba(255,255,255,0);
		width: 60px;
		height: 60px; 
		display: block;
		overflow: hidden;
		span{
			color: #3aa4dc;
			font-size: 60px;
		}
	}
		
}
</style>