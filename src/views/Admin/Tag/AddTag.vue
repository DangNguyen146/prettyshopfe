<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <h2>Add tags</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="col-12 mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Name tag</span>
                                <input type="text" class="form-control" aria-label="tag" v-model="tag"
                                    aria-describedby="basic-addon1">
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="input-group">
                                <span class="input-group-text">Description</span>
                                <textarea class="form-control" aria-label="With textarea" v-model="description"></textarea>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" @click="addTag">Submit</button>
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
            tag: "",
            description: "",
        }
    },
    methods: {
        addTag() {
            const newTag = {
                tag: this.tag,
                description: this.description,
            }
            axios({
                method :'post',
                url: `${apiUrl}productag/create`,
                data: JSON.stringify(newTag),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(()=>{
                this.$router.push({ name: 'TagAdmin' });
                sweetalert({
                    text: 'Tag add successfully',
                    icon: 'success'
                })
            }).catch((err)=>{
                console.log(err);
                sweetalert({
                    text: err.response.data.message,
                    icon: 'warning'
                })
            })
        }
    }
}
</script>