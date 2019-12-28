import Api from '../../api/index'

import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FEILURE,
    CREATE_SUCCESS,
} from '../mutation_type'

export default {
    namespaced: true,
    state: {
        error: false,
        dados: [
            {
                id: null,
                nome: null,
                descricao: null,
                valor: null
            }
        ],
    },
    actions: {
        getPlanos(context) {
            let token = localStorage.token

            Api.request('get', `/planos`, '', { Authorization: 'Bearer ' + token  })
                .then(response => {
                    context.commit('GET_DATA_SUCCESS', response.data)
                }).catch(error => {
                    this.error = error
                })
        },
        createPlano(context, params) {
            let bodyFormData = new FormData()
            bodyFormData.append('nome', params[0])
            bodyFormData.append('descricao', params[1])
            bodyFormData.append('valor', params[2])

            for (var key of bodyFormData.entries()) {
                //console.log(key[0] + ', ' + key[1]);               
            }

            Api.request('post', `/planos`, bodyFormData, { token: '' })
                .then(response => {
                    context.commit('CREATE_SUCCESS', response.data)
                }).catch(error => {
                    this.error = error
                })
        },
    },
    mutations: {
        [GET_DATA_SUCCESS](state, payload) {
            state.dados = payload
        },
        [CREATE_SUCCESS](state, payload){
        }
    }
}