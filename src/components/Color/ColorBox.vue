<template>
    <div class="card m-2" style="">
        <div class="card-header">{{ color.id }}: {{ color.color }}</div>
        <div class="card-body">
            <p class="card-text">{{ color.description }}</p>
            <router-link :to="{ name: 'EditColor', params: { id: color.id } }">
                <button href="#" class="btn btn-primary">Edit</button>
            </router-link>
            <router-link :to="{ name: 'ColorProduct', params: { id: color.id } }">
                <button href="#" class="btn btn-warning">View product in color</button>
            </router-link>
            <button href="#" class="btn btn-danger" @click="deleteColor">Delete</button>
        </div>
    </div>
</template>
<script>
import swal from 'sweetalert';
const axios = require("axios");
import { apiUrl } from "@/config/config";
/* eslint-disable vue/multi-word-component-names */
export default {
    name: "ColorBox",
    props: ["color"],
    methods: {
        async deleteColor() {
            const willDelete = await swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this color!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });

            if (willDelete) {
                try {
                    axios
                        .delete(`${apiUrl}produccolor/${this.color.id}`)
                        .then(
                            (response) => {
                                if (response.status == 200) {
                                    swal({
                                        text: "color delete!",
                                        icon: "success",
                                        closeOnClickOutside: false,
                                    });

                                    // refresh nav bar
                                    this.$emit("colorDeleted"); // bắn sự kiện productDeleted
                                    this.$router.push({ name: 'ColorAdmin' });
                                }
                                else {
                                    swal("Poof! Your product has been deleted! Please reload page", {
                                        icon: "success",
                                    });

                                }
                            },
                            (error) => {
                                console.log(error);
                            }
                        );


                    this.loadProducts();
                } catch (error) {
                    swal("Oops...", "Failed to delete the product. " + error.response.data.message, "error");
                }
            }
        }
    },
}
</script>