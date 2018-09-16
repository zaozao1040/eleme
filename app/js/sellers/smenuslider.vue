<template>
	<article>
		<v-slider sliderFlag="sliderFlag_text" :items="menuValArr" :options="options" :class="$style.sliderText"></v-slider>
	</article>
</template>

<script>
import slider from '../core/slider.vue'
export default {

  name: 'menuslider',
  components:{
  	'v-slider':slider
  },
  props: {
    menuType: {
        type: String,
        default: ''
    }
  },
  data () {
    return {
        options: {
            slidesPerView : 3,
            centeredSlides : false,
            slidesPerView :'auto'
        },
        menuMap: {
            'meishi':['全部','汉堡披萨','面食粥点','简餐便当','香锅冒菜','日韩料理','轻食西餐','小吃炸串','地方菜系'],
            'wancan':['全部','精致西餐','精致中餐','烤肉'],
            'shangchaobianli':['全部','超市','便利店','大型超市'],
            'shuiguo':['为你精选','果切','西瓜','榴莲','葡萄','冬枣'],
            'yiyaojiankang':['全部','上门服务','常用药品','感冒','发烧药','过敏药'],
            'langmanxianhua':['全部','为您精选','鲜花套餐','打折','情人节'],
            'chufangshengxian':['全部','蔬菜','水产品','蛋奶','调味品','蘸酱','其他'],
            'paotuidaigou':['全部','食品','其他'],
            'difangxiaochi':['全部','路边摊','夜市','早午茶','地沟油'],
            'malangtang':['全部','精品推荐','品牌','其他'],
            'difangcaixi':['全部','东北菜','粤菜','川菜','西北面食','新疆菜','湘菜','苏帮菜','广深','杭帮菜'],
        },
        keyword: '',
        iconP: '\ue86f 搜索本地商品',
    }
  },
  computed: {
    menuValArr: function(){
        return this.menuMap[this.menuType]
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.sliderText{
/*   @include sliderText($color:red);

  >p{
    color:red;
      } */

}
</style>