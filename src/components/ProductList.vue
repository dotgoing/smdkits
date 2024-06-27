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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  grid-gap: 36px;
  list-style: none;
  position: relative;
  padding-right: 72px;
  padding-left: 72px;
}

.item {
  box-sizing: border-box;
  margin: 4rem;
}
</style>
