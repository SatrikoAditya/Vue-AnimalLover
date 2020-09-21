<template>
    <div>
        <div class="favorite-container">
        <div class="card">
        <div class="card-image">
        <img
        :src="favorite.Animal.imageUrl"
        alt="card image"
        />
        </div>
        <div class="card-body">
        <h3>{{ favorite.Animal.name}}</h3>
        <p> {{favorite.Animal.description}} </p>
        </div>
        <button @click="deleteFavorite" class="delete-btn">remove</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FavoriteCard',
  props: ['favorite'],
  methods: {
    deleteFavorite () {
      this.$store.dispatch('deleteFavorite', this.favorite.id)
    }
  }
}
</script>

<style>

</style>
