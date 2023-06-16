<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <h2>Edit tags</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="col-12 mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Name tag</span>
                                <input type="text" class="form-control" aria-label="tag" v-model="tag.tag"
                                    aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="input-group">
                                <span class="input-group-text">Description</span>
                                <textarea class="form-control" aria-label="With textarea" v-model="tag.description"></textarea>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" @click="editTag">Submit</button>
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
            tag: null,
        }
    },
    methods: {
        async getTag() {
            await axios.get(`${apiUrl}productag/${this.id}`)
                .then(res => this.tag = res.data)
                .catch(erro => console.log(erro))
        },
        async editTag(){
            await axios.put(`${apiUrl}productag/${this.id}`, this.tag)
                // eslint-disable-next-line    
                .then(res => {
                    //sending the event to parent to handle
                    this.$router.push({ name: 'TagAdmin' });
                    sweetalert({
                        text: "Tag Updated Successfully!",
                        icon: "success",
                        closeOnClickOutside: false,
                    });
                })
                .catch(err => console.log(err));
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getTag();
    },
}
</script>