<template>
    <div class="row">
        <div class="col-3 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
            <NavbarAdmin :active="active"></NavbarAdmin>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="card-header">
                    <h5>Prodcut in tag</h5>
                </div>
                <div class="card-body">
                    <div v-for="product of products" :key="product.id" class="col-6 col-md-4 col-xl-3">
                        <ProductBox :product="product"></ProductBox>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavbarAdmin from "../../../components/Navbar/NavbarAdmin.vue"
// import swal from 'sweetalert';
const axios = require("axios");
import { apiUrl } from "@/config/config";
import ProductBox from "@/components/Product/ProductBox.vue"
/* eslint-disable vue/multi-word-component-names */
export default {
    name: "TagProductBox",
    props: ["tag"],
    components: { NavbarAdmin, ProductBox },
    data() {
        return {
            active: 5,
            products: [],
            id: null
        };
    },
    methods: {
        async getProductTag() {
            await axios.get(`${apiUrl}tag/${this.id}`)
                .then(res => this.products = res.data)
                .catch(erro => console.log(erro))
        },
        
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getProductTag();
    }
}
</script>