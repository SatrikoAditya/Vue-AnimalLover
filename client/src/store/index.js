import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(VueSweetalert2)

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
      const { email, password } = payload
      axios.post('http://localhost:3000/login', {
        email, password
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
          })
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch(console.log)
    },
    fetchAnimal ({ commit }) {
      axios.get('http://localhost:3000/animals', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data.animals)
          commit('setAnimal', data.animals)
        })
        .catch(console.log)
    },
    logout () {
      this._vm.$swal.fire({
        toast: true,
        icon: 'warning',
        position: 'top-end',
        title: 'Good Bye, See you later!',
        showConfirmButton: false,
        timer: 2000
      })
      localStorage.clear()
      router.push({ name: 'Login' })
    },
    addFavorite (context, animalId) {
      axios.post(`http://localhost:3000/favorites/${animalId}`, {
        animalId
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            toast: true,
            icon: 'success',
            position: 'top-end',
            title: 'Success Add to Favorite!',
            showConfirmButton: false,
            timer: 2000
          })
          context.dispatch('fetchAnimal')
        })
        .catch(console.log)
    },
    fetchFavorite ({ commit }) {
      axios.get('http://localhost:3000/favorites', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
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
          this._vm.$swal.fire({
            toast: true,
            icon: 'success',
            position: 'top-end',
            title: 'Success delete selected favorite animal!',
            showConfirmButton: false,
            timer: 2000
          })
          context.dispatch('fetchFavorite')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
