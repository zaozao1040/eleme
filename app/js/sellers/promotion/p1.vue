<template>
	<section :class="$style.wrapper">
		<v-slider :class="$style.sliderImg" sliderFlag="sliderFlag_img" :items="items" :options="options"> 
    </v-slider>
	</section>
</template>

<script>
import slider from '../../core/slider.vue'
export default {

  name: 'p1',
  props: {
  },
  components: {
    'v-slider':slider
  },
  data () {
    return {
      options: {
        slidesPerView : 2.2,
        spaceBetween : 20,
      },
      items:[{
        href:"home",
        src:'//fuss10.elemecdn.com/b/57/29ef5ea066bd8fb8d3364f07408b4jpeg.jpeg?imageMogr/format/webp/thumbnail/!329x394r/gravity/Center/crop/329x394/',
        desc1:'百菜宴',
        desc2:'满59坚减10',
        desc3:'西红柿0.01元秒杀'
      },{
        href:"home",
        src:'//fuss10.elemecdn.com/b/40/b7a776dcae83b509ef188ddf0edc9png.png?imageMogr/format/webp/thumbnail/!319x394r/gravity/Center/crop/319x394/',
        desc1:'每日好店',
        desc2:'',
        desc3:'人气推荐'
      },{
        href:"home",
        src:'//fuss10.elemecdn.com/b/25/abddfc6a51238f3a0fa4bfd08d281jpeg.jpeg?imageMogr/format/webp/thumbnail/!319x394r/gravity/Center/crop/319x394/',
        desc1:'菜邻居',
        desc2:'满30减5',
        desc3:'西红柿0.01元秒杀'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.wrapper{
    padding: 20px 0 20px 20px;
    background: linear-gradient(#0085ff 10%, #fff 80%);

  .sliderImg{
    @include sliderImg;
    //margin: 20px 0 20px 20px;

    img{
      width:100%;
      border-radius: 20px;
    }
    img + div{
      position: absolute;
      top:200px;
      margin-left: 15px;
      h5:nth-child(1){
        font-size: 25px;
        color:#fff;
        margin-bottom: 5px;
      }
      h5:nth-child(2){
        font-size: 20px;
        color:#fff;
      }
      div{
        background-color: #0085ff;
        border:none;
        width: 60px;
        height: 20px;
        line-height: 20px;
        font-size: 18px;
        padding: 5px 10px;
        border-radius: 15px;
      }
    }
  }

  
}
</style>