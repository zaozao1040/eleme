<template>
	<section :class="[envelopeClass,cname]">
		<div>
			<span>¥</span>
			<span>{{price}}</span>
		</div>
		<div>
			<div>领取</div>
		</div>
		<slot></slot>
	</section>
</template>

<script>
export default {

  name: 'envelope',
  props: {
  	cname:{
  		type:String,
  		default: ''
  	},
  	price:{
  		type: Number,
  		default: 0
  	}
  },
  data () {
    return {
    	envelopeClass:"envelope"
    }
  }
}
</script>

<style lang="scss">
@import "~@/css/element.scss";
.envelope{
	@include envelope;
}
</style>