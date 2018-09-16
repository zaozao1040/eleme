<template>
  <div>
    <div v-if="promotionVal=='美食'">
      <v-p3 v-if="promotionVal=='美食'" :items="meishiP3"></v-p3>
    </div>
    <div v-if="promotionVal=='水果'">
      <v-p1></v-p1>
      <v-p2 :items="shuiguoP2"></v-p2>
      <v-p3 :items="meishiP3"></v-p3>
    </div>
    <div v-if="promotionVal=='厨房生鲜'">
      <v-p3 :items="meishiP3"></v-p3>
      <img src="https://fuss10.elemecdn.com/c/e9/112ad167f06defd89e61579b578aegif.gif?imageMogr/format/webp/thumbnail/680x/">
    </div>
    <div v-if="promotionVal=='商超便利'">
      <v-p3 :items="meishiP3"></v-p3>
      <img src="https://fuss10.elemecdn.com/c/e9/112ad167f06defd89e61579b578aegif.gif?imageMogr/format/webp/thumbnail/680x/" style="width: 100%">
    </div>
    


  </div>

	</section>
</template>

<script>
import p1 from './p1.vue'
import p2 from './p2.vue'
import p3 from './p3.vue'
export default {

  name: 'promotion',
  props: {
    promotionType: {
        type: String,
        default: ''
    }
  },
  components: {
    'v-p1':p1,
    'v-p2':p2,
    'v-p3':p3
  },
  data () {
    return {
      promotionMap: {
        'meishi':'美食',
        'wancan':'晚餐',
        'shangchaobianli':'商超便利',
        'shuiguo':'水果',
        'yiyaojiankang':'医药健康',
        'langmanxianhua':'浪漫鲜花',
        'chufangshengxian':'厨房生鲜',
        'paotuidaigou':'跑腿代购',
        'difangxiaochi':'地方小吃',
        'malangtang':'麻辣烫',
        'difangcaixi':'地方菜系'
      },
      shuiguoP2: [{
        desc1: '1元好菜',
        desc2: '每日鲜蔬',
        url: '//fuss10.elemecdn.com/0/95/6e4aa6d56e04848ccd9532fe36fb1png.png?imageMogr/format/webp/thumbnail/!128x128r/gravity/Center/crop/128x128/'        
      },{
        desc1: '人气热销',
        desc2: '大家都在买',
        url: '//fuss10.elemecdn.com/6/f0/3f9ab1b97f166b2240146274ee790png.png?imageMogr/format/webp/thumbnail/!128x128r/gravity/Center/crop/128x128/' 
      }],
      meishiP3: {
        title: '您有果蔬商超新人三重礼红包待领取',
        desc1: '新人三重礼',
        desc2: '果蔬生鲜商超通用',
        envelopes: [13,5,8]
      }
    }
  },
  computed: {
    promotionVal: function(){
      return this.promotionMap[this.promotionType]
    }
  }
}
</script>

<style lang="scss" module>

</style>