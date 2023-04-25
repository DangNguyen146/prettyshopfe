
<template>
    <div class="card">
        <div class="container">
            <h2>Our category</h2>
            <router-link :to="{ name: 'AddCategory' }">
                <button class=" btn btn-primary">Add category</button>
            </router-link>
            <div class="row">
                <div v-for="category of categories" :key="category.id" class="col-6 col-md-4">
                    <CategoryBox :category="category"></CategoryBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable vue/multi-word-component-names */
const axios = require("axios");
import CategoryBox from "@/components/Category/CategoryBox.vue"
import { apiUrl } from "@/config/config";
export default {
    name: 'Category',
    components: { CategoryBox },
    data() {
        return {
            categories: []
        };
    },

    methods: {
        async getCategory() {
            await axios.get(`${apiUrl}category/`)
                .then(res => this.categories = res.data)
                .catch(erro => console.log(erro))
        }
    },
    
    mounted() {
        this.getCategory();
    }
}
</script>

<style scoped></style>