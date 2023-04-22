<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <h1 :class="{ 'text-light': isDark, 'text-dark': !isDark }">Hello, Dang!</h1>
  <button class="btn btn-success" @click="toggleColorMode">Toggle color mode</button>
</template>

<script>
export default {
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    toggleColorMode() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.body.classList.add("dark-mode");
        document.body.setAttribute('data-bs-theme', "dark");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.setAttribute('data-bs-theme', "light")

      }
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- <style lang="scss">
@import './scss/abstracts/variables.scss';
@import './scss/mixin/mixin.scss';
@import './scss/theme/theme.scss';

body {
  @include light-mode;
  transition: background-color 0.5s;
}

.dark-mode {
  @include dark-mode;
}
</style> -->
