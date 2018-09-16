<template>
	<section>
		<div :class="$style.list">
			<div class="iconfont" :class="{ active: sellersActiveFlag == 'first' }" @click="handleChangeSellersActiveFlag('first')">综合排序</div>
			<div :class="{ active: sellersActiveFlag == 'second' }" @click="handleChangeSellersActiveFlag('second')">距离最近</div>
			<div class="iconfont" :class="{ active: sellersActiveFlag == 'third' }" @click="handleChangeSellersActiveFlag('third')">会员红包</div>
			<div class="iconfont" :class="{ active: sellersActiveFlag == 'fourth' }" @click="handleChangeSellersActiveFlag('fourth')">筛选</div>
		</div>
		<v-sellersinfo :sellers="sellers"></v-sellersinfo>
	</section>
</template>

<script>
import panel from "../core/panel.vue"
import sellersinfo from "./sellersinfo.vue"
export default {

  name: 'sellers',
  components: {
  	"v-panel":panel,
  	"v-sellersinfo":sellersinfo
  },
  props: {
    sellers:{
      type:Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleChangeSellersActiveFlag: function(flag){
      this.$store.dispatch('changeSellersActiveFlag',flag)
    }
  },
  computed: {
    sellersActiveFlag: function(){
      return this.$store.state.sellersActiveFlag
    }
  }
}
</script>

<style lang="scss" module>
	@import "~@/css/element.scss";
  .list{
  	@include list(row);
  	@include borderBottom();
  	height: 70px;
    line-height: 70px;
  	&>div{
  		flex:1;
  		text-align: center;
  		font-size: 25px;
  	}
   	div:nth-child(1){
  		&:after{
				content: '\e7e1';
  		}
  	} 
  	div:nth-child(3){
  		&:before{
				content: '\e66b';
  		}
  	}
  	div:nth-child(4){
  		&:after{
				content: '\e640';
  		}
  	}
  }
</style>
<style lang="scss" scoped>
  .active{
    color:#0085ff!important;
    font-size: 30px!important;
  }
</style>