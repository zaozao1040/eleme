<template>
	<section :class="$style.content">
		<input v-model="keyword" :class="[$style.search,'iconfont']" type="text" :placeholder="iconP" @keyup="handleReturnKeyword">
		<slot></slot>
	</section>
</template>

<script>
export default {

  name: 'hheaderbottom',
  props: {
  	placeholderText:{
  		type: String,
  		default: '搜索本地商品'
  	}
  },
  data () {
    return {
    	keyword: '',
    	iconP: '\ue86f' + ' ' + this.placeholderText,
    }
  },
  methods: {
  	handleReturnKeyword: function(){
  		this.$emit('handleGetKeyword',this.keyword)
  	}
  }
}
</script>

<style lang="scss" module>
.content{
	position: sticky; 
	top: 0px; 
	z-index: 99;
	box-sizing: border-box;
	height: 90px;
	padding: 20px 30px;
	margin-top: -15px;
	background-color: #0085ff;
	.search{
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		padding: 20px;
		text-align: center;
		font-size: 25px;
	}
}
</style>