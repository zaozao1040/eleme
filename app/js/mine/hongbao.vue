<template>
	<section :class="$style.hongbao">
		<v-heador title="我的优惠"></v-heador>
		<ul>
			<li v-for="(item,index) of hongbao" :key="index">
				<div :class="$style.top">
					<div :class="$style.left">
						<h3>¥{{item.money}}</h3>
						<h5>满{{item.min}}元可用</h5>
					</div>
					<div :class="$style.middle">
						<h4>{{item.name}}</h4>
						<h5>{{item.limit1}}</h5>
						<h5>{{item.limit2}}</h5>
					</div>
					<div :class="$style.right">
						<h6>{{item.limit3}}</h6>
						<router-link tag="div" :to="item.href" :class="$style.advice">
							<v-btn :class="$style.btn">去使用</v-btn>
						</router-link>
					</div>
				</div>

				<div :class="$style.bottom">
					<h5>{{item.des}}</h5>
				</div>
				<div :class="$style.hock_1"></div>
			</li>
		</ul>
		<v-footor></v-footor>
	</section>
</template>

<script>
import heador from "../public/heador.vue"
import footor from "../public/footor.vue"
import btn from "../core/btn.vue"
import axios from 'axios'
export default {

  name: 'hongbao',
  components: {
  	"v-heador":heador,
  	"v-footor":footor,
  	"v-btn":btn
  },
  data () {
    return {
			hongbao: {},
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
        this.hongbao = res.data.mine.hongbao
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
@import "~@/css/reset.scss";
.hongbao{
	>ul{
		padding: 20px;
		background: #fff;
		li{
			padding: 10px 0;
			position: relative;
			.top{
				//border: black 1px solid;
				padding-bottom: 10px;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				@include list(row);
				background: #ffe2b9;
				.left{
					flex:1;
					text-align: center;
					h3{
						padding: 30px 0 10px 0;
						font-size: 30px;
						color: red;
					}
				}
				.middle{
					flex:2;
				}
				.right{
					flex:1;
					text-align: center;
					h6{
						font-size: 20px;
						color: red;
						padding: 20px 0 10px 0;
					}
					.btn{
						@include btn($height: 40px,$size:25px,$color:#fff,$bgcolor:#F04752,$padding:3px 20px,$radius:30px);
					}
				}
			}
			.bottom{
				margin-top: 3px;
				padding: 5px 20px;
				//border: black 1px solid;
				background: #fbe59a;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
			}
			h4{
				font-size: 25px;
				padding: 20px 0 10px 0;
			}
			h5{
				font-size: 20px;
				color: #868a8e;
				padding: 5px 0;
			}
			.hock_1{
				position: absolute;
				width: 20px;
				height: 20px;
				bottom: 40px;
				left: -10px;
				border-top-right-radius: 40px;
				border-bottom-right-radius: 40px;
				background: #fff;
			}
		}
	}
}
</style>