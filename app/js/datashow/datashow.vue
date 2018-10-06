<template>
  <div :class="$style.wrapper">
    <h5 :class="$style.title">{{titleArr[i]}}</h5>
    <components :is="componentFlag[i]" ></components>
    <div :class="$style.icon1wrapper">
      <span :class="$style.icon1" class="iconfont icon-xiangshangshouqi-yuankuang" v-if="i>0" @click="gotoPage('back')"></span>
    </div>
    <div :class="$style.icon2wrapper">
      <span :class="$style.icon2" class="iconfont icon-xiangxiazhankai-yuankuang" v-if="i<componentFlag.length-1" @click="gotoPage('forword')"></span>
      <transition enter-active-class="animated flip"  >
        <span v-show="i==componentFlag.length-1" :class="$style.icon3" class="iconfont icon-tiaoguo" @click="gotoPage('home')"></span>
      </transition>
    </div>
    
  </div>
</template>

<script>
import datashow_home from "./datashow_home.vue"
import datashow_polyline from "./datashow_polyline.vue"
import datashow_bar from "./datashow_bar.vue"
import datashow_rada from "./datashow_rada.vue"
import datashow_pie from "./datashow_pie.vue"

export default {

  name: 'datashow',
  components: {
    "v-datashow_home":datashow_home,
    "v-datashow_polyline":datashow_polyline,
    "v-datashow_bar":datashow_bar,
    "v-datashow_rada":datashow_rada,
    "v-datashow_pie":datashow_pie,
  },
  data () {
    return {
      componentFlag: ['v-datashow_home','v-datashow_bar','v-datashow_pie','v-datashow_polyline','v-datashow_rada'],
      titleArr: ['','送餐之外有万物 医药订单涨一倍','炸鸡哪家强？国产更加香','吃相大数据 订单逐年增','你尽管饿 整个城市就是24小时食堂'],
      i: 0
    }
  },
  methods: {
    gotoPage: function(flag){
      if(flag=='back'){
        this.i = this.i-1
      }else if(flag =='forword'){
        this.i = this.i +1
      }else{
        this.$router.push('home')
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~swiper/dist/css/swiper.css';

</style>
<style lang="scss" module>
  @import "~@/css/element.scss";
  .wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-color: #c1c1c1;
    overflow: hidden; 
    .title{
      margin-top: 0;
      text-align: center;
      height: 600px;
      line-height: 500px;
      color: #7520da;
      //background: green;
       background: linear-gradient(#3496c7 , white 100%) 
    }
    .icon1wrapper{
      position: fixed;
      top: 50px;
      left: 0;
      right: 0;
      text-align: center;
    }
    .icon2wrapper{
      position: fixed;
      bottom: 50px;
      left: 0;
      right: 0;
      text-align: center;
    }
    .icon1{
      font-size: 80px;
      color: #fff;
    }
    .icon2{
      font-size: 80px;
      color: #76b8ec;
    }
    .icon3{
      font-size: 100px;
      color: #76b8ec;
      position: fixed;
      bottom: 40px;
      right: 50px;
    }
  }



</style>