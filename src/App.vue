<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view @fetchData="fetchData"></router-view>
</template>

<script>

import { apiUrl } from "@/config/config";
const axios = require("axios");
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    async fetchData() {
      // fetch products
      await axios
        .get(`${apiUrl}product/`)
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));

      //fetch categories
      await axios
        .get(`${apiUrl}category/`)
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));

      //fetch cart items
      if (this.token) {
        await axios.get(`${apiUrl}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
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
  margin-top: 60px;
}
</style>
