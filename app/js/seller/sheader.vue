<template>
	<div>
    <section :class="$style.wrapper">
      <img :src="$route.query.src" />
      <div :class="$style.absWrapper" v-show="!showAbs"
      :style="opacityStyle">
        <v-iconfont :class="$style.iconfont" cname="icon-qiehuanqizuo" url="backFlag" ></v-iconfont>
      </div>
      
   		
      <div :class="$style.imgContentWrapper">
        <span class="iconfont icon-qiehuanqizuo" @click="handleGoto('backFlag')">
        </span>
        <div :class="$style.imgWrapper">
          <img :src="$route.query.src">
        </div>
        <div :class="$style.contentWrapper">
          <div>
            <img src="./img/brand@2x.png"/>
            <span>{{$route.query.name}}</span>
          </div>
          <h5>
            {{this.seller.description}}/{{this.seller.deliveryTime}}分钟送达
          </h5>
          <div v-if="this.seller.supports" @click="handleHideBulletin">
            <v-supporticon :support="this.seller.supports[0]" :class="$style.supporticon"></v-supporticon>
            <h6>{{this.seller.supports.length}}个活动<span class="iconfont icon-xiala"></span></h6>
          </div>
        </div>
      </div>

      <div :class="$style.bulletinWrapper" @click="handleHideBulletin">
        <img src="./img/bulletin@2x.png"/>
        {{this.seller.bulletin}}
      </div>
    </section>
	</div>
</template>

<script>
import iconfont from "../core/iconfont.vue"
import supporticon from "../core/supporticon.vue"
export default {

  name: 'sheader',
  components: {
  	"v-iconfont":iconfont,
    "v-supporticon":supporticon
  },
  props: {
  	seller: {
  		type: Object,
  		default: {}
  	}
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleHideBulletin: function(){
      this.$store.dispatch('changeBulletinFlag')
    },
    handleGoto: function(url){
      if(url=='backFlag'){
        this.$router.go(-1)
      }else{
        this.$router.push(url)
      } 
    },
    handleScroll: function () {
      const top = document.documentElement.scrollTop
      /*console.log(top)*/
      if (top > 60){
        /*opacity不能大于一，这里取一个160的值为透明度为1的临界点*/
        let opacity = top / 500
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated: function () {
    console.log('activated')
    window.addEventListener('scroll',this.handleScroll,true)
  },
  deactivated: function () {
    console.log('deactivated')
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="scss" module>
	@import "~@/css/reset.scss";
	@import "~@/css/element.scss";
  .wrapper{
    position: relative;
    >img{
    	z-index: -1;
			position: absolute;
			top: 0;
			left:0;
      width: 100%;
      height: 240px;
      filter: blur(15px);
      overflow: hidden;
    }
    .absWrapper{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      background: #0085ff;
      z-index: 99;
      .iconfont{
        @include iconfont();
        position: absolute;
        top:20px;
        left:20px;
      } 
    }
    .imgContentWrapper{
      display: flex;
      >span{
        color: #fff;
        font-size: 30px;
        text-align: center;
        position: relative;
        top:20px;
        left:20px;
      }
      .imgWrapper{
        padding: 70px 24px 36px 48px;
        width: 120px;
        height: 120px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      .contentWrapper{
        flex:1;
        vertical-align: top;
        padding: 70px 24px 36px 0;
        div:nth-child(1){
          height: 40px;
          line-height: 30px;
          >span{
            vertical-align: top;
            font-size: 30px;
            color: #fff;
            font-weight: bold;
            @include ellipsis;
          }
        }
        >h5{
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          color: #fff;
        } 
        div:nth-child(3){
          height: 40px;
          line-height: 40px;
          display: flex;
          justify-content: space-between;
          .supporticon{
            @include supporticon($color:#fff);
          }
          >h6{
            height: 40px;
            width: 120px;
            line-height: 40px;
            font-size: 20px;
            text-align: center;
            color: #fff;
            background: #5f5858;
            border-radius: 20px;
            >span{
              height: 40px;
              line-height: 40px;
              font-size: 20px;
              color: #fff;      
            }
          }

        }
      }
    }

    .bulletinWrapper{
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      background: #5f5858;
      font-size: 20px;
      color: #fff; 
      @include ellipsis;
      >img{
        vertical-align: middle;
 
      } 
    }
  }
</style>