<template>
	<div :class="$style.hheader">
		<router-link :to="{name: 'city'}" tag="div">
			<span class="iconfont icon-dingweiweizhi"></span>
		</router-link>
		
		<span>{{this.$store.state.city}}</span>

		<router-link :to="{name: 'city'}" tag="div">
			<span class="iconfont icon-xiala"></span>
		</router-link>
	</div>
</template>

<script>
export default {

  name: 'hheader',
  components: {
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.hheader{
	height: 70px;
	line-height: 70px;
	background: #0085ff;
	text-align: left;
	font-size: 30px;
	padding: 0 20px;
	>div{
		display: inline-block;
	}
	span{
		font-size: 30px;
		color: #fff;
	}
/* 	.pannel{
		@include panel($height: 70px,$bgcolor:#0085ff,$color:#fff);
		margin-top: 0;
		margin-bottom: 0;
		>h5{
			text-align: left;
			&:before{
				content: '\e637\00A0'; //定位图标 \00A0代表一个空格
				color: #fff;
			}
			&:after{
				content: '\00A0\e7e1'; //下拉图标 \00A0代表一个空格
				color: #fff;
			}
		}
	} */
}

</style>
