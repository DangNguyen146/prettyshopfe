<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-3 d-block d-md-none"></div>
            <div class="col-6 col-md-5 col-xl-4">
                <img :src="product.imageURL" :alt="product.name" class=" rounded-2 shadow-sm w-100" />
            </div>
            <div class="col-3 d-block d-md-none"></div>
            <div class="col-8">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">$ {{ product.price }}</h6>
                <p>
                    {{ product.description }}
                </p>

                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                        <input class="form-control" type="number" v-bind:value="quantity" />
                    </div>

                    <div class="input-group">
                        <button type="button" id="add-to-cart-button" class="btn" @click="addToCart(this.id)">
                            Add to Cart
                            <ion-icon name="cart-outline" v-pre></ion-icon>
                        </button>
                    </div>
                </div>

                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Officia quas, officiis eius magni error magnam voluptatem</li>
                        <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
                        <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
                        <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
                    </ul>
                </div>
                <hr class="my-4" />
                <button id="wishlist-button" class="btn mr-3 p-1 py-0"
                    :class="{ product_added_wishlist: isAddedToWishlist }" @click="addToWishList(this.id)">
                    {{ wishlistString }}
                </button>
                <button id="show-cart-button" type="button" class="btn mr-3 p-1 py-0" @click="listCartItems()">
                    Show Cart

                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </button>
            </div>
        </div>
        <div class="container mt-5">
            <div class="card">
                <div class="card-header"><h3>Comment</h3></div>
                <div class="card-body">
                    <CommentsBox :productId="product.id" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import swal from 'sweetalert';
const axios = require("axios");
import { apiUrl } from "@/config/config";
import CommentsBox from "@/components/CommentsBox/CommentsBox.vue";

import { mapState, mapGetters } from 'vuex';
export default {
    name:"ShowDetail",
    data() {
        return {
            product: {},
            category: {},
            id: null,
            token: null,
            isAddedToWishlist: false,
            wishlistString: "Add to wishlist",
            quantity: 1,
        };
    },
    props: ["baseURL", "products", "categories"],
    computed: {
        ...mapState(['count']),
        ...mapGetters(['getCount']),
    },
    components: {CommentsBox},
    methods: {
        addToWishList() {
            this.$store.commit('increment');
            axios
                .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
                    id: this.product.id,
                    name: this.product.name,
                    imageURL: this.product.imageURL,
                    price: this.product.price,
                    description: this.product.description,
                    categoryId: this.product.categoryId
                })
                .then(
                    (response) => {
                        if (response.status == 201) {
                            this.$emit("fetchData");
                            this.isAddedToWishlist = true;
                            this.wishlistString = "Added to WishList";
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        },
        addToCart(productId) {
            if (!this.token) {
                swal({
                    text: "Please log in first!",
                    icon: "error",
                });
                return;
            }
            axios
                .post(`${this.baseURL}cart/add?token=${this.token}`, {
                    productId: productId,
                    quantity: this.quantity,
                    quantityBySizes: {}
                })
                .then(
                    (response) => {
                        if (response.status == 201) {
                            swal({
                                text: "Product Added to the cart!",
                                icon: "success",
                                closeOnClickOutside: false,
                            });
                            // refresh nav bar
                            this.$emit("fetchData");
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        },

        listCartItems() {
            axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
                (response) => {
                    if (response.status === 200) {
                        this.$router.push("/cart");
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
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
        this.id = this.$route.params.id;

        this.getProduct();

        this.category = this.categories.find(
            (category) => category.id == this.product.categoryId
        );
        this.token = localStorage.getItem("token");
    },
};
</script>
  
<style>
.category {
    font-weight: 400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */

#add-to-cart-button {
    background-color: #febd69;
}

#wishlist-button {
    background-color: #b9b9b9;
    border-radius: 0;
}

#show-cart-button {
    background-color: #131921;
    color: white;
    border-radius: 0;
}
</style>
  