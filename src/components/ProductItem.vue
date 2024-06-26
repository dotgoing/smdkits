<template>
  <div class="product">
    <img class="big-img" :src="currentImage" alt="empty" />
    <div class="thumbnail">
      <div v-for="(image, index) in product.images" :key="index">
        <img class="small-img" :src="image" :alt="product.name" @click="showImage(image)" />
      </div>
    </div>
    <div class="info">
      <span class="name">{{ product.name }}</span>
      <span class="stats">
        <span class="icon-heart"></span> {{ product.likes }}
        <span class="icon-eye"></span> {{ product.views }}
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
        console.log('Product changed :', this.product);
      },
      immediate: true
    }
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
      console.log('Image clicked :', image);
    }
  }
}

</script>

<style scoped>
.big-img {
  width: 300px;
  height: 300px;
}

.thumbnail {
  display: flex;
  justify-content: left;
  align-items: center;
}

.small-img {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
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
}

.icon-heart,
.icon-eye {
  margin-right: 0.5rem;
  margin-left: 1rem;
}

.icon-heart,
.icon-eye {
  display: inline-block;
}

.icon-heart::before,
.icon-eye::before {
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 2em;
  line-height: 1;
}

.icon-heart::before {
  content: '\2665';
  color: #ea4c89;
}

.icon-eye::before {
  content: '\1F441';
  color: #9e9ea7;
}
</style>
