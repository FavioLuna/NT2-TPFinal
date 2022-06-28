import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

<<<<<<< HEAD
const URL = 'https://628e9f0c368687f3e719d47f.mockapi.io/usuarios'
const URLShirts = 'https://628e9f0c368687f3e719d47f.mockapi.io/shirts'
=======
const URL = 'https://628e9f0c368687f3e719d47f.mockapi.io'

>>>>>>> 15faa5bc46ab1ba42f4126a587dcea91968035cc

export default new Vuex.Store({ //Funcion constructora estatica, construye una instancia de patron de estao global vuex
    state:{
      users:[],
<<<<<<< HEAD
      shirts:[],
      entro: false,
=======
      user:{},
      postSuccess: false,
      isAuth: false,
      isLog: false
>>>>>>> 15faa5bc46ab1ba42f4126a587dcea91968035cc
    },
    actions:{
      async getUsers({commit}){
        try {
          let  {data}  = await axios(URL + '/user' )
          commit('getUsers', data)
        } catch (error) {
          console.error('Error Axios', error)
        }
      },
      async postUser({commit}, newUser) {
        try {
          let { data: user } = await axios.post(URL + '/user', newUser, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', user)
          commit('postSuccess', true)
        }
        catch(error) {
          console.error('Error en postUsers()', error.message)
        }
      },
<<<<<<< HEAD
      clearUsers({commit}){
        commit('clearU')
      },
      async getShirtsAxios({commit}){
        try {
          let {data}  = await axios(URLShirts)
          commit('getShirts', data)
        } catch (error) {
          console.error('Error Axios', error)
        }
      },
      async postShirt({commit}, newShirt) {
        try {
          let { data: shirt } = await axios.post(URLShirt, newShirt, {'content-type' : 'application/json'})
          console.log('AXIOS POST shirt', shirt)
          commit('postShirt', true)
        }
        catch(error) {
          console.error('Error en postShirt()', error.message)
        }
      },
      clearShirts({commit}){
        commit('clearS')
      }
    }, 
=======
      async changeName({commit}, newUser) {
        try {
          let { data: user } = await axios.put(URL + '/user/' + `${this.state.user.id}`, newUser, {'content-type' : 'application/json'})
          console.log('AXIOS Put user name', user)
          commit('saveUser', user)
          if (user.admin) {
            commit('isAuth', true)
          }
        }
        catch(error) {
          console.error('Error en changeName()', error.message)
        }
      },
/*       async changePass({commit}, newUser) {
        try {
          let { data: user } = await axios.put(URL + '/user/' + `${this.state.user.id}`, newUser, {'content-type' : 'application/json'})
          console.log('AXIOS Put user name', user)
          commit('saveUser', user)
          if (user.admin) {
            commit('isAuth', true)
          }
        }
        catch(error) {
          console.error('Error en postUsers()', error.message)
        }
      }, */
      async deleteUser({commit}) {
        try {
          await axios.delete(URL + '/user/' + `${this.state.user.id}`,  {'content-type' : 'application/json'})
          console.log('AXIOS delete user')
          commit('isAuth', false)
          commit('saveUser', null)
          console.log(this.state.user)
          commit('isLog', false)
        }
        catch(error) {
          console.error('Error en deleteUser()', error.message)
        }
      },
      login({commit}, user){
        if (user.admin) {
          commit('isAuth', true)
        }
        commit('saveUser', user)
        commit('isLog', true)
      },
      logout({commit}){
        commit('isAuth', false)
        commit('saveUser', null)
        commit('isLog', false)
      },

      },
>>>>>>> 15faa5bc46ab1ba42f4126a587dcea91968035cc
    mutations:{
      getUsers(state, rta){
        state.users = rta
      },
      saveUser(state, user){
        state.user = user
      },
      isLog(state, rta){
        state.isLog = rta
      },
      isAuth(state, rta)
      {
        state.isAuth = rta
      },
      postSuccess(state, rta){
        state.postSuccess = rta
      },
<<<<<<< HEAD
      clearU(state){
        state.users = 0
      },
      getShirts(state, rta){
        state.shirts = rta
      },
      postShirt(state, rta){
        state.shirt = rta
      },
      clearS(state){
        state.shirts = 0
      }
=======
>>>>>>> 15faa5bc46ab1ba42f4126a587dcea91968035cc
    }
})