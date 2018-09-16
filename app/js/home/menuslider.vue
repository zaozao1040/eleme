<template>
	<article>
		<v-slider sliderFlag="sliderFlag_menu" :items="items" :options="options"></v-slider>
	</article>
</template>

<script>
import slider from '../core/slider.vue'
export default {

  name: 'menuslider',
  components:{
  	'v-slider':slider
  },
  data () {
    return {
    	options: {
			autoplay: false,
			loop:false,
			pagination:{
                el: ".swiper-pagination"
            }
    	},
    	items:[{
    		href:"/sellers/meishi",
    		src:'//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'美食'
  		},{
    		href:'/sellers/wancan',
    		src:'//fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'晚餐'
    	},{
    		href:'/sellers/shangchaobianli',
    		src:'//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'商超便利'
    	},{
    		href:'/sellers/shuiguo',
    		src:'//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'水果'
    	},{
    		href:'/sellers/yiyaojiankang',
    		src:'//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'医药健康'
    	},{
    		href:'/sellers/langmanxianhua',
    		src:'//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'浪漫鲜花'
    	},{
    		href:'/sellers/chufangshengxian',
    		src:'//fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'厨房生鲜'
    	},{
    		href:'/sellers/paotuidaigou',
    		src:'//fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'跑腿代购'
    	},{
    		href:'/sellers/difangxiaochi',
    		src:'//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'地方小吃'
    	},{
    		href:'/sellers/malangtang',
    		src:'//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'麻辣烫'
    	},{
    		href:'/sellers/difangcaixi',
    		src:'//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    		desc:'地方菜系'
    	}]
    }
  }
}
</script>

<style lang="scss" module>

</style>