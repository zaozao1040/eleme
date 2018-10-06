<template>
	<div :class="$style.wrapper">
		<h4>饿了么第三季度大数据</h4>
		<img src="./img/p1_people.png">
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
	background-repeat: no-repeat;
	background-image: url(./img/page_bg.png);
	background-size: 100% 100%;
	h4{
		width: 100%;
		height: 320px;
		background-image: url(./img/page_caption_bg.png);
		background-size: 100% 100%;
		text-align: center;
		line-height: 275px;
		color: #1500ec;
		font-family: serif;
	}
	img{
		width: 100%;
	}
}
</style>