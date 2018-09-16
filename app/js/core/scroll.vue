<template>
	<div :class="[scrollClass,cname]" :ref="refScrollWrapper">
    <div >
      <slot></slot>
    </div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'scroll',
  props: {
  	cname:{
  		type:String,
  		default: ''
  	},
  	refScrollWrapper:{
  		type:String,
  		default: 'refScrollWrapper'
  	}
  },
  data () {
    return {
    	scrollClass:"scroll"
    }
  },
  methods: {
  	initScroll: function(){
	    this.scroll = new BScroll(this.$refs[this.refScrollWrapper],{
	      click: true,
        probeType: 3
	    })
  	},
    getScrollEl: function(){ //这两个get函数是为了让父组件获取这个scroll的两个重要属性：1，dom节点 2，ref值
      return this.scroll
    },
    getRef: function(){
      return this.$refs[this.refScrollWrapper]
    }
  },
  mounted: function () {
    this.initScroll()
  }
}
</script>

<style lang="scss">
	@import "~@/css/element.scss";
  .scroll{
    @include scroll;
  }
</style>