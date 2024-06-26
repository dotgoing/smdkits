<!-- src/views/Products.vue -->
<template>
  <div>
    <AppHeader />
    <ProductList />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'ProductsPage',
  components: {
    AppHeader,
    AppFooter,
    ProductList,
  },
}
</script>
