<template>
  <div>
    <Navbar />
    <div class="favorite">
    <h1>My Favorites Animals</h1>
    </div>
    <FavoriteCard v-for="favorite in favorites" :key="favorite.id" :favorite="favorite" />
  </div>
</template>

<script>
import FavoriteCard from '../components/FavoriteCard'
import Navbar from '../components/Navbar'
export default {
  name: 'Favorite',
  components: {
    Navbar,
    FavoriteCard
  },
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  },
  methods: {
    fetchFavorite () {
      this.$store.dispatch('fetchFavorite')
    }
  },
  created () {
    this.fetchFavorite()
  }
}
</script>

<style>

</style>
