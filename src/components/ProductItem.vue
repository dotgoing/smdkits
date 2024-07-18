<template>
  <div class="product">
    <router-link :to="`/product/${product.id}`">
      <img class="big-img" :src="currentImage" alt="empty" />
    </router-link>
    <div class="thumbnail">
      <div v-for="(image, index) in product.images" :key="index">
        <img class="small-img" :src="image" :alt="product.name" @click="showImage(image)" />
      </div>
    </div>
    <div class="info">
      <span class="name">{{ product.name }}</span>
      <span class="stats">
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
          <title id="title">Favorite</title>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#e91e63" />
        </svg>
        {{ product.likes }}

        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
          <title id="title">Shopping Cart</title>
          <path
            d="M7 18C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18ZM1 2V4H3L6.68 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 16.1046 5.89543 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.65L8.1 13H14.55C15.3 13 15.96 12.55 16.3 11.91L20.88 4.48C20.96 4.34 21 4.17 21 4C21 3.45 20.55 3 20 3H5.21L4.27 1H1ZM17 18C15.8954 18 15 18.8954 15 20C15 21.1046 15.8954 22 17 22C18.1046 22 19 21.1046 19 20C19 18.8954 18.1046 18 17 18Z"
            fill="#4CAF50" />
        </svg>
        {{ product.views }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      currentImage: ''
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  watch: {
    product: {
      handler() {
        this.currentImage = this.product.images[0];
      },
      immediate: true
    }
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
    },
    showVideo(video) {
      console.log(video);
    }
  }
}

</script>

<style scoped>
.big-img,
.big-video {
  width: 300px;
  height: 300px;
}

.thumbnail {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1rem;
}

.small-img,
.small-video {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.product {
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
}

.name {
  font-weight: bold;
  flex-grow: 1;
  text-align: left;
}

.stats {
  white-space: nowrap;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
