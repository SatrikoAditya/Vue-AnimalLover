<template>
    <nav>
        <div class="nav-left">
        <img @click.prevent="toHome"
            src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
            alt="logo"
        />
        <h1 @click.prevent="toHome">Animal Lover</h1>
        </div>
        <div class="nav-center">
        <a href="#" @click.prevent="toFavorite">My Favorites</a>
        </div>
        <div class="nav-right">
        <button @click="logout">Logout</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toFavorite () {
      this.$router.push({ name: 'Favorite' })
    },
    toHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
