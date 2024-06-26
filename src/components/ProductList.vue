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
          video: 'https://tbm-auth.alicdn.com/8713a9bf85650d60/fd91e66cbbe4e6c3/20220712_3c5c0b58437233d4_368644430612_mp4_264_sd_taobao.mp4?auth_key=1719385022-0-0-d5ab24deacf580fae4431da90dfda110&biz=video_plus-616a0f5d45654cd5&t=0b52358317193823223612528e13e4&t=0b52358317193823223612528e13e4&b=video_plus&p=cloudvideo_http_seller_sucai_vod_publish',
          images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          video: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
          images: ['https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg', 'https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg']
        },
        {
          id: 3,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          video: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
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
