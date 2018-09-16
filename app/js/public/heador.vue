<template>
  <section>
    <div :class="$style.relWrapper">
      <v-iconfont :class="$style.iconfont" cname="icon-qiehuanqizuo" url="backFlag" ></v-iconfont>
      <h5>{{title}}</h5>
    </div>
    <div :class="$style.absWrapper" v-show="!showAbs"
    :style="opacityStyle">
      <v-iconfont :class="$style.iconfont" cname="icon-qiehuanqizuo" url="backFlag" ></v-iconfont>
      <h5>{{title}}</h5>
    </div>
  </section>
</template>

<script>
import iconfont from "../core/iconfont.vue"
export default {

  name: 'heador',
  components: {
    "v-iconfont":iconfont
  },
  props: {
      title: {
          type: String,
          default: "",
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
    handleScroll: function () {
      const top = document.documentElement.scrollTop
      /*console.log(top)*/
      if (top > 200){
        /*opacity不能大于一，这里取一个160的值为透明度为1的临界点*/
        let opacity = top / 1000
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
  },
  activated: function () {
    //console.log('activated')
    window.addEventListener('scroll',this.handleScroll,true)
  },
  deactivated: function () {
    //console.log('deactivated')
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.relWrapper{
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: #0085ff;
  text-align: center;
  span{
    position: absolute;
    left: 20px;
    color: #fff;
    font-size:30px;
    text-align: center;
  }
  >h5{
    font-size: 30px;
    color:#fff;
  }
}
.absWrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: #0085ff;
  z-index: 99;
  text-align: center;
  .iconfont{
    @include iconfont();
    position: absolute;
    left:20px;
  } 
  >h5{
    font-size: 30px;
    color:#fff;
  }
}
</style>