import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'http://localhost:3000' //Desarrollo
//const URL = '/users' url Produccion

export default new Vuex.Store({ //Funcion constructora estatica, construye una instancia de patron de estao global vuex
    state:{
      users:[],
      user:{},
      isAuth: false,
      status: false
    },
    actions:{
      async getUsuariosAxios({commit}){
        try {
          let  {data}  = await axios(URL + '/users')
          commit('getUsers', data)
        } catch (error) {
          console.error('Error Axios', error)
        }
      },
      async postUser({commit}, newUser) {
        try {
          await axios.post(URL + '/user', newUser, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', newUser)
          commit('saveUser', true)
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },
      clearUsers({commit}){
        commit('clearU')
      }
    }, 
    mutations:{
      getUsers(state, rta){
        state.users = rta
      },
      saveUser(state, status){
        state.status = status
      },
      clearU(state){
        state.users = 0
      }
    }
})