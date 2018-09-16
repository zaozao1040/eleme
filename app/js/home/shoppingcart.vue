<template>
	<section>
		<v-heador title="购物车"></v-heador>
		<div :class="$style.wrapper" v-if="selectFoods.length!=0">
			<div :class="$style.name">
				<h4>哑巴生煎</h4>
				<span class="iconfont icon-qiehuanqiyou"></span>
				<span class="iconfont icon-shanchu"></span>
			</div>
			<ul :class="$style.foodslist">
				<li v-for="(item,index) of selectFoods" :key="index">
					<div>
						<img :src="item.icon"/>
					</div>
					<div>
						<div>
							{{item.name}}
							<span class="iconfont icon-guanbi"></span>
						</div>
						<div>
							x{{item.count}}
							<h5>¥{{item.count*item.price}}</h5>
						</div>
					</div>
				</li>
			</ul>
			<div :class="$style.canhe">
				餐盒
				<span>¥2</span>
			</div>
			<div :class="$style.jiesuan">
				<span>优惠<span>6.6元</span></span>
				<span>&nbsp;&nbsp;合计<span>¥{{totleprice}}</span></span>
				<v-btn :class="$style.btn">去结算</v-btn>
			</div>
		</div>
		<div :class="$style.nogoods" v-if="selectFoods.length==0">
			<img src="//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" />
			<h4>购物车是空的～～</h4>
		</div>
		<v-footor></v-footor>
	</section>
</template>

<script>
import heador from "../public/heador.vue"
import interval from "../core/interval.vue"
import footor from "../public/footor.vue"
import btn from "../core/btn.vue"
export default {

  name: 'shoppingcart',
  components: {
  	"v-heador":heador,
  	"v-interval":interval,
  	"v-footor":footor,
  	"v-btn":btn
  },
  data () {
    return {
    	
    }
  },
  computed: {
  	totleprice: function(){
  		if(this.selectFoods){
  			let totle = 0
  			this.selectFoods.forEach(function(item,index){
  				totle += item.count*item.price
  			})
  			return totle + 2
  		}else{
  			return 0
  		}
  	},
  	selectFoods: function(){
  		return this.$store.state.selectFoods
  	}
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.wrapper{
	.name{
		position: relative;
		padding: 20px;
    border-bottom: #99b0c7 1px solid;
		h4{
			display: inline-block;
			margin: 0;
			padding: 0;
			font-size: 30px;
			height: 30px;
		}
		>span:nth-child(2){
			padding-left: 20px;
			font-size: 30px;
			color: #0085ff;
		}
		>span:nth-child(3){
			position: absolute;
			right: 20px;
			top:25px;
			font-size: 30px;
			color: #0085ff;
		}
	}
	.foodslist{
		padding: 20px;
		li{
			@include list(row);
			border-bottom: #99b0c7 1px solid;
			padding-top: 5px;
			>div:nth-child(1){
				flex: 1;
				img{
					width: 100%;
				}
			}
			>div:nth-child(2){
				flex: 4;
				padding: 20px 0 0 20px;
				>div:nth-child(1){
					font-size: 30px;
					>span{
						float: right;
						font-size: 25px;
						color: #0085ff;
					}
				}
				>div:nth-child(2){
					padding-top: 30px;
					font-size: 30px;
					h5{
						margin: 0;
						padding: 0;
						float: right;
						color:red;
						font-size: 30px;
					}
				}
			}
		}
	}
	.canhe{
		padding: 0 20px 20px 20px;
		border-bottom: #99b0c7 1px solid;
		font-size: 30px;
		span{
			float: right;
			font-size: 30px;
			color: red;
		}
	}
	.jiesuan{
		padding: 20px;
		>span:nth-child(1){
			font-size: 25px;
			>span{
				color: red;
			}
		}
		>span:nth-child(2){
			font-size: 30px;
			>span{
				color: red;
			}
		}
		.btn{
			@include btn($height: 50px,$size:30px,$color:#fff,$bgcolor:#00b43c,$padding:5px 30px,$radius:5px);
			float: right;
		}
	}
}
.nogoods{
	text-align: center;
	img{
		width: 100%;
	}
	h4{
		text-align: center;
		color: #93999f;
	}
}
</style>
