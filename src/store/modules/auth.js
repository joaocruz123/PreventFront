import Api from '../../api/index'

import {
    GET_DATA,
    LOGIN_SUCCESS,
    LOGIN_FEILURE,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS
} from '../mutation_type'

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: false,
        message: null,
        token: null,
        user: [
            {
                name: '',
                email: '',
                password: '',
                c_password: ''
            }
        ],
    },
    actions: {
        login(context, params) {
            let email = params[0]
            let password = params[1]

            context.commit('GET_DATA', true)

            Api.request('post', `/login?email=${email}&password=${password}`, '', { token: '' })
                .then(response => {
                    context.commit('LOGIN_SUCCESS', response.data)
                    context.commit('GET_DATA', false)
                }).catch(error => {
                    this.error = error
                })
        },
        logout(context) {
            let token = localStorage.token
            context.commit('GET_DATA', true)

            Api.request('post', `/logout`, '', { Authorization: 'Bearer ' + token })
                .then(response => {
                    context.commit('LOGOUT_SUCCESS', response.data)
                    context.commit('GET_DATA', false)
                }).catch(error => {
                    this.error = error
                })
        },
    },
    mutations: {
        [LOGIN_SUCCESS](state, payload) {
            state.token = payload.success.token
            localStorage.token = payload.success.token
            localStorage.usuario = payload.success.name
            localStorage.email = payload.success.email
        },
        [GET_DATA](state,payload){
            state.isLoading = payload
        },
        [LOGOUT_SUCCESS](state,payload){
            
        }
    }
}