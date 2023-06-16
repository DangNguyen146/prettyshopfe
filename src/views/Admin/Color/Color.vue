<template>
    <div class="row">
        <div class="col-3 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
            <NavbarAdmin :active="active"></NavbarAdmin>
        </div>
        <div class="col-9">
            <div class="card">
                <div class="container">
                    <h2>Our color</h2>
                    <router-link :to="{ name: 'AddColor' }">
                        <button class=" btn btn-primary">Add color</button>
                    </router-link>
                    <div class="row">
                        <div v-for="color of colors" :key="color.id" class="col-6 col-md-4">
                            <ColorBox :color="color" @colorDeleted="refreshPcolors"></ColorBox>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>

import NavbarAdmin from "../../../components/Navbar/NavbarAdmin.vue"
import ColorBox from "@/components/Color/ColorBox.vue"
import { apiUrl } from "@/config/config";
const axios = require("axios");
/* eslint-disable vue/multi-word-component-names */
export default {
    name: "ColorAdmin",
    components: { NavbarAdmin, ColorBox },
    data() {
        return {
            active: 6,
            colors: []
        };
    },
    methods: {
        refreshPcolors(){
            this.$forceUpdate();
        },
        async getColors() {
            await axios.get(`${apiUrl}produccolor/`)
                .then(res => this.colors = res.data)
                .catch(erro => console.log(erro))
        }
    },
    mounted() {
        this.getColors();
    }

}
</script>