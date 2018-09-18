<template>
	<section>
		<v-heador title="金币兑换"></v-heador>
      <div :class="$style.rewardheader">
        <h1>{{reward.num}}</h1>
				<h4>当前金币 ></h4>
      </div>
      <div>
        <v-title title="兑换商品"></v-title>
      </div>
      <ul :class="$style.rewardcontent">
        <li v-for="(item,index) of reward.exchanges" :key="index">
          <h4>{{item.title}}</h4>
          <div>
            <h5>{{item.points_required}}&nbsp;<span>金币</span></h5>
            <v-btn :class="$style.btn">{{item.corner_marker}}</v-btn>
          </div>
          
          <a :href="item.url">
            <img :src="item.img">
          </a>
        </li>
      </ul>
      <h5 :class="$style.chakan">查看更多 ></h5>
		<v-footor></v-footor>
	</section>
</template>

<script>
import axios from 'axios'
import heador from "../public/heador.vue"
import footor from "../public/footor.vue"
import title from "../core/title.vue"
import btn from "../core/btn.vue"
export default {

  name: 'reward',
  components: {
  	"v-heador":heador,
    "v-footor":footor,
    "v-title":title,
    "v-btn":btn
  },
  data () {
    return {
      reward: {}
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
        this.reward = res.data.mine.reward
      }
    }
  },
  created: function () {
    this.getDetailInfo()
    console.log(this.reward)
  }
}
</script>

<style lang="scss" module>
@import "~@/css/reset.scss";
@import "~@/css/element.scss";
.rewardheader{
  padding: 0 40px 30px 40px;
  background-color: #0085ff;
  position: relative;
  top: -1px;
  >h1{
    font-size: 60px;
    color: #fff;
  }
  >h4{
    padding-top: 10px;
    font-size: 20px;
    color: #fff;
  }
}
.rewardcontent{
  overflow: hidden;
  >li{
    padding: 20px;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border: #5f5f5f29 1px solid;
    >h4{
      font-size: 25px;
      
    }
    >div{
      >h5{
        display: inline-block;
        padding-top: 10px;
        font-size: 25px;
        color: red;
        vertical-align: bottom;
        >span{
          color: #93999f; 
        }
      }
      .btn{
        @include btn($height: 25px,$size:20px,$color:#fff,$bgcolor:#F04752,$padding:0,$radius:5px);
        display: inline-block;
      }
    }
    img{
      width: 100%;
    }
  }
}
.chakan{
  padding: 30px;
  font-size: 25px;
  text-align: center;
  color: #93999f;
}
</style>