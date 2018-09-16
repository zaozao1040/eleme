<template>
	<ul :class="$style.wrapper">
		<li v-for="(item,index) of letters" 
        :key="index"
        :ref="item"

        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"

        @click='handleLetterClick'
    >
        {{item}}
    </li>
	</ul>
</template>

<script>
export default {

  name: 'city_alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: true,
      /*这个是标志位，当为true时允许拖动*/
      startY: 0,
      timer: null
    }
  },
  computed: {
    /*上面的cities是个对象，并不是数组，所以这里转化成letters的数组*/
    letters: function(){
      const letters = []
      for (let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  /*updated这个钩子函数，当城市字幕列表渲染完毕后，updated函数执行，计算出startY，只需计算一次，提高性能。*/
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    /*手指在字母列表上下移动时，handleTouchMove执行次数极高，所以要优化成下面这个样子：1.把startY拿到updated钩子中执行，只需计算一次 2.函数截流：用timer延迟执行*/
    handleTouchMove: function(e){
      if (this.touchStatus) {
        if (this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=>{
          const touchY = e.touches[0].clientY - 145
          const index = Math.floor(touchY - this.startY) / 40
          if(index>=0 && index <this.letters.length){
            this.$emit('change',this.letters[index])
          }
        },5)
      }
    },
    handleTouchEnd: function() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" module>
.wrapper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	right: 20px;
	top: 50px;
	bottom: 0;
	width: 30px;
	li{
			padding: 5px 0;
  		line-height: 30px;
  		height: 30px;
  		text-align: center;
  		font-size: 25px;
  		color: #0085ff;
	}
}
</style>