let defaultActiveFlag = 'first'
let defaultGoodsActiveFlag = 'first'
let defaultSellersActiveFlag = 'first'
let defaultCity = '苏州'

try {
  if (localStorage.activeFlag) {
    defaultActiveFlag = localStorage.activeFlag
  }
} catch (e) {}

try {
  if (localStorage.goodsActiveFlag) {
    defaultGoodsActiveFlag = localStorage.goodsActiveFlag
  }
} catch (e) {}

try {
  if (localStorage.sellersActiveFlag) {
    defaultSellersActiveFlag = localStorage.sellersActiveFlag
  }
} catch (e) {}

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  activeFlag: defaultActiveFlag,
  bulletinFlag: false,
  selectFoods:  [],
  ShowCartDetailFlag: false,
  city: defaultCity,
  goodsActiveFlag: defaultGoodsActiveFlag,
  sellersActiveFlag: defaultSellersActiveFlag
}
