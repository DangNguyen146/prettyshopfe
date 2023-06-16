<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <h2>Edit colors</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="col-12 mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Name color</span>
                                <input type="text" class="form-control" aria-label="color" v-model="color.color"
                                    aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="input-group">
                                <span class="input-group-text">Description</span>
                                <textarea class="form-control" aria-label="With textarea" v-model="color.description"></textarea>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" @click="editColor">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiUrl } from "@/config/config";
const sweetalert = require("sweetalert");
const axios = require("axios");

export default {
    data() {
        return {
            color: null,
        }
    },
    methods: {
        async getColor() {
            await axios.get(`${apiUrl}produccolor/${this.id}`)
                .then(res => this.color = res.data)
                .catch(erro => console.log(erro))
        },
        async editColor(){
            await axios.put(`${apiUrl}produccolor/${this.id}`, this.color)
                // eslint-disable-next-line    
                .then(res => {
                    //sending the event to parent to handle
                    this.$router.push({ name: 'ColorAdmin' });
                    sweetalert({
                        text: "Color Updated Successfully!",
                        icon: "success",
                        closeOnClickOutside: false,
                    });
                })
                .catch(err => console.log(err));
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getColor();
    },
}
</script>