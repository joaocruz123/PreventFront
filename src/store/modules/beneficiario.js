import Api from '../../api/index'

import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FEILURE,
    CREATE_SUCCESS,
    DELETE_SUCCESS
} from '../mutation_type'

export default {
    namespaced: true,
    state: {
        isLoading: false,
        mensagem: null,
        error: false,
        beneficiarios: [
            {
                nome: null,
                email: null,
                cpf: null,
                sexo: null,
                endereco: null,
                data_nascimento: null,
                telefone: null,
                matricula: null,
                plano_id: 0,
                plano: {
                    nome: null,
                    descricao: null,
                    valor: 0,
                }
            }
        ]
    },
    actions: {
        getBeneficiario(context) {
            let token = localStorage.token
            context.commit('GET_DATA', true)

            Api.request('get', `/beneficiarios`, '', { Authorization: 'Bearer ' + token })
                .then(response => {
                    context.commit('GET_DATA_SUCCESS', response.data)
                    context.commit('GET_DATA', false)
                }).catch(error => {
                    this.error = error
                })
        },
        createBeneficiario(context, form) {
            let bodyFormData = form

            Api.request('post', `/beneficiarios`, bodyFormData, { token: '' })
                .then(response => {
                    context.commit('CREATE_SUCCESS', response.data)
                }).catch(error => {
                    this.error = error
                })
        },
        deleteBeneficiario(context, id) {

            Api.request('delete', `/beneficiarios/${id}`, '', { token: '' })
                .then(response => {
                    context.commit('DELETE_SUCCESS', response.data)
                }).catch(error => {
                    this.error = error
                })
        }
    },
    mutations: {
        [GET_DATA_SUCCESS](state, payload) {
            state.beneficiarios = payload.beneficiarios
        },
        [CREATE_SUCCESS](state, payload) {
        },
        [DELETE_SUCCESS](state, payload) {
            state.mensagem = payload
        },
        [GET_DATA](state, payload) {
            state.isLoading = payload
        }
    }
}