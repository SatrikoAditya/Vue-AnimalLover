import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from  '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: []
  },
  mutations: {
    setAnimal (state, payload) {
      state.animals = payload
    },
    setFavorite (state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    login (context, payload) {
      const {email, password} = payload
      axios.post('http://localhost:3000/login', {
        email, password
      })
        .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({name: 'Home'})
        })
        .catch(console.log)
    },
    fetchAnimal ({commit}) {
      axios.get('http://localhost:3000/animals', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        console.log(data.animals)
        commit('setAnimal', data.animals)
      })
      .catch(console.log)
    },
    logout () {
      localStorage.clear()
      router.push({name: 'Login'})
    },
    addFavorite (context, animalId) {
      axios.post(`http://localhost:3000/favorites/${animalId}`, {
        animalId
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        context.dispatch('fetchAnimal')
      })
      .catch(console.log)
    },
    fetchFavorite ({commit}) {
      axios.get('http://localhost:3000/favorites', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        console.log(data)
        commit('setFavorite', data.data)
      })
      .catch(console.log)
    },
    deleteFavorite (context, id) {
      axios.delete(`http://localhost:3000/favorites/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(data => {
        context.dispatch('fetchFavorite')
      })
      .catch(console.log)
    }
  },
  modules: {
  }
})
