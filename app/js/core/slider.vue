<template>
	<section :class="cname">
		<swiper :options="options" ref="mySwiper" :not-next-tick="options.notNextTick">
      
      <swiper-slide id="sliderFlag_img" v-if="sliderFlag=='sliderFlag_img'" v-for="(item,index) in items" :key="index" :class="$style.sliderImg">
        <router-link tag="div" :to="item.href">
            <img :src="item.src" alt="" />
            <div title="imgDesc" v-if="item.desc1">
              <h5>{{item.desc1}}&nbsp;{{item.desc2}}</h5>
              <h5>{{item.desc3}}</h5>
              <v-btn :class="$style.btn" tag="div">去抢购</v-btn>
            </div>
        </router-link>
      </swiper-slide>

      <swiper-slide v-if="sliderFlag=='sliderFlag_menu'" v-for="(page,index) in pages" :key="index" :class="$style.sliderMenu">
        <router-link tag="div" v-for="(item,index) of page" :key="index" :to="item.href">
          <img :src="item.src"/>
          <p>{{item.desc}}</p>
        </router-link>
      </swiper-slide>

      <swiper-slide v-if="sliderFlag=='sliderFlag_text'" v-for="(item,index) in items" :key="index" :class="$style.sliderText">
        <p>{{item}}</p>
      </swiper-slide>

			<div :id="sliderFlag" class="swiper-pagination"  v-if="options.pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import btn from "./btn.vue"
export default {

  name: 'slider',
  components: {
    swiper,
    swiperSlide,
    "v-btn":btn
  },
  props:{
    cname: {
      type: String,
      default: "",
    },
    sliderFlag:{
      type: String,
      default: ""
    },
  	options:{
  		type:Object,
  		default:function(){
  			return {
  				autoplay: true,
  				loop:true,
  				pagination:{
              el: ".swiper-pagination",
          },
  				notNextTick:false
  			}
  		}
  	},
  	items:{
  		type:Array,
  		default: function(){
  			return []
  		}
  	}
  },
  data () {
    return {
      //ID_Pagination: this.sliderFlag?'paginationNormal':'paginationMenu'
    }
  },
  computed: {
    pages: function () {
      if(this.sliderFlag=='sliderFlag_menu'){
        const pages = []
        this.items.forEach((item, index) =>{
          const pageNum = Math.floor(index / 10)
          if (!pages[pageNum]) {
            pages[pageNum] = []
          }
          pages[pageNum].push(item)
        })
        return pages
      }else{
        return
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~swiper/dist/css/swiper.css';
</style>
<style lang="scss" module>
  @import "~@/css/element.scss";
  .sliderImg{
    @include sliderImg;
  }
  .sliderMenu{
    @include sliderMenu;
  }
  .sliderText{
    @include sliderText;
  }
</style>
<style lang="scss">
  #sliderFlag_menu .swiper-pagination-bullet-active {
    background: black !important
  }
  .swiper-pagination-bullets{
    bottom: 0!important;
  }
  #sliderFlag_img{
    .swiper-pagination-bullet{
      width: 15px!important;
      height: 15px!important;
    }
    .swiper-pagination-bullet-active {
      background: #FFC107 !important
    }
  }
</style>