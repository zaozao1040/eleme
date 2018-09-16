<template>
	<section :class="$style.bulletinWrapper" @click="handleHideBulletin" v-if="this.$store.state.bulletinFlag">
		<h4>{{$route.query.name}}</h4>
		<v-star :class="$style.star" :score="this.seller.score"></v-star>
		<div :class="$style.title">
			<div></div>
			<h5>活动信息</h5>
			<div></div>
		</div>
		<v-supporticon :class="$style.supporticon" v-for="(item,index) in this.seller.supports" :key="index" :support="item"></v-supporticon>
		<div :class="$style.title">
			<div></div>
			<h5>商家公告</h5>
			<div></div>
		</div>
		<h5>{{this.seller.bulletin}}</h5>
		<div :class="$style.iconfontWrapper">
			<span class="iconfont icon-guanbi"></span>
		</div>
	</section>
</template>

<script>
import star from "../core/star.vue"
import supporticon from "../core/supporticon.vue"
export default {

  name: 'bulletin',
  components: {
  	"v-star":star,
  	"v-supporticon":supporticon
  },
  props: {
  	seller: {
  		type: Object,
  		default: {}
  	}
  },
  data () {
    return {
    }
  },
  methods: {
  	handleHideBulletin: function(){
  		this.$store.dispatch('changeBulletinFlag')
  	}
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss"; 
.bulletinWrapper{
	background: rgba(7,17,27,0.8);
	z-index: 30;
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	>h4{
		padding-top: 100px; 
		text-align: center;
		font-size: 30px;
		color:#fff;
	}
	.star{
		@include star($height: 35px);
		display: block;
		margin: 30px auto;
	}
	.title{
		@include list(row);
		div{
			flex:1;
			margin: 12px 60px;
			border-bottom: 1px solid #fff;
		}
		h5{
			font-size: 25px;
			color: #fff;
		}
	}
 	.supporticon{
		@include supporticon($size:20px,$color:#fff);
		margin: 40px 120px;
	} 
	>h5{
		margin: 40px 60px;
		font-size: 20px;
		color:#fff;
		line-height: 40px;
	}
	.iconfontWrapper{
		position: absolute;
		bottom: 100px;
		width: 100%;
		text-align: center;
		>span{
			color:#fff;
			font-size: 40px;
		}
	}
}
</style>