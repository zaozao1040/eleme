<template>
	<div>
  	<v-sheader :seller="seller"></v-sheader>
    <v-bulletin v-if="this.$store.state.bulletinFlag" :seller="seller"></v-bulletin>
    <v-goods :goods="goods" :seller="seller"></v-goods>
	</div>
</template>

<script>
import axios from 'axios'
import sheader from "./sheader.vue"
import bulletin from "./bulletin.vue"
import goods from "./goods.vue"

export default {

  name: 'seller',
  components: {
  	"v-sheader":sheader,
    "v-bulletin":bulletin,
    "v-goods":goods
  },
  data () {
    return {
      seller: {},
      goods:[]
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/data.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc: function (res) {
      //console.log(res)
      res = res.data
      if (res.ret && res.data) {
        this.seller = res.data.seller,
        this.goods = res.data.goods
      }
    }
  },
  mounted: function () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" module>
	@import "~@/css/reset.scss";

</style>