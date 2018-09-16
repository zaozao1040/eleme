<template>
	<div :class="$style.wrapper">
		<div> 
			<v-scroll :class="$style.gleft" ref="mscroll" refScrollWrapper='menuScroll'>
				<ul>
					<li v-for="(item,index) of goods" :key="index" :class="{'current':currentIndex === index}" @click="handleSelectMenu(index)">
						<div v-show="item.type>0" class="icon" :class="classMap[item.type]"></div>{{item.name}}
					</li>
				</ul>
			</v-scroll>
			<v-scroll :class="$style.gright" ref="fscroll" refScrollWrapper='foodsScroll'>
				<ul>
					<li v-for="(item,index) of goods" :key="index" class="foodPosition">
						<h4>{{item.name}}</h4>
						<ul>
							<li v-for="(item2,index2) of item.foods" :key="index2">
								<div :class="$style.foodWrapper">
									<div>
										<img :src="item2.icon">
									</div>
									<div>
										<h4>{{item2.name}}</h4>
										<h5 v-if="item2.description">{{item2.description}}</h5>
										<h5>月售{{item2.sellCount}}&nbsp;好评率:{{item2.rating}}</h5>
										<div>
											<h5>￥{{item2.price}}</h5>
											<h6 v-if='item2.oldPrice'>￥{{item2.oldPrice}}</h6>
											<div>
												<v-numcontrol :food="item2"></v-numcontrol>
											</div>

										</div>
										
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</v-scroll>
		</div>
		<v-shoppingcartdetail v-if="this.$store.state.ShowCartDetailFlag" :selectFoods="this.$store.state.selectFoods">
		</v-shoppingcartdetail>
		<v-shoppingcart 
			:deliveryPrice="deliveryPrice" 
			:minPrice="minPrice" 
			:selectFoods="this.$store.state.selectFoods">
		</v-shoppingcart>			
	</div>
</template>


<script>
import scroll from "../core/scroll.vue"
import supporticon from "../core/supporticon.vue"
import numcontrol from "./numcontrol.vue"
import shoppingcartdetail from "./shoppingcartdetail.vue"
import shoppingcart from "./shoppingcart.vue"
export default {

  name: 'goods_goodslist',
  components: {
  	"v-scroll" : scroll,
  	"v-supporticon":supporticon,
  	"v-numcontrol":numcontrol,
  	"v-shoppingcartdetail":shoppingcartdetail,
  	"v-shoppingcart":shoppingcart
  },
  props: {
  	goods: {
  		type: Array,
  		default: []
  	},
  	seller: {
  		type: Object,
  		default: {}
  	}
  },
  data () {
    return {
    	classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    	listHeight: [],
    	scrollY: 0,//这里是scrollY是指scroll滚动到的位置距离scroll最上沿的距离

    }
  },
  computed: {
    currentIndex: function () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];//listHeight[length]返回undefined,所以可以用!height2做判断不是最后一个
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    deliveryPrice: function(){
    	return this.seller.deliveryPrice
    },
    minPrice: function(){
    	return this.seller.minPrice
    }
  },
  //关键：goods数据是父组件ajax异步获取然后传给本组件的，所以本组件要先watch这个goods，待goods从空到赋值成功（接收父组件的赋值）后，才去calculateHeight处理实现listHeight的数组项，同时要nextTick渲染完成后才执行calculateHeight处理
  watch: {
  	goods: function(){
      this.$nextTick(() => {
        this.calculateHeight()
      });
  	}
  },

  methods: {
    handleSelectMenu: function (index) {
      let foodPosition = this.$refs.fscroll.getRef().getElementsByClassName('foodPosition');
      let el = foodPosition[index];
      this.$refs.fscroll.getScrollEl().scrollToElement(el, 300)
    },
    //计算foodscrool中，每一栏目的视口高度（例如 热销榜+热销榜里面的food 所有之和的高度
    calculateHeight: function () {
    	let foodPosition = this.$refs.fscroll.getRef().getElementsByClassName('foodPosition')
    	let height = 0
    	this.listHeight.push(height)
    	for (let i = 0; i< foodPosition.length; i++){
    		let item = foodPosition[i]
    		height += item.clientHeight;
    		this.listHeight.push(height)
    	}
			//console.log(foodPosition)
    },
  },
  mounted: function() {
  	//滚动时出发事件
    this.$refs.fscroll.getScrollEl().on('scroll', (pos) => { 
	    this.scrollY = Math.abs(Math.round(pos.y)); 
	    //console.log(this.scrollY)  
	    //console.log('currentIndex',this.currentIndex)
		})
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.wrapper{
	@include list(row);
	position: relative;
	>div{
		.gleft{
			@include scroll;
			width: 25%;
	    overflow: hidden;
	    position: fixed;
	    top: 340px;
	    left: 0;
	    bottom: 0; 
			ul{
				@include list(column);
				li{
					vertical-align: middle;
					padding: 40px 15px;
					font-size: 25px;
				}
			}
		}		
		.gright{
			@include scroll;
			width: 75%;
	    overflow: hidden;
	    position: fixed;
	    top: 340px;
	    right: 0;
	    bottom: 0; 
	    left: auto;
	    @include ellipsis;
	    >div{
				>ul{
					>li{
	 					>h4{
	 						padding: 10px 30px;
	 						height: 30px;
							line-height: 30px;
							font-size: 25px;
	 					}
	 					>ul{
	 						padding: 20px;
	 						background: #fff;
	 						>li:last-child{
	 							>div{
 									border-bottom: none;
	 							}
							}
	 						>li{
	 							.foodWrapper{
	 								@include list(row);
	 								padding: 20px 0 10px 0;
	 								width: 100%;
	 								border-bottom: #00000029 1px solid;
	 								
									>div:nth-child(1){
										box-sizing: border-box;
										width: 28%;
										>img{
											width: 100%;
										}
									}
									>div:nth-child(2){
										padding-left: 20px;
										box-sizing: border-box;
										width: 72%;
										@include ellipsis;
										>h4{
											font-size: 30px;
											font-weight: 700;

										}
										>h5{
											padding-top: 15px;
											font-size: 25px;
											color: #93999f;
										}
										>div{
											>h5{
												margin-top: 15px;
												font-size: 25px;
												color:red;
												display: inline-block;
											}
											>h6{
												text-decoration: line-through;
												margin-top: 15px;
												font-size: 25px;
												color: #93999f;
												display: inline-block;
												font-style:italic;
											}
											>div{
												float: right;
												margin-top: 15px;
												display: inline-block;
											}
										}
										
									}
	 							}

	 						}
	 					}
					}
				}
	    }

		}			
	}

}


</style>
<style type="scss" scoped>
.icon{
	width:20px;
	height: 20px;
	display: inline-block;
	background-repeat: no-repeat;
	background-size: 20px 20px;
	background-position: left center; 
}
.decrease{
	background-image: url('./img/decrease_3@2x.png');
}
.discount{
  background-image: url('./img/discount_3@2x.png');
}
.guarantee{
  background-image: url('./img/guarantee_3@2x.png');
}
.invoice{
  background-image: url('./img/invoice_3@2x.png');
}
.special{
  background-image: url('./img/special_3@2x.png');
} 
.current{
	background: #fff;
	font-size: 30px!important;
	color: #0085ff;
}
.active{
	color:#0085ff!important;
}
</style>