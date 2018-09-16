import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: state,
	actions: actions,
  mutations: mutations
})
