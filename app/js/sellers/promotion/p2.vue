<template>
	<section :class="$style.wrapper">
		<div v-for="(item,index) of items" :key="index">
			<div>
				<h4>{{item.desc1}}</h4>
				<h5>{{item.desc2}}</h5>
			</div>
			<div>
				<img :src="item.url" />
			</div>
		</div>
	</section>
</template>

<script>
export default {

  name: 'p2',
  props: {
  	items: {
  		type: Array,
  		default: []
  	}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
.wrapper{
	@import "~@/css/element.scss";
	@include list(row);
	

	>div{
		@include list(row);
		flex:1;
		border: #009688 2px solid;
		margin: 0 20px;
		border-radius: 20px;
		box-shadow: 10px 10px 10px #009688;
		>div{
			padding: 20px 10px;
			h4{
				color:black;
				font-size:30px;
				padding-bottom: 5px;
			}
			h5{
				color:#C0C0C0;
				font-size:25px;
				padding-bottom: 5px;
			}
		}
		
	}
}
</style>