<template>
	<section :class="$style.wrapper">
		<article>{{items.title}}</article>
		<h4>{{items.desc1}}</h4>
		<div>
			<h5>{{items.desc2}}</h5>
			<h5>规则</h5>
		</div>
		<ul>
			<li v-for="(item,index) of items.envelopes" :key="index">
				<v-envelope :price="item"></v-envelope>
			</li>
		</ul>
	</section>
</template>

<script>
import envelope from '../../core/envelope.vue'
export default {

  name: 'p3',
  components: {
    'v-envelope':envelope
  },
  props: {
  	items: {
  		type: Object,
  		default: {}
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
	margin: 20px 20px;
	padding: 20px 30px;
	border: #9e9e9e 1px solid;
	border-radius: 10px;
	box-shadow: 10px 5px 10px #9e9e9e;
	>article{
		box-sizing: border-box;
		padding: 0 20px;
		width: 100%; 
		background-color: #fef9da;
		font-size: 20px;
		height: 35px;
		line-height: 35px;
		color:#7d7272;
	}
	>h4{
		padding-top: 10px;
		font-size: 25px;
    font-weight: 500;
	}
	>div{
		padding: 10px 0 30px 0;
		display: flex;
		justify-content: space-between;
		>h5{
			font-size: 20px;
			color:#7d7272;
		}
	}
	>ul{
		display: flex;
		>li{
			flex:1;
		}
	}
}
</style>