<template>
	<section :class="$style.numWrapper">
		<transition name="move">
			<span v-if="food.count>0" class="iconfont icon-jian-xianxingyuankuang" :class="$style.minus" 
				@click.stop='handleMinusfood()'></span>
		</transition>
		<h6 v-if="food.count>0" :class="$style.count">{{food.count}}</h6>
		<span class="iconfont icon-jia-yuankuang" :class="$style.add" @click.stop='handleAddfood()'></span>
	</section>
</template>

<script>

export default {
  name: 'numcontrol',
  props: {
  	food: {
  		type:Object,
  		default:{}
  	}
  },
  data () {
    return {

    }
  },
  methods: {
    handleAddfood: function (event) {
      if (!this.food.count) { //如果没有count属性，则设置为1。因为首次点击加号时候，food是json数据里面的结构，没有count这个字段，所以要添加上这个字段。注意使用vue的接口时需要引入import Vue from 'vue'
        this.$set(this.food, 'count', 1);
      } else {
        this.food.count++
      }
      this.$store.dispatch('addFood',this.food)
    },
    handleMinusfood: function (event) {
      this.food.count--
      //this.$store.dispatch('minusFood',this.food)
    }
  }
}
</script>

<style lang="scss" module>
.numWrapper{
	font-size: 0;
	height: 30px;
	line-height: 30px;
	.minus{
		display: inline-block;
		vertical-align: middle;
		font-size: 30px;
		color:#0085ff;	
	}
	.add{
		display: inline-block;
		vertical-align: middle;
		font-size: 30px;
		color:#0085ff;
	}
	.count{
		height: 30px;
		line-height: 30px;
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		text-align: center;
		font-size: 20px;
		color: black;
	}

}
</style>
<style lang="scss" scoped>
.move-enter{
	opacity: 0;
	transform: translateX(24px) rotate(180deg);
} //动画第一贞，减号初始位置需要从右边24像素开始（可见度为0），然后移动到左边的初始位置
.move-enter-active{
	transition: all 1s;
}
.move-leave-active{
	transition: all 1s linear;
	opacity: 0;
	transform: translateX(24px) rotate(180deg);
		}
</style>