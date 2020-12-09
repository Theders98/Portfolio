import Vue from 'vue'
import Vuex from 'vuex'
import enStore from './enStore'
import esStore from './esStore'
import frStore from './frStore'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {enStore, esStore, frStore}
})