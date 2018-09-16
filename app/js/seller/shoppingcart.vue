<template>
	<div :class="$style.shopcart">
		<div :class="$style.content">
			<div :class="$style.contentleft">
				<div :class="$style.logowrapper">
					<div :class="{'highlight1':totalCount>0}" @click="handleShowCartDetail()">
						<span class="iconfont icon-caigou-xianxing"></span>
					</div>
					<div :class="$style.num" v-show="totalCount>0">{{totalCount}}</div>
				</div>
				<div :class="{'highlight2':totalPrice>0}">￥{{totalPrice}}</div>
				<div :class="$style.desc">另需配送费￥{{deliveryPrice}}</div>
			</div>
			<div :class="$style.contentright">
				<div :class="payClass">
					{{payDesc}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'shoppingcart',
  props: {
  	deliveryPrice: Number,
  	minPrice: Number,
    selectFoods: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((food) => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      } else {
        return '去结算';
      }
    },
		payClass() {
			if (this.totalPrice < this.minPrice) {
				return 'not-enough';
			} else {
				return 'enough';
			}
		}
  },
  methods: {
  	handleShowCartDetail: function () {
  		this.$store.dispatch('changeShowCartDetailFlag')
  	}
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.shopcart{
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 99;
	width:100%;
	height: 80px;
	background: #141d27;
	border-top-left-radius:20px;
	.content{
		@include list(row);
		color: rgba(255, 255, 255, 0.4);
		.contentleft{
			flex: 1;
			.logowrapper{
				display: inline-block;
				position: absolute;
				z-index: 60;
				left: 40px;
				top: -20px;
				width: 106px;
				height: 106px;
				border-radius: 53px;
				background: #141d27;
				>div:nth-child(1){
					position: relative;
					z-index: 70;
					top: 12px;
					left: 16px;
					width: 74px;
					height: 74px;
					border-radius: 37px;
					text-align: center;
					background: #2b343c;
					span{
						line-height: 88px;
						font-size: 60px;
						color: #f3f5f7;
					}
				}
				.num{
					position: absolute;
					right: 5px;
					top: 8px;
					z-index: 80;
					width: 40px;
					height: 30px;
					border-radius: 26px;
					background-color: rgb(240,20,20);
					box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
					font-size: 25px;
					font-weight: 700;
					color: rgb(255,255,255);
					line-height: 30px;
					text-align: center;
					vertical-align: middle;
				}	
			}
			>div:nth-child(2){
				display: inline-block;
				margin: 20px 0 20px 140px;
				padding-right: 20px;
				font-size: 40px;
				height: 40px;
				line-height: 40px;
				color: rgba(255,255,255,0.4);
				border-right: .02rem solid rgba(255,255,255,0.5);
				vertical-align: middle;
			}
			.desc{
				display: inline-block;
				padding-left: 10px;
				font-size: 25px;
				color: rgba(255,255,255,0.4);
				font-weight: 700;
				height: 80px;
				line-height: 80px;
				vertical-align: middle;
			}
				
		}
		.contentright{
			flex: 0 0 25%;
			height: 80px;
			font-size: 30px;
			background: rgba(255,255,255,0.2);
			font-weight: 700;
			line-height: 80px;
			text-align: center;
			color:white;
			>div{
				height: 80px;
				line-height: 80px;
				text-align: center;
				font-size: 30px;
				font-weight: 700;
			}
		}
	}
		
}
</style>
<style lang="scss" scoped>
.highlight1{
	background-color: rgb(0,160,220)!important;
}
.highlight2{
	color: rgb(255,255,255)!important;
}
.not-enough{
	background: red;
}				
.enough{
	background: #00b43c;
	color: #fff;
}
					
</style>