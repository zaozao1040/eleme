<template>
	<section>
		<div :class="$style.ratingsHeader">
			<div :class="$style.left">
				<h4>{{seller.score}}</h4>
				<h5>综合评分</h5>
				<h6>高于周边商家93%</h6>
			</div>
			<div :class="$style.right">
				<div>
					<h4>服务态度</h4>
					<v-star :score="seller.score" :class="$style.star"></v-star>
					<h6>{{seller.score}}</h6>
				</div>
				<div>
					<h5 @click="handleChangebtnFlag('all')">产品质量</h5>
					<v-star :score="seller.score" :class="$style.star"></v-star>
					<h6>{{seller.score}}</h6>
				</div>
				<div>
					<h5>送达时间</h5>
					<h6>{{seller.deliveryTime}}分钟</h6>
				</div>
			</div>
		</div>
		<v-interval></v-interval>
		<div :class="$style.ratingsContent">
			<v-title title="商品评价"></v-title>
			<div :class="$style.btns">
				<v-btn :class="{'active':btnFlag === 'all'}" @click.native="handleChangebtnFlag('all')">全部</v-btn>&nbsp;
				<v-btn :class="{'active':btnFlag === 'advice'}" @click.native="handleChangebtnFlag('advice')">推荐</v-btn>&nbsp;
				<v-btn :class="{'active':btnFlag === 'shit'}" @click.native="handleChangebtnFlag('shit')">吐槽</v-btn>
			</div>
			<div :class="$style.tab">
				<span class="iconfont icon-gouxuan1" v-if="!tabFlag" @click="handleChangetabFlag()"></span>
				<span class="iconfont icon-gouxuan" :class="$style.gouxuan" v-if="tabFlag" @click="handleChangetabFlag()"></span>
				<span>只看有内容的评论</span>
			</div>
			<ul :class="$style.ratingsWrapper">
				<li v-for="(item,index) of ratings" :key="index" v-if="getReviewResult(item.text,item.rateType)">
					<div>
						<img :src="item.avatar" />
					</div>
					<div>
						<div>
							<h5>{{item.username}}</h5>
							<h6>{{ item.rateTime | formatDate}}</h6>
						</div>
						<div>
							<v-star :score="item.score" :class="$style.star"></v-star>
							<h5 v-if="item.deliveryTime">{{item.deliveryTime}}分钟送达</h5>
						</div>
						<div>{{item.text}}</div>
						<div>
							<span :class="$style.icondianzan" class="iconfont icon-dianzan3" v-if="item.rateType == 0"></span>
							<span class="iconfont icon-z-nolike" v-if="item.rateType == 1"></span>
							<v-btn :class="$style.btn" v-for="(item2,index2) of item.recommend" v-if="index2<3">{{item2}}</v-btn>
						</div>
					</div>
				</li>
			</ul>


		</div>
	</section>
</template>

<script>
import axios from 'axios'
import star from '../core/star.vue'
import interval from '../core/interval.vue'
import title from '../core/title.vue'
import btn from '../core/btn.vue'
import {formatDate} from '../core/js/date.js'
export default {

  name: 'goods_ratings',
  components: {
  	'v-star': star,
  	'v-interval': interval,
  	'v-title': title,
  	'v-btn': btn,

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
      ratings: [],
      btnFlag: 'all',
      tabFlag: false,
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/data.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc: function (res) {
      //console.log(res)
      res = res.data
      if (res.ret && res.data) {
        this.ratings = res.data.ratings
      }
    },
    handleChangebtnFlag: function(flag){
    	this.btnFlag = flag
    },
    handleChangetabFlag: function(){
    	this.tabFlag = !this.tabFlag
    },
  	getReviewTypeResult: function (type){
  		if( this.btnFlag=='all' ){
  			return true
  		}else if(this.btnFlag == 'advice' && type == 0){
  			return true
  		} else if(this.btnFlag == 'shit' && type == 1){
  			return true
  		} else {
  			return false
  		}
  	},
  	getReviewTextResult: function (text){
  		if( this.tabFlag == false ){
  			return true
  		}else{
  			if(text!=''){
  				return true
  			}else{
  				return false
  			}
  		}
  	},
  	getReviewResult: function (text,type) {
  		let tmp_1 = this.getReviewTypeResult(type)
  		let tmp_2 = this.getReviewTextResult(text)
  		let tmp = tmp_1 && tmp_2
  		return tmp 
  	}
  },
  mounted: function () {

    this.getDetailInfo()

  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.ratingsHeader{
	padding: 0 20px 20px 20px;
	border-top: #99b0c7 1px solid;
	.left{
		display: inline-block;
		text-align: center;
		border-right: #99b0c7 1px solid;
		padding-right: 20px;
		vertical-align: top;
		margin-top: 25px;
		h4{
			font-size: 40px;
			color:#f90;
		}
		h5{
			padding-top: 10px;
			font-size: 25px;
			color: black;
		}
		h6{
			padding-top: 10px;
			font-size: 25px;
			color: #868a8e;
		}
	}
	.right{
		display: inline-block;
		vertical-align: top;
		padding-left: 10px;
		.star{
			@include star($height:25px);
			display: inline-block;
			padding-top: 10px;
		}		
		h4{
			font-size: 25px;
			display: inline-block;
		}
		h5{
			padding-top: 10px;
			font-size: 25px;
			display: inline-block;
		}
		h6{
			padding-top: 10px;
			font-size: 25px;
			display: inline-block;
			color: #868a8e;
		}
	}
}
.ratingsContent{
	.btns{
		padding: 0 20px;
		>div{
			@include btn($size:25px,$bgcolor:#00a0dc,$padding:10px,$radius:10px);
		}
	}
	.tab{
		padding: 20px 20px;
		span{
			font-size: 25px;
		}
		>span:last-child{
			color: #868a8e;
		}
		.gouxuan{
			color:#00a0dc;
		}
	}
	.ratingsWrapper{
		>li{
			padding: 20px 20px;
			@include list(row);
			border-top: #868a8e 1px solid;
			>div:nth-child(1){
				flex:1;
				img{
					width: 100%;
				}
			}
			>div:nth-child(2){
				flex:9;
				padding-left: 20px;
				>div:nth-child(1){
					height: 40px;
					h5{
						float: left;
						font-size: 25px;
						color: #868a8e;
					}
					h6{
						float: right;
						font-size: 25px;
						color: #868a8e;
					}
				}
				>div:nth-child(2){
					height: 40px;
					.star{
						@include star($height:25px);
						display: inline-block;
						position: relative;
						top: -13px;
					}
					h5{
						display: inline-block;
						padding-left: 10px;
						font-size: 25px;
						color: #868a8e;
						vertical-align: top;
					}
				}
				>div:nth-child(3){
					font-size: 25px;
					padding-bottom: 20px;
				}
				>div:nth-child(4){
					span{
						font-size: 25px;
						position: relative;
						top: -5px;
					}
					.icondianzan{
						color: #0096a9;
					}
					.btn{
						@include btn($size:20px,$color:#868a8e,$bgcolor:white,$padding:5px 20px,$radius:5px)
						border: black 1px solid;
						width: 70px;
						margin-right: 10px;
						@include ellipsis;
					}
				}

			}
		}
	}
}

</style>
<style type="scss" scoped>
.active{
	box-shadow: 10px 5px 10px #888;
	position: relative;
	top: -5px;
	color: #fff200!important;
	font-weight: 800;
}
</style>