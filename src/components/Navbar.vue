<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow" aria-label="Offcanvas navbar large">
        <div class="container">
            <a class="navbar-brand p-0" href="#">
                <img src="../assets/logotext_white.png" style="width: 70px;" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <router-link class="nav-link active" :to="{ name: 'Home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" :to="{ name: 'Product' }">Product</router-link> -->
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" :to="{ name: 'Category' }">Category</router-link> -->
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> -->
                    </ul>
                    <form class="d-flex mt-3 mt-lg-0" role="search">
                        <input class="form-control rounded-end-0" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-warning rounded-start-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
/* eslint-disable vue/multi-word-component-names */

export default {
    name: "Navbar",
    data() {
    },
    methods: {

    },
    computed: {
    },
};

</script>
<style>
.navbar {
    background-image: linear-gradient(rgba(112.520718, 44.062154, 249.437846, 1), rgba(112.520718, 44.062154, 249.437846, 0.95));
}
</style>