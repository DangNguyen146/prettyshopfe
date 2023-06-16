<template>
    <div class="row">
        <div class="col-3 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
            <NavbarAdmin :active="active"></NavbarAdmin>
        </div>

    </div>
</template>
<script>

import NavbarAdmin from "../../../components/Navbar/NavbarAdmin.vue"

/* eslint-disable vue/multi-word-component-names */
export default {
    name: "ColorAdmin",
    components: { NavbarAdmin },
    data() {
        return {
            active: 6,
        };
    },

}
</script>