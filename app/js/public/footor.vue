<template>
	<section>
		<div style="height: 90px" title="占位div"></div>
 		<ul :class="$style.footer">
			<router-link :to="{name: 'home'}" tag="div" >
				<li @click="handleChangeActiveFlag('first')" :class="{ active: activeFlag == 'first' }">
					<span class="iconfont icon-shouyedefuben" >
					 </span>
					 <h5>外卖</h5>
				</li>
			</router-link>
			<router-link :to="{name: 'newthing'}" tag="div" >
				<li @click="handleChangeActiveFlag('second')" :class="{ active: activeFlag == 'second' }">
					<span class="iconfont icon-faxian1" >
					</span>
					<h5>发现</h5>
				</li>
			</router-link>
			<router-link :to="{name: 'order'}" tag="div" >
				<li @click="handleChangeActiveFlag('third')" :class="{ active: activeFlag == 'third' }">
					<span class="iconfont icon-shape3" >
					</span>
					<h5>订单</h5>
				</li>
			</router-link>
			<router-link :to="{name: 'mine'}" tag="div" >
				<li @click="handleChangeActiveFlag('fourth')" :class="{ active: activeFlag == 'fourth' }">
					<span class="iconfont icon-wode" >
					</span>
					<h5>我的</h5>
				</li>
			</router-link>
		</ul>
	</section>
</template>

<script>
export default {

  name: 'footor',

  data () {
    return {
    	//activeFlag: this.$store.state.activeFlag  这样不行，要放在计算属性中
    }
  },
  methods: {
  	handleChangeActiveFlag: function(flag){
  		this.$store.dispatch('changeActiveFlag',flag)
  	}
  },
  computed: {
  	activeFlag: function(){
  		return this.$store.state.activeFlag
  	}
  }
}
</script>

<style lang="scss" module>
	@import "~@/css/element.scss"; 
	.hock{
		height: 200px;
	}
	.footer{
		@include list(row)
		position: fixed;
		bottom: 0;
		left:0;  
		right: 0;
		z-index: 99;
		height: 80px;
		background-color: #fff;
		border-top: #000 0.5px solid;
		div{
			flex:1;
			text-align: center;
			line-height: 55px;
			span{
				font-size: 40px;
				color: #73899a;

			}
			h5{
				margin: 0;
				padding: 0;
				text-align: center;
				font-size: 18px;
				line-height: 20px;
				color: #73899a;
			}
		}

	}
</style>
<style lang="scss" scoped>
	.active{
		h5{
			color:#0085ff!important;
		}
		span{
			color:#0085ff!important;
		}
	}
</style>