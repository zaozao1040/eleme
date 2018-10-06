import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"
import '../assets/iconfont/iconfont.css'
import store from './store/index.js'
import '../assets/animate.css'

Vue.config.productionTip = false 


new Vue({
    el: "#app",
    router,
    store,
    components: { 
    	App: App
    },
    template: "<App></App>",
})