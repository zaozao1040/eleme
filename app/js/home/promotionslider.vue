<template>
	<section :class="$style.wrapper">
		<router-link :to="{name:'vip'}" tag="div">
			<v-panel :class="$style.superNumber" title="超级会员" cname="iconfont">
				<span :class="$style.jianglijin">14个奖励金&nbsp;<span class="iconfont icon-enter"></span></span>
			</v-panel>
		</router-link>
		<div :class="$style.advices">
			<router-link tag="div" :to="items1[0].href" :class="$style.advice">
				<p>水果套餐</p>
				<p>果品齐全吃得好</p>
				<p>立即抢购 ></p>
				<img :src="items1[0].src">
			</router-link>
			<router-link tag="div" :to="items1[1].href" :class="$style.advice">
				<p>鲜蔬限量抢购</p>
				<p>超值美味 9.9元起</p>
				<p><span style="color:red">1012</span>人正在抢 ></p>
				<img :src="items1[1].src">
			</router-link>
		</div>
		<v-slider sliderFlag="sliderFlag_img" :items="items2" ></v-slider>
	</section>
</template>

<script>
import panel from "../core/panel.vue"
import slider from '../core/slider.vue'
export default {

  name: 'promotionslider',
  components: {
  	"v-panel":panel,
  	'v-slider':slider
  },
  data () {
    return {
    	items1:[{
    		href:"/sellers/shuiguo",
    		src:'//fuss10.elemecdn.com/6/f0/3f9ab1b97f166b2240146274ee790png.png?imageMogr/format/webp/thumbnail/!128x128r/gravity/Center/crop/128x128/'
    	},{
    		href:"/sellers/chufangshengxian",
    		src:'//fuss10.elemecdn.com/0/95/6e4aa6d56e04848ccd9532fe36fb1png.png?imageMogr/format/webp/thumbnail/!128x128r/gravity/Center/crop/128x128/'
    	}],
    	items2:[{
    		href:"hongbao",
    		src:'//fuss10.elemecdn.com/1/74/c1d586bd8636d6824ba74d4a1b32cjpeg.jpeg?imageMogr/format/webp/thumbnail/!700x176r/gravity/Center/crop/700x176/'
    	},{
    		href:"hongbao",
    		src:'//fuss10.elemecdn.com/1/15/fb5ac30f746bc270b4acc52ea2875jpeg.jpeg?imageMogr/format/webp/thumbnail/!700x176r/gravity/Center/crop/700x176/'
    	}]
    }
  }
}
</script>

<style lang="scss" module>
	@import "~@/css/element.scss";
	@import "~@/css/layout.scss";
	.wrapper{
		@include flex(column);
		padding: 0 20px;
		.superNumber{
			@include panel($margin:10px 0);
			position: relative;
			box-sizing: border-box;
			border-radius: 5px;
			height: 80px;
			background-color: #c3b42e;
			>h5{
				text-align: left;
				font-size: 30px;
				line-height: 80px;
				height: 80px;
				&:before{
					content: '\e66b'; 
					color: #403d27;
					vertical-align: middle;
				}				
				&:after{
					content: '  已节省32元'; 
					font-size: 20px;
					vertical-align: middle;
				}
			}
			.jianglijin{
				position: absolute;
				right:20px;
				top:0;
				line-height: 80px;
				font-size: 25px;
			}
			.icon-enter{
				font-size: 20px;
			}
		}
		.advices{
			@include flex(row);
			height: 200px;
			margin-bottom: 10px;
			div:first-child{
				margin-right: 5px;
			}
			div:last-child{
				margin-left: 5px;
			}
			.advice{
				flex:1;
				padding: 20px;
				position:relative;
				background-color: #d8d9e0;
				p:nth-child(1){
					color:red;
					font-size: 28px;
				}
				p:nth-child(2){
					line-height:40px;
					color:#777;
					font-size: 15px;
				}
				p:nth-child(3){
					color:#af8260;
					font-size: 15px;
				}
				img{
					position: absolute;
					width: 60%;
					right: 0; 
					bottom: 0;
				}
			}
		}
	}
</style>