<template>
  <div class="item-box">
    <div v-for="product in products" :key="product.id" class="item">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['products'])
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.item-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  box-sizing: border-box;
  margin: 2rem;
}
</style>
