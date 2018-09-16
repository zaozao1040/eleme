<template>
	<div :class="$style.detailWrapper">
		<div :class="$style.shoppingcartWrapper">
			<div :class="$style.title">
				<div>购物车</div>
				<div @click='handleClearFoods()'><span class="iconfont icon-shanchu">&nbsp;清空</span></div>
			</div>
			<div :class="$style.content">
				<ul>
					<li v-if="item.count>0" v-for="(item,index) of this.selectFoods" :key="index">
						<h4>{{item.name}}</h4>
						<h5>¥{{item.count*item.price}}</h5>
						<v-numcontrol :food="item"></v-numcontrol>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import numcontrol from "./numcontrol.vue"
export default {

  name: 'shoppingcartdetail',
  components: {
  	"v-numcontrol":numcontrol
  },
  props: {
    selectFoods: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
  	handleClearFoods: function () {
  		for(let i=0;i<this.$store.state.selectFoods.length;i++){
  			this.$store.state.selectFoods[i].count = 0
  		}
  		this.$store.dispatch('changeShowCartDetailFlag')
  	}
  },
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.detailWrapper{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(7,17,27,0.6);
	.shoppingcartWrapper{
		position: absolute;
		bottom: 80px;
		left: 0;
		right: 0;
		.title{
			@include list(row);
			padding: 20px 30px;
			justify-content: space-between;
			height: 30px;
			line-height: 30px;
			font-size: 30px;
			font-weight: 800;
			background: #e6e5d0;
			border: black 1px solid;
			border-top-left-radius:20px;
			border-top-right-radius:20px;
			>div:nth-child(1){
				color:black;
			}
			>div:nth-child(2){
				color: #0085ff;
				span{
					font-size:30px;
				}
			}
		}
		.content{
			padding: 0 15px;
			border: black 1px solid;
			background:#bdcfd8;
			li{
				@include list(row);
				padding: 20px 10px;
				border-bottom: 1px black solid;
				box-sizing: border-box;
				height: 70px;
				&:last-child{
					border-bottom: none;
				}
				>h4{
					flex:2;
					font-size: 30px;
					line-height: 30px;
					font-weight: 600;
					vertical-align: middle;
				}
				>h5{
					flex:1;
					text-align: right;
					font-size: 25px;
					line-height: 30px;
					color: red;
					vertical-align: middle;
				}
				>section{
					flex:1;
					text-align: right;
					line-height: 30px;
					font-size: 25px;
					vertical-align: middle;
				}
			}
		}
	}
}
</style>