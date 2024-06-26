<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: '$10.00', image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: '$20.00', image: 'path/to/image2.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  width: 200px;
  margin: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}
</style>
