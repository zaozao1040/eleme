import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/index.vue'
import Sellers from '../sellers/sellers.vue'
import Seller from '../seller/seller.vue'
import city from '../home/city.vue'
import order from '../order/order.vue'
import mine from '../mine/mine.vue'
import newthing from '../newthing/newthing.vue'
import shoppingcart from '../home/shoppingcart.vue'
import hongbao from '../mine/hongbao.vue'
import vip from '../mine/vip.vue'
/*import personal from '../personal/personal.vue'*/
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/sellers/:type",
            name: "sellers",
            component: Sellers,
        },
        {
            path: "/seller",
            name: "seller",
            component: Seller,
        },
        {
            path: "/city",
            name: "city",
            component: city,
        },
        {
            path: "/order",
            name: "order",
            component: order,
        },
        {
            path: "/mine",
            name: "mine",
            component: mine,
        },
        {
            path: "/newthing",
            name: "newthing",
            component: newthing,
        },
        {
            path: "/shoppingcart",
            name: "shoppingcart",
            component: shoppingcart,
        },
        {
            path: "/hongbao",
            name: "hongbao",
            component: hongbao,
        },
        {
            path: "/vip",
            name: "vip",
            component: vip,
        }
    ],
})