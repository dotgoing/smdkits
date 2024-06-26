<template>
  <div class="item-box">
    <div v-for="product in products" :key="product.id" class="item">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg', 'https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg']
        },
        {
          id: 3,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 4,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 5,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 6,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 7,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 8,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        }
      ]
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
