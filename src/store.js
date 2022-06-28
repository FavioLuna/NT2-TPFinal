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
      isAuth: false
      //--------
    },
    actions:{
      //---------------------------------
      //          User Actions
      //---------------------------------
      async getUsuarios({commit}){
        try {
          let  {data}  = await axios(URL + '/users')
          commit('getUsers', data)
        } catch (error) {
          console.error('Error Axios', error)
        }
      },

      async postUser({commit}, credentials) {
        try {
          const {data} = await axios.post(URL + '/user', credentials, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', data)
          if (data) {
            commit('setIsAuth', true);
            commit('saveUser', data);
          }
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },

      async changeName({commit}, credentials) {
        try {
          const {data} = await axios.post(URL + '/user/settings/' + this.state.user["id"], credentials, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', data)
          if (data) {
            commit('setIsAuth', true);
            commit('saveUser', data["user"]);
          }
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },

      async changePassword({commit}, credentials) {
        try {
          const {data} = await axios.post(URL + '/user/settings/change-password/' + this.state.user["id"], credentials, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', data)
          if (data) {
            commit('setIsAuth', true);
            commit('saveUser', data["user"]);
          }
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },

      async login({commit}, credentials) {
        try {
          const {data} = await axios.post(URL + '/user/login', credentials, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', data)
          localStorage.setItem('token', data.token);

          commit('setIsAuth', true);
          commit('saveUser', data["user"]);
        }
        catch(error) {
          console.error('Error en login()', error.message)
        }
      },
      async logout({commit}) {
        const token = localStorage.getItem('token');
        try {
          await axios.post(URL + '/logout', {} , {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
  
          localStorage.removeItem('token');

          commit('setIsAuth', false);
          commit('saveUser', {});
  
        } catch (error) {
          console.log('Error en login()', error.message);
        }
      },
      clearUsers({commit}){
        commit('clearU')
      }
      //---------------------------------
      //          Shirt Actions
      //---------------------------------
    }, 
    mutations:{
      getUsers(state, data){
        state.users = data
      },
      saveUser(state, userData){
        state.user = userData;
      },
      setIsAuth(state, rta){
        state.isAuth = rta;
      },
      clearU(state){
        state.users = 0
      }
      //---------------------------------
      //          Shirt Mutations
      //---------------------------------
    }
})