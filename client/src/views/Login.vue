<template>
    <div class="login-container">
      <div class="left-login-page">
        <h3>Please Login First</h3>
        <form @submit.prevent="login">
          <input
            v-model="email"
            class="input-form"
            type="email"
            placeholder="your email here"
            required
          />
          <input
            v-model="password"
            class="input-form"
            type="password"
            placeholder="your password here"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div class="right-login-page">
        <h1>Welcome to Animal Lovers</h1>
        <img src="../assets/login.png" alt="login image" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
