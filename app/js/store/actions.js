export default {
	changeActiveFlag: function (ctx,flag) {
		//console.log('action')
		ctx.commit('changeActiveFlag',flag)
	},
	changeGoodsActiveFlag: function (ctx,flag) {
		//console.log('action')
		ctx.commit('changeGoodsActiveFlag',flag)
	},
	changeSellersActiveFlag: function (ctx,flag) {
		//console.log('action')
		ctx.commit('changeSellersActiveFlag',flag)
	},
	changeBulletinFlag: function (ctx) {
		//console.log('action')
		ctx.commit('changeBulletinFlag')
	},
	addFood: function (ctx,food) {
		//console.log(foodPrice)
		ctx.commit('addFood',food)
	},
	changeShowCartDetailFlag: function (ctx) {
		ctx.commit('changeShowCartDetailFlag')
	},
	changeCity: function (ctx,city) {
		//console.log('action')
		ctx.commit('changeCity',city)
	},
}