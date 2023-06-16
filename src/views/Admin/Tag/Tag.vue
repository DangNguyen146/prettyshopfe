<template>
    <div class="row">
        <div class="col-3 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
            <NavbarAdmin :active="active"></NavbarAdmin>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="container">
                    <h2>Our tag</h2>
                    <router-link :to="{ name: 'AddTag' }">
                        <button class=" btn btn-primary">Add tag</button>
                    </router-link>
                    <div class="row">
                        <div v-for="tag of tags" :key="tag.id" class="col-6 col-md-4">
                            <TagBox :tag="tag" @tagDeleted="refreshPtags"></TagBox>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import { apiUrl } from "@/config/config";
import NavbarAdmin from "../../../components/Navbar/NavbarAdmin.vue"
import TagBox from "@/components/Tag/TagBox.vue"
// import TagProductBox from "@/components/Tag/TagProductBox.vue"
const axios = require("axios");

/* eslint-disable vue/multi-word-component-names */
export default {
    name: "TagAdmin",
    components: { NavbarAdmin,TagBox,   },
    data() {
        return {
            active: 5,
            tags: []
        };
    },
    methods: {
        refreshPtags(){
            this.$forceUpdate();
        },
        async getTags() {
            await axios.get(`${apiUrl}productag/`)
                .then(res => this.tags = res.data)
                .catch(erro => console.log(erro))
        }
    },
    mounted() {
        this.getTags();
    }
}
</script>