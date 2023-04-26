<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="@/assets/cover/cover1.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="@/assets/cover/cover1.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/cover/cover1.jpg" class="d-block w-100" alt="@/assets/cover/cover1.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Categories</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="category of categories" :key="category.id" class="col-6 col-md-4">
        <CategoryBox :category="category"></CategoryBox>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Product</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="product of products" :key="product.id" class="col-6 col-md-4">
        <ProductBox :product="products"></ProductBox>
      </div>
    </div>
  </div>

  {{ categories }}
  {{ products }}
</template>

<script>
// @ is an alias to /src
import CategoryBox from "@/components/Category/CategoryBox.vue"
import ProductBox from "@/components/Product/ProdcutBox.vue"

export default {
  name: 'HomeView',
  props: ["baseURL", "products", "categories"],
  components: {
    CategoryBox, ProductBox
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
.carousel {
  height: 500px;
  overflow: hidden;

}
</style>