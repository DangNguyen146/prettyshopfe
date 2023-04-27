<template>
    <nav class="navbarsearch bg-white navbar bg-body-tertiary" :class="{ 'navbarsearch--fixed': navbarFixed }">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
                <img src="../../assets/logo/logo.png" style="width: 40px;" alt="">
                <img src="../../assets/logo/text.png" class="d-none d-md-block ms-3" style="width: 150px;" alt="">
                <span class="d-none d-md-block">
                </span>
            </router-link>
            <div class="d-flex w-75 input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-warning">search</button>
            </div>

        </div>
    </nav>
</template>
  
<script>
/* eslint-disable vue/multi-word-component-names */

export default {
    name: "NavbarSearch",
    data() {
        return {
            navbarFixed: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                this.navbarFixed = true;
            } else {
                this.navbarFixed = false;
            }
        }
    }
}
</script>

<style>
.navbarsearch {
    transition: top 1s, transform 1s;
    /* add transition effect */
}

.navbarsearch--fixed {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    /* add slide effect */
    transform: translateY(80px);
    /* apply animation */
    animation: slideDown 1s forwards;
}

@keyframes slideDown {
    from {
        transform: translateY(-80px);
    }

    to {
        transform: translateY(0);
    }
}
</style>