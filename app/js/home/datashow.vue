<template>
	<swiper :class="$style.swiper" :options="options" ref="mySwiper" :not-next-tick="options.notNextTick">  
    <swiper-slide v-for="(item,index) in items" :key="index" :class="$style.swiperslide">
			<v-datashow_polyline>
			</v-datashow_polyline>
    </swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import datashow_polyline from "./datashow_polyline.vue"
export default {

  name: 'datashow',
  components: {
    swiper,
    swiperSlide,
    "v-datashow_polyline":datashow_polyline,
  },
  data () {
    return {
      options: {
				pagination:{
            el: ".swiper-pagination",
        },
        notNextTick:false,
        loop:false,
        slidesPerView: 1,
        direction:'vertical',
        initialSlide: 0,
        speed: 300,
				observer:true,
				//swiper从一个slide过渡到另一个slide结束时执行
				onSlideChangeEnd: function( swiper ){
					
				},
				//swiper中所有img元素加载完成时执行
				onImagesReady: function( swiper ){
					
				}
      },
    	items: [1],

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~swiper/dist/css/swiper.css';
</style>
<style lang="scss" module>
  @import "~@/css/element.scss";
  .swiper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-color: #c1c1c1;
    overflow: hidden;
  }
  .swiperslide{
  	position: relative;

  }
	  

</style>