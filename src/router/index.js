import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login'
import NovoUsuario from '../components/auth/NovoUsuario'
import Home from '../components/Home'
import Planos from '../components/planos/Index'
import Beneficiarios from '../components/beneficiarios/Index'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/planos',
      name: 'Planos',
      component: Planos
    },
    {
      path: '/beneficiarios',
      name: 'Beneficiarios',
      component: Beneficiarios
    },
    {
      path: '/novo-usuario',
      name: 'NovoUsuario',
      component: NovoUsuario
    }
  ]
})
