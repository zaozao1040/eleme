<template>
	<section :class="$style.list">
		<div v-for="(item,index) of sellers" :key="index">
			<router-link 
				:to="{path:'/seller',
							query:{
								src:item.avatar,
								name:item.name
							}}" tag="div">
				<div>
					<img :src="item.avatar">
				</div>
				<div>
					<h4>{{item.name}}</h4>
					<h5>
						<v-star :class="$style.star" :score="item.score"></v-star>
						{{item.score}}分 | 月售{{item.sellCount}}单
					</h5>  
					<h5>{{item.minPrice}}元起送 | 配送费{{item.deliveryPrice}}元</h5>
					<v-btn :class="$style.btn">{{item.type}}</v-btn>
					<div :class="$style.huodong">
						<div>
          		<v-supporticon 
          			:class="$style.supporticon"
          			v-for="(item2,index2) of item.supports" :key="index2"
          			v-if="index2 < (sellers[index].maxShowCount?sellers[index].maxShowCount:2)" 
          			:support="item2"
        			>
        			</v-supporticon>
						</div>
						<h5 @click.stop="handleChangeHuodongStatus(index)">
							{{item.supports.length}}个活动
							<span class="iconfont icon-xiangxiazhankai-yuankuang"  v-if="!sellers[index].maxShowCount || sellers[index].maxShowCount==2">
							</span>
							<span class="iconfont icon-xiangshangshouqi-yuankuang" v-if="sellers[index].maxShowCount==100"></span>
						</h5>
						
					</div>
				</div>
			</router-link>
		</div>
	</section>
</template>

<script>
import btn from "../core/btn.vue"
import star from "../core/star.vue"
import supporticon from "../core/supporticon.vue"
export default {

  name: 'sellersinfo',
  components: {
  	"v-btn":btn,
  	"v-star":star,
  	"v-supporticon":supporticon
  },
  props: {
  	sellers:{
  		type:Array,
  		default: []
  	}
  },
  data () {
    return {
			classMap : ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  methods: {
  	handleChangeHuodongStatus: function(index){
			if(this.sellers[index].maxShowCount){
	  		var maxShowCount = this.sellers[index].maxShowCount
	  		if(maxShowCount == 2){
	  			this.$set(this.sellers[index], "maxShowCount", 100)
	  		}else{
	  			this.$set(this.sellers[index], "maxShowCount", 2)
	  		}
			}else{
				this.$set(this.sellers[index], "maxShowCount", 100)
			}

  	}
  }



}
</script>

<style lang="scss" module>
	@import "~@/css/element.scss"; 
	.list{
		>div{
			>div{
				@include list(row);
				@include borderBottom();
				>div:nth-child(1){
					flex:1;
					padding: 20px 20px;
				}
				>div:nth-child(2){
					flex:4;
					padding: 20px 20px 20px 0;
					h4{
						font-size: 25px; 
					}
					h5{
						font-size: 20px;
						color: #7d7272;
						padding-top:20px;
						>span{
							font-size: 20px;
							color: #3aa4dc;
						}
						.star{
							@include star($height: 20px)
						}
					}
					.btn{
						margin-top:20px;
						color:#a22323;
						background-color:transparent;
						font-size:20px;
					}
					.huodong{
						@include list(row);
						justify-content: space-between;
						.supporticon{
							@include supporticon();
							background-position: left bottom; 
						}
					}
				}	
				img{
					width: 100%;
				}

			}
			&>div:last-child{
				border-bottom: none;
			}			
		}

	}
</style>