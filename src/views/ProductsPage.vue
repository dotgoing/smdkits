<!-- src/views/Products.vue -->
<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductList,
  },
}
</script>
