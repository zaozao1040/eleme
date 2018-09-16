<template>
	<div>
    <section :class="$style.wrapper">
  		<v-panel :title="menuVal[0]" :class="$style.panel" cname="iconfont">
  			<v-searchinput :class="$style.searchinput">
  				<v-smenuslider :menuType="routeType"></v-smenuslider>
  			</v-searchinput>
  		</v-panel>
  		<v-iconfont :class="$style.iconfont" cname="icon-qiehuanqizuo" url="backFlag"></v-iconfont>
    </section>
    <v-promotion :promotionType="routeType"></v-promotion>
    <v-sellerslist  :sellers="sellers"></v-sellerslist>
	</div>
</template>

<script>
import panel from "../core/panel.vue"
import iconfont from "../core/iconfont.vue"
import searchinput from "../public/searchinput.vue"
import smenuslider from './smenuslider.vue'
import promotion from './promotion/promotion.vue'
import sellerslist from './sellerslist.vue'
import axios from 'axios'
export default {

  name: 'sellers',
  components: {
  	"v-panel":panel,
  	"v-iconfont":iconfont,
  	"v-searchinput":searchinput,
    "v-smenuslider":smenuslider,
    "v-promotion":promotion,
    "v-sellerslist":sellerslist,
  },
  data () {
    return {
    	routeType: this.$route.params.type,
    	menuMap: {
    		'meishi':['美食','\e86f'],
    		'wancan':['晚餐','\\e86f'],
    		'shangchaobianli':['商超便利','\e86f'],
    		'shuiguo':['水果','\e86f'],
    		'yiyaojiankang':['医药健康','\e86f'],
    		'langmanxianhua':['浪漫鲜花','\e86f'],
    		'chufangshengxian':['厨房生鲜','\e86f'],
    		'paotuidaigou':['跑腿代购','\e86f'],
    		'difangxiaochi':['地方小吃','\e86f'],
    		'malangtang':['麻辣烫','\e86f'],
    		'difangcaixi':['地方菜系','\e86f'],
    	},
    	keyword: '',
    	iconP: '\ue86f 搜索本地商品',
      sellers: []
    }
  },
  computed: {
  	menuVal: function(){
  		return this.menuMap[this.routeType]
  	}
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/sellers.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc: function (res) {
      //console.log(res)
      res = res.data
      if (res.ret && res.data) {
        this.sellers = res.data.sellers
      }
    }
  },
  created: function () {
    this.getDetailInfo()
  }

}
</script>


<style lang="scss" module>
	@import "~@/css/reset.scss";
	@import "~@/css/element.scss";
  .wrapper{
    position: sticky;
    top: 0;
    z-index: 99;
    .panel{
      @include panel($margin: 0,$height: 70px,$bgcolor:#0085ff,$color:#fff);
      >h5{
        &:before{
          content: menuVal[1] + '\00A0\00A0'; //没实现啊。。遗憾
        }
      } 
      .searchinput{
        position: relative;
        height: auto;
        padding-bottom: 5px;
      }
    }
    .iconfont{
      @include iconfont();
      position: fixed;
      top:20px;
      left:20px;
    } 
  }

</style>