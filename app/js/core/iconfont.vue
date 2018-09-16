<template>
    <span :class="[iconfontClass,cname]" @click="handleGoto(url)">
    </span>
</template>

<script>
export default {
  name: 'iconfont',
  props: {
      cname: {
          type: String,
          default: "icon-qiehuanqizuo",
      },
      url: {
      	type: String,
      	default: ""
      }
  },
  data() {
      return {
          iconfontClass: "iconfont",
      }
  },
  methods:{
  	handleGoto: function(){
      if(this.url=='backFlag'){
        this.$router.go(-1)
      }else{
        this.$router.push(this.url)
      }	
  	}
  },
}
</script>

<style lang="scss" module>
@import "~@/css/element.scss";
.iconfont{
  @include iconfont;
}
</style>