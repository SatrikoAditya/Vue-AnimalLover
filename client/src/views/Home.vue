<template>
  <div class="home">
    <Navbar /> 
    <div class="home-container">
      <AnimalCard v-for="animal in animals" :key="animal.id" :animal="animal" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import AnimalCard from '../components/AnimalCard'

export default {
  name: 'Home',
  components: {
    Navbar,
    AnimalCard
  },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  methods: {
    fetchAnimal () {
      this.$store.dispatch('fetchAnimal')
    }
  },
  created () {
    this.fetchAnimal() 
  } 
}
</script>
