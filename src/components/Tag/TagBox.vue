<template>
    <div class="card m-2" style="">
        <div class="card-header">{{ tag.id }}: {{ tag.tag }}</div>
        <div class="card-body">
            <p class="card-text">{{ tag.description }}</p>
            <router-link :to="{ name: 'EditTag', params: { id: tag.id } }">
                <button href="#" class="btn btn-primary">Edit</button>
            </router-link>
            <router-link :to="{ name: 'TagProduct', params: { id: tag.id } }">
                <button href="#" class="btn btn-warning">View product in tag</button>
            </router-link>
            <button href="#" class="btn btn-danger" @click="deleteTag">Delete</button>
        </div>
    </div>
</template>
<script>
import swal from 'sweetalert';
const axios = require("axios");
import { apiUrl } from "@/config/config";
/* eslint-disable vue/multi-word-component-names */
export default {
    name: "TagBox",
    props: ["tag"],
    methods: {
        async deleteTag() {
            const willDelete = await swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this tag!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });

            if (willDelete) {
                try {
                    axios
                        .delete(`${apiUrl}productag/${this.tag.id}`)
                        .then(
                            (response) => {
                                if (response.status == 200) {
                                    swal({
                                        text: "tag delete!",
                                        icon: "success",
                                        closeOnClickOutside: false,
                                    });

                                    // refresh nav bar
                                    this.$emit("tagDeleted"); // bắn sự kiện productDeleted
                                    this.$router.push({ name: 'TagAdmin' });
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