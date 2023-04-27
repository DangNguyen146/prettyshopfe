<template>
    <nav class="navigation navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
            <div class="nav-bard d-none d-md-block">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Product' }">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Category' }">Category</router-link>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler border-5" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <!-- Icon -->
                        <a class="link-secondary me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>

                        <!-- Notifications -->
                        <div class="dropdown">
                            <a class="link-secondary me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bell"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        <!-- login singinup -->
                        <div class="rightnavbar" v-if="!token">
                            <router-link :to="{ name: 'SigninUpForm' }">
                                <button type="button" class="btn btn-tertiary px-3"
                                    data-mdb-ripple-color="light">Login</button>
                            </router-link>
                            <router-link :to="{ name: 'SignupUpForm' }">
                                <button type="button" class="ms-3 btn btn-outline-secondary" data-mdb-ripple-color="dark">
                                    Signup</button>
                            </router-link>

                        </div>
                        <!-- Avatar -->
                        <div class="dropdown" v-if="token">
                            <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                                id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
                                aria-expanded="false">
                                <img src="../../assets/logo/logo.png" class="rounded-circle" height="25"
                                    alt="Black and White Portrait of a Man" loading="lazy" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="signout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
import swal from 'sweetalert';
// const axios = require("axios");

export default {
    name: "NavBar",
    data() {
        return {
            token: localStorage.getItem("token"),
        };
    },
    methods: {
        signout() {
            localStorage.removeItem("token");
            this.token = null;
            // this.$emit("resetCartCount");
            this.$router.push({ name: "Home" });
            swal({
                text: "Logged you out. Visit Again",
                icon: "success",
                closeOnClickOutside: false,
            });
        },
    },
    mounted() {
        this.token = localStorage.getItem("token");
    },
};

</script>
<style>
.navigation, .text-bg-dark {
    background-color: #1d262d!important;
}

.navigation .rightnavbar button,
.navigation {
    font-weight: 600;
    font-size: 14px;
    color: #a5b7c6;
    text-transform: none;
}
</style>