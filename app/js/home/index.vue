<template>
	<div :class="$style.wrapper">
    <v-hheader></v-hheader>
    <v-searchinput placeholderText="搜索商家、商品～～"></v-searchinput>
		<v-menuslider></v-menuslider>
    <v-promotionslider></v-promotionslider>
    <v-title title="推荐商家" :class="$style.title"></v-title>
    <v-sellerslist :sellers="sellers"></v-sellerslist>
    <v-hbtn></v-hbtn>
    <v-footor></v-footor>
	</div>
</template>

<script>
import hheader from "./hheader.vue"
import searchinput from "../public/searchinput.vue"
import menuslider from './menuslider.vue'
import promotionslider from './promotionslider.vue'
import title from "../core/title.vue"
import sellerslist from '../sellers/sellerslist.vue'
import footor from '../public/footor.vue'
import hbtn from './hbtn.vue'
import axios from 'axios'
export default {

  name: 'index',
  components: {
    "v-hheader":hheader,
    "v-searchinput":searchinput,
  	"v-menuslider":menuslider,
    "v-promotionslider":promotionslider,
    "v-title":title,
    "v-sellerslist":sellerslist,
    "v-hbtn":hbtn,
    "v-footor":footor,
 /* 	"v-borrow":borrow,
  	"v-money":money,
  	"v-product":product,
  	"v-life":life,
  	"v-footer":footer,
  	"v-navbar":navbar*/
  },
  data () {
    return {
      sellers: []
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
    .title{
      @include title($height:90px);
    }    
  }

</style>
