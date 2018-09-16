<template>
	<section>
		<v-heador title="发现"></v-heador>
      <div :class="$style.newthings">
        <img src="//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" />
        <h4>没啥活动专题哟～～</h4>
        <h5>9月9日饿了么五年庆，敬请期待</h5>
      </div>
		<v-footor></v-footor>
	</section>
</template>

<script>
import heador from "../public/heador.vue"
import interval from "../core/interval.vue"
import footor from "../public/footor.vue"
export default {

  name: 'newthing',
  components: {
  	"v-heador":heador,
  	"v-interval":interval,
  	"v-footor":footor
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
.newthings{
  text-align: center;
  img{
    width: 80%;
  }
  h4{
    padding: 30px 0;
    text-align: center;
    color: #93999f;
    font-size: 35px;
  }
  h5{
    padding: 20px 0;
    text-align: center;
    color: #93999f;
    font-size: 30px;
  }
}
</style>