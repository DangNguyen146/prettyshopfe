<template>
  <Navbar />
  <router-view v-if="products && categories" :baseURL="baseURL" :products="products" :categories="categories"
    @fetchData="fetchData"></router-view>
</template>

<script>

import { apiUrl } from "@/config/config";
const axios = require("axios");
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      baseURL: apiUrl,
      //baseURL: "http://localhost:8080/",
      products: null,
      categories: null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      // fetch products
      await axios
        .get(this.baseURL + 'product/')
        .then((res) => (this.products = res.data.content))
        .catch((err) => console.log(err));

      //fetch categories
      await axios
        .get(this.baseURL + 'category/')
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));

      //fetch cart items
      if (this.token) {
        await axios.get(this.baseURL + 'cart/?token=${this.token}').then(
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
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
  },
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
</style>
