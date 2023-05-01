<template>
  <!-- Carousel wrapper -->
  <div id="carouselBasicExample" class="carousel slide" data-mdb-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="Sunset Over the City" />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="Canyon at Nigh" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="Cliff Above a Stormy Sea" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Carousel wrapper -->

  <div class="category container card mt-3">
    <div class="card-header position-relative">
      <h2 class="pt-3">Top Categories</h2>
      <router-link :to="{ name: 'Category' }" class="btn btn-red float-end position-absolute" style="right: 0;
    top: 25%;">View more</router-link>
    </div>
    <div class="card-body">
      <div class="row">
        <div v-for="category of categories" :key="category.id" class="col-3 col-md-3 col-lg-2 mb-4">
          <CategoryBoxHome :category="category"></CategoryBoxHome>
        </div>
      </div>
    </div>
  </div>
  <div class="category container card mt-3">
    <div class="card-header position-relative">
      <h2 class="pt-3">Top Product</h2>
      <router-link :to="{ name: 'Product' }" class="btn btn-red float-end position-absolute" style="right: 0;
    top: 25%;">View more</router-link>
    </div>
    <div class="card-body">
      <div class="row">
        <div v-for="product of products" :key="product.id" class="col-6 col-md-4 col-xl-3">
          <ProductBox :product="product"></ProductBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryBoxHome from "@/components/Category/CategoryBoxHome.vue"
import ProductBox from "@/components/Product/ProductBox.vue"

export default {
  name: 'HomeView',
  props: ["baseURL", "products", "categories"],
  components: {
    CategoryBoxHome, ProductBox
  }, data() {
    return {
      category_size: 0,
      product_size: 0
    }
  },
  mounted() {
    this.category_size = this.categories.length;
    this.category_size = Math.min(6, this.category_size);

    // this.product_size = this.products.length;
    // this.product_size = Math.min(8, this.product_size);
  }
}
</script>
<style scoped>
@media (max-width: 992px) {
  .carousel .carousel-item {
    height: 200px;
    overflow: hidden;
  }
}

@media (min-width: 992px) {
  .carousel .carousel-item {
    height: 500px;
    overflow: hidden;
  }
}

.carousel .carousel-item img {
  width: 100%;
}
</style>