<template>
	<section :class="$style.mine">
		<v-heador title="我的"></v-heador>
		<div :class="$style.headorBottom">
			<div>
				<span class="iconfont icon-changyonglogo40"></span>
			</div>
			<div>
				<h4>{{mine.name}}</h4>
				<h5>
					<span class="iconfont icon-iconfontshouji"></span>
					{{mine.phone}}
				</h5>
			</div>
			<div>
				<span class="iconfont icon-qiehuanqiyou"></span>
			</div>
		</div>
		<div :class="$style.support">
			<div>
				<h4>{{mine.money}}<span>元</span></h4>
				<h5>钱包 ></h5>
			</div>
			<router-link :to="{name:'hongbao'}" tag="div">
				<h4 v-if="mine.hongbao">{{mine.hongbao.length}}<span>个</span></h4>
				<h5>红包 ></h5>
			</router-link>
			<div>
				<h4 v-if="mine.reward">{{mine.reward.num}}<span>个</span></h4>
				<h5>金币 ></h5>
			</div>
		</div>
		<v-interval :class="$style.interval"></v-interval>
		<div :class="$style.rowWrapper">
			<span class="iconfont icon-dingweiweizhi"></span>
			<h4>我的地址</h4>
			<span :class="$style.jinru" class="iconfont icon-qiehuanqiyou"></span>
		</div>
		<v-interval :class="$style.interval"></v-interval>
		<div :class="$style.rowWrapper">
			<div>
				<span class="iconfont icon-shangcheng2"></span>
				<h4>金币商城</h4>
				<span :class="$style.jinru" class="iconfont icon-qiehuanqiyou"></span>
			</div>
			<div>
				<span class="iconfont icon-bajiefuli"></span>
				<h4>分享拿10元现金</h4>
				<span :class="$style.jinru" class="iconfont icon-qiehuanqiyou"></span>
			</div>
		</div>
		<v-interval :class="$style.interval"></v-interval>
		<div :class="$style.rowWrapper">
			<div>
				<span class="iconfont icon-kefu"></span>
				<h4>我的客服</h4>
				<span :class="$style.jinru" class="iconfont icon-qiehuanqiyou"></span>
			</div>
			<div>
				<span class="iconfont icon-xiazai"></span>
				<h4>下载饿了么APP</h4>
				<span :class="$style.jinru" class="iconfont icon-qiehuanqiyou"></span>
			</div>
		</div>
		<v-interval :class="$style.interval"></v-interval>
		<v-footor></v-footor>
	</section>
</template>

<script>
import heador from "../public/heador.vue"
import interval from "../core/interval.vue"
import footor from "../public/footor.vue"
import axios from 'axios'
export default {
  name: 'mine',
  components: {
  	"v-heador":heador,
  	"v-interval":interval,
  	"v-footor":footor
  },
  data () {
    return {
    	mine: {}
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/mine.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc: function (res) {
      //console.log(res)
      res = res.data
      if (res.data) {
        this.mine = res.data.mine
      }
    }
  },
  created: function () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.mine{
	.interval{
		@include interval($height:20px);
	} 
	.headorBottom{
		@include list(row);
		justify-content: space-between;
		background: #0085ff;
		border-top: #0085ff 1px solid;
		>div:nth-child(1){
			margin: 20px;
			width: 80px;
			height: 80px;
			line-height: 80px;
			border-radius: 40px;
			background: #f9f8de;
			span{
				font-size: 100px;
				position: relative;
				left: -10px;
				color: #cccb20;
			}
		}
		>div:nth-child(2){
			float: left;
			flex: 2;
			padding: 20px 20px;
			color: #fff;
			>h4{
				margin:10px 0;
				font-size: 25px;
			}
			>h5{
				margin: 0;
				font-size: 20px;
				>span{
					font-size: 20px;
				}
			}
		}
		>div:nth-child(3){
			flex: 1;
			padding:20px;
			text-align: right;
			span{
				font-size: 20px;
				color: #fff;
			}
		}
	}
	.support{
		@include list(row);
		text-align: center;
		div{
			flex:1;
			border-right: #d9e7f5 1px solid;
			padding: 30px;
			h4{
				margin: 0;
				font-size: 50px;
				color:#0085ff;
				span{
					font-size: 20px;
					color:#0085ff;
				}
			}
			h5{
				margin: 10px 0 0 0;
				font-size: 20px;
			}
		}

 		>div:nth-child(2){
			h4{
				color: red;
				span{
					color:red;
				}
			}
		}
		>div:nth-child(3){
			border-right: none;
			h4{
				color: green;
				span{
					color:green;
				}
			}
		} 
	}
	.rowWrapper{
		padding: 20px 0 20px 20px;
		font-size: 25px;
		color: #50555a;
		span{
			font-size: 25px;
		}
		h4{
			display: inline-block;
			margin: 0 0 0 20px;
		}
		.jinru{
			float: right;
			padding-right: 20px;
			font-size: 20px;
			position: relative;
			top: 5px;
		}
		>div:nth-child(2){
			padding-top: 20px;
			margin-top: 20px;
			border-top: #99b0c7 1px solid;
		}
	}
}

</style>
<style lang="scss" scoped>
.icon-dingweiweizhi{
	color: #0085ff;
}
.icon-shangcheng2{
	color: green;
}
.icon-bajiefuli{
	color: red;
}
.icon-kefu{
	color: #0085ff;
}
.icon-xiazai{
	color: #0085ff;
}
</style>