export default {
	changeActiveFlag: function( state, flag) {
		state.activeFlag = flag
		//console.log(state.activeFlag)
		try {
			localStorage.activeFlag = flag
		} catch (e) {}
	},
	changeGoodsActiveFlag: function( state, flag) {
		state.goodsActiveFlag = flag
		//console.log(state.goodsActiveFlag)
		try {
			localStorage.goodsActiveFlag = flag
		} catch (e) {}
	},
	changeSellersActiveFlag: function( state, flag) {
		state.sellersActiveFlag = flag
		//console.log(state.goodsActiveFlag)
		try {
			localStorage.sellersActiveFlag = flag
		} catch (e) {}
	},
	changeBulletinFlag: function( state) {
		state.bulletinFlag = !state.bulletinFlag
	},
	addFood: function (state, food) {
		let tmpFlag = true
		for(let i=0;i<state.selectFoods.length;i++){
			if(state.selectFoods[i].name && (state.selectFoods[i].name == food.name)){
				//state.selectFoods[i].count++
				tmpFlag = false
			}
		}
		if(tmpFlag == true){
			state.selectFoods.push(food)
		}
	},
	changeShowCartDetailFlag: function( state) {
		state.ShowCartDetailFlag = !state.ShowCartDetailFlag
		try {
			localStorage.ShowCartDetailFlag = state.ShowCartDetailFlag
		} catch (e) {}
	},
	changeCity: function( state, city) {
		state.city = city
		//console.log(state.activeFlag)
		try {
			localStorage.city = city
		} catch (e) {}
	},
}
