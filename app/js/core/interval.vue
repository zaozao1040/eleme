<template>
    <div :class="[intervalClass,cname]">
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            intervalClass: "interval",
        }
    },
}
</script>

<style lang="scss">
@import "~@/css/element.scss";
.interval{
  @include interval;
}
</style>	