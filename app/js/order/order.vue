<template>
	<section :class="$style.orders">
		<v-heador title="订单"></v-heador>
		<v-interval :class="$style.interval"></v-interval>
		<div v-for="(item,index) of orders" :key="index">
			<div :class="$style.orderWrapper">
				<div :class="$style.top">
					<div :class="$style.left">
						<img :src="item.imgurl">
					</div>
					<div :class="$style.right">
						<div>
							<div>
								<h4>{{item.name}}</h4>
								<h5>{{item.status}}</h5>
							</div>
							<h5>{{item.time}}</h5>
						</div>
						<div>
							<h4>{{item.info}}</h4>
							<h5>{{item.price}}</h5>
						</div>
					</div>
				</div>
				<div :class="$style.bottom">
  				<router-link 
						:to="{path:'/seller',
							query:{
								src:item.linksrc,
								name:item.linkname
							}}">
						<button>再来一单</button>
					</router-link>
				</div>
			</div>
			<v-interval :class="$style.interval"></v-interval>
		</div>
		<v-footor></v-footor>
	</section>
</template>

<script>
import heador from "../public/heador.vue"
import interval from "../core/interval.vue"
import footor from "../public/footor.vue"
export default {

  name: 'order',
  components: {
  	"v-heador":heador,
  	"v-interval":interval,
  	"v-footor":footor
  },
  data () {
    return {
    	orders: [
    		{
    			name: '粥品香坊',
    			info: '皮蛋瘦肉粥！！！',
    			time: "2018-3-12 12:23",
    			status: '订单已送达',
    			price: '21',
    			imgurl:"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    			linkname: '粥品香坊',
    			linksrc: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
    		},
				{
    			name: '丰源果品大卖场',
    			info: '香蕉葡萄等四件',
    			time: "2018-4-5 10:13",
    			status: '订单已送达',
    			price: '35',
    			imgurl:"//fuss10.elemecdn.com/1/60/703ef2b11c2e4403c14394b49cbeajpeg.jpeg?imageMogr/format/webp/thumbnail/150x/",
    			linkname: '丰源果品大卖场',
    			linksrc: '//fuss10.elemecdn.com/1/60/703ef2b11c2e4403c14394b49cbeajpeg.jpeg?imageMogr/format/webp/thumbnail/150x/'
    		}
    	]
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.orders{
 	.interval{
		@include interval($height:20px);
	} 
	.orderWrapper{
		padding:20px;
		.top{
			@include list(row);
			border-bottom: #99b0c7 1px solid;
			.left{
				flex: 1;
				img{
					width: 100%;
				}
			}
			.right{
				flex: 9;
				padding-left: 20px;
				>div:nth-child(1){
					padding-bottom: 20px;
					border-bottom: #99b0c7 1px solid;
					>div{
						@include list(row);
						justify-content: space-between;
						>h4{
							margin: 10px 0 0 0;
							height: 30px;
							line-height: 30px;
							font-size: 30px;
						}
						>h5{
							margin: 10px 0 0 0;
							height: 30px;
							line-height: 30px;
							font-size: 25px;
							color: #868a8e;
						}
					}
					>h5{
						margin: 10px 0 0 0;
						font-size: 25px;
						color: #868a8e;
					}
				}
				>div:nth-child(2){
					padding: 20px 0;
					@include list(row);
					justify-content: space-between;
					>h4{
						margin: 0;
						font-size: 25px;
						color: #868a8e;
					}
					>h5{
						margin: 0;
						font-size: 25px;
					}
				}
			}
		}
		.bottom{
			overflow: hidden;
			padding-top: 20px;
			button{
				float: right;
				width: 150px;
				text-align: center;
				border: #0085ff 1px solid;
				color: #0085ff;
				background: #fff;
				font-size: 25px;
				border-radius: 30px;
			}
		}
	}
}

</style>