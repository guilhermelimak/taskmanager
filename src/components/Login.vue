<template>
<div class="columns login__container">
  <div class="box column is-3">
    <div class="columns">
      <input class="column login__input input"
        type="email"
        v-model="form.email"
        placeholder="Email">
      </div>

    <div class="columns">
      <input class="column login__input input"
        type="password"
        @keyup.enter="login"
        v-model="form.password"
        placeholder="Password">
    </div>
      <button
        type="button"
        @click="signUp"
        class="column is-12 button login__button is-primary">
        Signup
      </button>
      <button
        type="button"
        @click="login"
        class="column is-12 button is-info is-outlined login__button">
        Login
    </button>
  </div>
</div>
</template>

<script>
import { auth } from 'store'

export default {
  data() {
    return {
      isNewUser: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    signUp() {
      auth
      .createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => this.$router.go('/choose-project'))
      .catch(r => this.$dispatch('showToast', r.message))
    },
    login() {
      auth
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => this.$router.go('/choose-project'))
      .catch(r => this.$dispatch('showToast', r.message))
    },
  },
}
</script>

<style lang="sass">
.login {
  &__container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      padding: 20px;
    }
  }

  &__input {
    margin: 10px;
  }

  &__button {
    padding: 0 !important;
    margin-bottom: 4px;
  }
}
</style>
