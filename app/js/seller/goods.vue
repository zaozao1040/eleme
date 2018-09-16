<template>
	<section :class="$style.gWrapper">
		<div :class="$style.gheader">
			<div :class="{ active: goodsActiveFlag == 'first' }" @click="handleChangeGoodsActiveFlag('first')">商品</div>
			<div :class="{ active: goodsActiveFlag == 'second' }" @click="handleChangeGoodsActiveFlag('second')">评论</div>
			<div :class="{ active: goodsActiveFlag == 'third' }" @click="handleChangeGoodsActiveFlag('third')">商家</div>
		</div>

		<v-goods_goodslist v-if="goodsActiveFlag == 'first'" :goods="goods" :seller="seller"></v-goods_goodslist>
		<v-goods_ratings v-if="goodsActiveFlag == 'second'" :seller="seller"></v-goods_ratings>
		<v-goods_sellerinfo v-if="goodsActiveFlag == 'third'" :seller="seller"></v-goods_sellerinfo>



	</section>
</template>

<script>
import goods_goodslist from "./goods_goodslist.vue"
import goods_ratings from "./goods_ratings.vue"
import goods_sellerinfo from "./goods_sellerinfo.vue"
export default {

  name: 'goods',
  components: {
  	"v-goods_goodslist" : goods_goodslist,
  	"v-goods_ratings" : goods_ratings,
  	"v-goods_sellerinfo" : goods_sellerinfo
  },
  props: {
  	goods: {
  		type: Array,
  		default: []
  	},
    seller: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {

    }
  },
  methods: {
  	handleChangeGoodsActiveFlag: function(flag){
  		this.$store.dispatch('changeGoodsActiveFlag',flag)
  	}
  },
  computed: {
  	goodsActiveFlag: function(){
  		return this.$store.state.goodsActiveFlag
  	},
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.gWrapper{
	.gheader{
		@include list(row);
		>div{
			flex:1;
			margin: 10px 60px;
      padding: 10px 0;
			font-size: 30px;
      font-weight: 800;
			text-align: center;
		}
	}
}

</style>
<style lang="scss" scoped>
  .active{
    color:#0085ff!important;
    border-bottom: #0085ff 5px solid;
  }
</style>