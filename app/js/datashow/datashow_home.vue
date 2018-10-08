<template>
	<div :class="$style.wrapper">
		<h4>外卖大数据&nbsp;<span>[ 第三季度 ]</span></h4>
		<!-- <img src="./img/p1_people.png"> -->
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538994800760&di=f5b98b685c6509e0ae6c1f772c605044&imgtype=jpg&src=http%3A%2F%2Fcdn5.rabbitpre.com%2F6ac94112-947d-4fa0-8347-cb6b2c7b52b8.png">
	</div>
</template>

<script>
export default {

  name: 'datashow_home',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
.wrapper{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	h4{
		width: 100%;
		height: 320px;
		background-image: url(./img/page_caption_bg.png);
		background-size: 100% 100%;
		text-align: center;
		line-height: 275px;
		color: #ffeb3b;
		font-family: serif;
		//background: linear-gradient(#3496c7 , white 100%) 
		span{
			font-size: 25px;
		}
	}
	img{
		width: 100%;
	}
}
</style>