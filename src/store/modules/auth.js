import Api from '../../api/index'

import {
    GET_DATA,
    LOGIN_SUCCESS,
    LOGIN_FEILURE,
    REGISTER_SUCCESS,
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
                name: null,
                email: null,
                password: null,
                c_password: null
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
    },
    mutations: {
        [LOGIN_SUCCESS](state, payload) {
            state.token = payload.success.token
            localStorage.token = payload.success.token
        },
        [GET_DATA](state,payload){
            state.isLoading = payload
        }
    }
}