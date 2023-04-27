<template>
    <div class="card ">
        <div class="embed-responsive embed-responsive-16by9">
            <div class="card-img">
                <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Product Image" />
            </div>
        </div>
        <div class="card-body">
            <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }">
                <h5 class="card-title">{{ product.name }}</h5>
            </router-link>
            <p class="card-text"><sup>$</sup>{{ product.price }}</p>
            <p class="card-text font-italic">
                {{ product.description.substring(0, 65) }}...
            </p>
            <router-link id="edit-product" :to="{ name: 'EditProduct', params: { id: product.id } }"
                v-show="$route.name == 'AdminProduct'">
                <button class="btn btn-primary">Edit</button>

            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    props: ["product"],
    methods: {
        showDetails() {
            this.$router.push({
                name: "ShowDetails",
                params: { id: this.product.id },
            });
        },
    },
}
</script>

<style scoped>
.card .embed-responsive {
    height: 300px;
    width: 100%;
    overflow: hidden;
}


.card .card-img {
    height: 300px;
    overflow: hidden;

}

.card .card-img img {
    transition: all 0.3s;
}

.card .card-img:hover img {
    transform: scale(1.2);
}
</style>