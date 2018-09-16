<template>
	<section>
		<div :class="$style.headerWrapper">
			<div>
				<div :class="$style.left">
					<h4>{{$route.query.name}}</h4>
					<div>
						<v-star :score="seller.score" :class="$style.star"></v-star>
						<h5>(评论{{seller.ratingCount}}条)&nbsp;&nbsp;月售{{seller.sellCount}}单</h5>
					</div>
				</div>
				<div :class="$style.right">
					<span class="iconfont icon-jushoucanggift" v-if="shoucangFlag" @click="handleChangeShoucangFlag()"></span>
					<h5 v-if="shoucangFlag">已收藏</h5>
					<span class="iconfont icon-jushoucang" v-if="!shoucangFlag" @click="handleChangeShoucangFlag()"></span>
					<h6 v-if="!shoucangFlag">未收藏</h6>
				</div>
			</div>
			<div>
				<div>
					<h5>起送价</h5>
					<h4>{{seller.minPrice}}<span>元</span></h4>
				</div>
				<div>
					<h5>配送费</h5>
					<h4>{{seller.deliveryPrice}}<span>元</span></h4>
				</div>
				<div>
					<h5>送达时间</h5>
					<h4>{{seller.deliveryTime}}<span>分钟</span></h4>
				</div>
			</div>
		</div>
		<v-interval></v-interval>
		<div :class="$style.sliderWrapper">
			<v-title title="商家实景"></v-title>
			<v-slider sliderFlag="sliderFlag_img" :items="items" ></v-slider>
		</div>
		<v-interval></v-interval>
		<div :class="$style.supportsWrapper">
			<v-title title="公告与活动"></v-title>
			<v-supporticon 
  			:class="$style.supporticon_hock"
  			v-for="(item,index) of seller.supports" :key="index"
  			:support="item"
			>
			</v-supporticon>
		</div>
		<v-interval></v-interval>
		<div :class="$style.sellerinfoWrapper">
			<v-title title="商家信息"></v-title>
			<h4>品类<span>{{seller.infos[1]}}</span></h4>
			<h4>商家电话<span>{{seller.infos[0]}}</span></h4>
			<h4>地址<span>{{seller.infos[2]}}</span></h4>
			<h4>营业时间<span>{{seller.infos[3]}}</span></h4>
		</div>
	</section>
</template>

<script>
import star from '../core/star.vue'
import interval from '../core/interval.vue'
import title from '../core/title.vue'
import slider from '../core/slider.vue'
import supporticon from '../core/supporticon.vue'
export default {

  name: 'goods_sellerinfo',
  components: {
  	'v-star': star,
		'v-interval': interval,
		'v-title': title,
		'v-slider': slider,
		'v-supporticon': supporticon,
  },
  props: {
  	seller: {
  		type: Object,
  		default: function(){
  			return {}
  		}
  	}
  },
  data () {
    return {
    	shoucangFlag: true,
    	items:[{
    		href:"/",
    		src:'https://p0.meituan.net/deal/0c7becdc6ad3d73252561503be6b37d486141.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    	},{
    		href:"/",
    		src:'https://p1.meituan.net/deal/9c5113b89f9d98fc31387d5eac8cfef690889.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    	},{
    		href:"/",
    		src:'https://p1.meituan.net/deal/9ddd4a8c6417220175b5fe9f0a7aebcf101983.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    	},{
    		href:"/",
    		src:'https://p0.meituan.net/deal/c168d668e6a07177871b888b26926b0489317.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    	},{
    		href:"/",
    		src:'https://p0.meituan.net/deal/26ba8002ac0532ce8f65e83f771a584867203.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
    	}],
			options: {
				autoplay: false,
				loop:true,
				pagination:{
				    el: ".swiper-pagination"
				}
			},
    }
  },
  methods:{
  	handleChangeShoucangFlag: function(){
  		this.shoucangFlag = !this.shoucangFlag
  	}
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.headerWrapper{
	padding: 20px 20px;
	border-top: #99b0c7 1px solid;
	>div:nth-child(1){
		@include list(row);
		justify-content: space-between;
		padding-bottom: 20px;
		border-bottom: #99b0c7 1px solid;
		.left{
			>h4{
				padding: 10px 0 0 0; 
				font-size: 30px;
				font-weight: 500;
			}
			>div{
				.star{
					@include star($height:25px);
					display: inline-block;
				}
				h5{
					display: inline-block;
					font-size: 25px;
					color: #868a8e;
				}
			}
		}
		.right{
			padding-top: 10px;
			span{
				display: block;
				font-size: 30px;
				text-align: center;
				color: red;
			}
			h5{
				padding-top: 10px;
				font-size: 25px;
			}
			h6{
				padding-top: 10px;
				font-size: 25px;
				color: #868a8e;
			}
		}
	}
	>div:nth-child(2){
		@include list(row);
		margin: 20px 0 0 0;
		>div{
			flex:1;
			text-align: center;
			border-right: #99b0c7 1px solid;
		}
		>div:last-child{
			border-right:none;
		}
		h5{
			font-size: 25px;
			color:#868a8e;
		}
		h4{
			font-size: 35px;
		}
		span{
			font-size: 25px;
			color:#868a8e;
		}
	}
}
.supportsWrapper{
	.supporticon_hock{
		@include supporticon($size:30px,$color:#000);
		margin: 20px 50px 20px 50px;
		padding-bottom: 20px;
		background-position: left top;
		@include ellipsis;
	}
}
.sellerinfoWrapper{
	padding: 0 30px;
	h4{
		font-size: 30px;
		padding: 20px 0;
		border-bottom: #99b0c7 1px solid;
		span{
			float: right;
			font-size: 30px;
			color: #868a8e;
		}
	}
	h4:nth-child(2){
		border-top: #99b0c7 1px solid;
	}
}
</style>