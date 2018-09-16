<template>
	<div :class="[panelClass,cname]">
		<div v-for="index of 5" :key="index">
			<img :src="handleShowStars(index)" />
		</div>
	</div>
</template>

<script>
export default {

  name: 'star',
  props: {
  	score: Number,
  	cname:{
  		type:String,
  		default: ''
  	}
  },
  data () {
    return {
    	panelClass: 'star'
    }
  },
  methods: {
		handleShowStars: function (index) {
			let url = ''
			if( this.score <= index-1){
				url = require("./img/star24_off@2x.png")
			} else if ( this.score > index-1 && this.score < index ) {
				url = require("./img/star24_half@2x.png")
			} else if ( this.score >= index ){
				url = require("./img/star24_on@2x.png")
			}
			return url
  	}
  }
}
</script>


<style lang="scss">
	@import "~@/css/element.scss";
	.star{
		@include star();
	}
</style>