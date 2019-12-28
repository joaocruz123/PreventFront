import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './modules/auth'
import Plano from './modules/plano'
import Beneficiario from './modules/beneficiario'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: Auth,
    plano: Plano,
    beneficiario: Beneficiario
  }
})  