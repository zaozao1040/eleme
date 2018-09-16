<template>
    <div :class="[titleClass,cname]" class="iconfont">
        <h5>{{title}}</h5>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        cname:{
            type:String,
            default: ''
        },
        title:{
            type:String,
            default: ''
        }
    },
    data() {
        return {
            titleClass: "title",
        }
    },
}
</script>

<style lang="scss">
@import "~@/css/element.scss";
.title{
  @include title;
}
</style>