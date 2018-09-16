<template>
	<section :class="$style.wrapper">
		<v-heador title="会员信息"></v-heador>
    <div :class="$style.heador">
      <div :class="$style.top">
        <div>
          <span class="iconfont icon-zhuanye"></span>
        </div>
        <div>
          <h4>{{reward.expire}}到期</h4>
          <h5>优惠城市 {{reward.city}}[修改]</h5>
        </div>
        <v-btn>立即续费</v-btn>
      </div>
      <div :class="$style.bottom">
        <div>
          <h1>{{reward.num}}</h1>
        </div>
        <div>
          <h4>个奖励金</h4>
          <h5>去兑换红包 ></h5>
        </div>
        <div>
          <h5>已为我节省32元></h5>
        </div>
      </div>
    </div>
    <div :class="$style.card"></div>
    <v-panel title="奖励金兑换红包" :class="$style.panel">
      <div :class="$style.bulletin" v-if="showBulletinFlag">
        会员期内每月获赠20个奖励金哦！
        <span class="iconfont icon-guanbi" @click="changeBulletinFlag"></span>
      </div>
      <ul :class="$style.exchangelist">
        <li v-for="(item,index) of exchangelist" :key="index">
          <div>
            <h1>¥{{item.money}}</h1>
            <h5>{{item.limit}}</h5>
            <h4>{{item.des}}</h4>            
          </div>
          <div>
            <v-btn :class="$style.btn">{{item.rewardcount}}奖励金兑换</v-btn>
          </div>
          <div :class="$style.hock_1"></div>
          <div :class="$style.hock_2"></div>
        </li>
      </ul>
      <h5>查看更多红包 ></h5>
    </v-panel>
		<v-footor></v-footor>
	</section>
</template>

<script>
import axios from 'axios'
import heador from "../public/heador.vue"
import btn from "../core/btn.vue"
import panel from "../core/panel.vue"
import footor from "../public/footor.vue"
export default {

  name: 'vip',
  components: {
  	"v-heador":heador,
    "v-btn":btn,
    "v-panel":panel,
    "v-footor":footor
  },
  data () {
    return {
      reward: {},
      showBulletinFlag: true,
      exchangelist: [
        {
          money: 5,
          limit: "无门槛红包",
          des: "饿了么通用红包",
          rewardcount: 5
        },{
          money: 10,
          limit: "满20可用",
          des: "果蔬便利专用红包",
          rewardcount: 1
        },{
          money: 3,
          limit: "无门槛红包",
          des: "肯德基专用红包",
          rewardcount: 1.5
        },{
          money: 3,
          limit: "无门槛红包",
          des: "饿了么通用红包",
          rewardcount: 2
        },{
          money: 4,
          limit: "满20可用",
          des: "汉堡王专用红包",
          rewardcount: 1
        }
      ]
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
    },
    changeBulletinFlag: function(){
      this.showBulletinFlag = false
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
.wrapper{
  .heador{
    background-image: url('//shadow.elemecdn.com/faas/h5/static/new_header_bg.00e040f.png');
    background-size: 100% auto;
    padding: 30px;
    .top{
      @include list(row);
      >div:nth-child(1){
        width: 80px;
        >span{
          font-size: 50px;
          color: #fffe00;
        }
      }
      >div:nth-child(2){
        flex:3;
        padding-left: 20px;
        >h4{
          font-size: 25px;
          color: #c3b42e;
        }
        >h5{
          font-size: 20px;
          color: #7d7272;
          padding-top: 10px;
        }
      }
      >div:nth-child(3){
        @include btn($height:40px,$size:25px,$color:#c3b42e,$padding:3px 20px,$radius:35px)
        background-color: #af8231;
        border: 2px solid #c3b42e;
        color: #fff;
      }
    }
    .bottom{
      @include list(row);
      padding-top: 20px;
      >div:nth-child(1){
        width: 80px;
        >h1{
          font-size: 70px;
          color: #fffe00;
        }
      }
      >div:nth-child(2){
        flex: 50%;
        padding:10px 0 0 5px;
        >h4{
          font-size: 25px;
          color: #c3b42e;
        }
        >h5{
          padding-top: 5px;
          font-size: 20px;
          color: #c3b42e;
        }
      }
      >div:nth-child(3){
        >h5{
          padding-top: 40px;
          font-size: 25px;
          color: #c3b42e;
        }
      }  
    }
  }
  .card{
    width: auto;
    height: 0;
    padding-bottom: 27%;
    margin: 10px 20px;
    background-image: url('//shadow.elemecdn.com/faas/h5/static/banner@2x.3682ad5.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .panel{
    @include panel($bgcolor:#fff,$padding:0,$margin:20px 0,$height:60px,$txtPadding:0 20px,$color:#a7970c,$fontsize:30px)
    .bulletin{
      margin: 0 20px;
      padding: 5px 10px;
      height: 40px;
      line-height: 40px;
      background-color: #fff4be;
      border: 1px solid #ffe4be;
      color: #735b27;
      font-size: 25px;
      >span{
        float: right;
        font-size: 20px;
      }
    }
    .exchangelist{
      padding: 0 10px;
      overflow: hidden;
      >li{
        position: relative;
        float: left;
        width: 50%;
        padding: 10px 10px;
        box-sizing: border-box;
        >div:nth-child(1){
          background: #c1c1a5;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          >h1{
            padding: 10px 0;
            text-align: center;
            font-size: 40px;
            font-weight: 500;
            color: red;
          }
          >h5{
            text-align: center;
            font-size: 25px;
            color: #7d7272;
          }
          >h4{
            padding: 10px 0;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            color: #324094;
          }
        }
        >div:nth-child(2){
          display: flex;
          justify-content: center;
          margin-top: 3px;
          background: #9e9c95;
          height: 26px;
          padding: 10px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          .btn{
            @include btn($height: 20px,$size:20px,$color:#fff,$bgcolor:#f11808,$padding:3px 20px,$radius:30px);
          }
        }
       .hock_1{
          position: absolute;
          width: 30px;
          height: 20px;
          bottom: 45px;
          left: -10px;
          border-radius: 40px;
          background: #fff;
        } 
        .hock_2{
          position: absolute;
          width: 30px;
          height: 20px;
          bottom: 45px;
          right: -10px;
          border-radius: 40px;
          background: #fff;
        }
      }
    }
  }
}
</style>