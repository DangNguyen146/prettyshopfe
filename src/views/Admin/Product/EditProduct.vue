<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                <NavbarAdmin :active="active"></NavbarAdmin>
            </div>
            <div class="col-9">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h4 class="pt-3">Edit Product</h4>
                        </div>
                        <div class="col-6">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <form v-if="product">
                                            <div class="form-group">
                                                <label>Category</label>
                                                <select class="form-control" v-model="product.categoryId" required>
                                                    <option v-for="category of categories" :key="category.id"
                                                        :value="category.id">
                                                        {{ category.categoryName }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" v-model="product.name" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" class="form-control" v-model="product.description"
                                                    required>
                                            </div>
                                            <div class="form-group">
                                                <label>ImageURL</label>
                                                <input type="url" class="form-control" v-model="product.imageURL" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Price</label>
                                                <input type="number" class="form-control" v-model="product.price" required>
                                            </div>
                                            <button type="button" class="btn btn-primary"
                                                @click="editProduct">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Edit size</h2>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button class="btn btn-warning  col-4 mt-3">Edit Quality</button>
                                    </div>

                                    <div class="col-12 my-5"></div>
                                    <button class="btn btn-success col-4">Add size</button>
                                    <button class="btn btn-primary col-4 ms-2">Submit size</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { apiUrl } from "@/config/config";
const axios = require("axios");
import NavbarAdmin from "../../../components/Navbar/NavbarAdmin.vue"
import swal from 'sweetalert';
export default {
    name: "EditProduct",
    props: ["categories"],
    components: { NavbarAdmin },
    data() {
        return {
            product: null,
            baseURL: apiUrl,
            active: 2,
        }
    },
    methods: {
        async editProduct() {
            axios.post(this.baseURL + "product/update/" + this.id, this.product)
                .then(res => {
                    //sending the event to parent to handle
                    console.log(res);
                    this.$emit("fetchData");
                    this.$router.push({ name: 'ProductAdmin' });
                    swal({
                        text: "Product Updated Successfully!",
                        icon: "success",
                        closeOnClickOutside: false,
                    });
                })
                .catch(err => console.log("err", err));
        },
        async getProduct() {
            await axios.get(`${apiUrl}product/getproduct/${this.id}`)
                .then(res => {
                    this.product = res.data;
                    this.category = this.categories.find(
                        (category) => category.id == this.product.categoryId
                    );
                })
                .catch(erro => console.log(erro))
        },
    },
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ name: 'Signin' });
            return;
        }
        this.id = this.$route.params.id;
        this.product = this.getProduct();
    }
}
</script>