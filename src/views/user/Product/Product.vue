<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-left">
                <h2 class="pt-3">Top Product</h2>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-6 col-md-4 col-xl-3">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */

import ProductBox from "@/components/Product/ProductBox.vue"
export default {
    name: 'Product',
    props: ["baseURL", "products", "categories"],
    components: {
        ProductBox
    }, data() {
        return {
        }
    },
    mounted() {

        // this.product_size = this.products.length;
        // this.product_size = Math.min(8, this.product_size);
    }
}
</script>