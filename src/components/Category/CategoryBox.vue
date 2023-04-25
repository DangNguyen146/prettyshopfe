<template>
    <div class="card" style="width: 18rem;">
        <img :src="category.imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">{{ category.description }}</p>
            <router-link :to="{ name: 'EditCategory', params: {id: category.id} }">
                <a href="#" class="btn btn-primary">Edit</a>
            </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryBox',
    props: ["category"],
    methods:{},
}
</script>