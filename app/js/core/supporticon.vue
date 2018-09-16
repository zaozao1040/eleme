<template>
	<h5 :class="[supporticonClass,cname]">
		{{this.support.description}}
	</h5>
</template>

<script>
export default {

  name: 'supporticon',
  props: {
  	support: {
  		type: Object,
  		default: {}
  	}
  },
  computed: {
  	cname: function(){
  		return this.classMap[this.support.type]
  	}
  },
  data () {
    return {
    	supporticonClass: "supporticon",
			classMap : ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
}
</script>

<style lang="scss">
@import "~@/css/element.scss";
.supporticon{
	@include supporticon;
}


</style>