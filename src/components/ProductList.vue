<template>
  <NavigationBar />
  
  <!-- <div class="carousel-container">
    <carousel :autoplay="true" :loop="true">
      <slide v-for="slide in carouselSlides" :key="slide.src">
        <img :src="slide.src" alt="slide image" />
      </slide>
    </carousel>
  </div> -->

  <carousel :slides="slides" :interval="3000" controls indicators></carousel>
  <div class="search-container">
      <input type="text" placeholder="Search products" v-model="searchTerm" />
      <button @click="searchProducts">Search</button>
    </div>
  <div class="product-list">
    <h1>Products</h1>
    <div class="product-container">
      <div v-for="(product, index) in products" :key="product.id" class="product-item" :class="{ 'first': index % 3 === 0 }">
        <img :src="product.images" alt="Product image" class="product-image" />
        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <span class="product-price">{{ "$" + product.price }}</span>
          <h4 class="product-description">{{ product.description }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>



import { getProducts } from '../services/ProductService';
import NavigationBar from "../components/NavigationBar.vue";


import Carousel from "./CarouselView.vue";
//import Carousel from 'vue-carousel';
export default {
  data() {
    return {
      // carouselSlides: [
      //   { src: require('../assets/banner2.jpg')},
      //   { src: require('..  /assets/Enthusiast4.jpg') }
      // ],


      slides: [
      "https://picsum.photos/1500/1200",
      "https://picsum.photos/1500/1200",
      "https://picsum.photos/1500/1200",
      "https://picsum.photos/1500/1200",
      "https://picsum.photos/1500/1200",
    ],
      products: []
    }
  },
  created() {
    getProducts().then(data => {
      this.products = data;
    });
  },
  components: {
    NavigationBar,
  Carousel
  },
 
}</script>

<style>

body {
  background-color: #e1e6e4;
}
.product-list {
  max-width: 1200px;
  margin: 0 auto;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  display: flex;
  flex-direction: column;
  width: calc(30.33% - 10px);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
}

.product-item.first {
  margin-right: 20px;
}

.product-image {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #2494cc;
}
.carousel-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.carousel-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.search-container input[type="text"] {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  width: 300px;
}

.search-container button {
  background-color: #2494cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #1c758a;
}

</style>


