<template>
  <div class="item-box">
    <div v-for="product in products" :key="product.id" class="item">
      <img :src="product.image" :alt="product.name" />
      <div class="info">
        <span class="name">{{ product.name }}</span>
        <span class="stats">
          <span class="icon-heart"></span> {{ product.likes }}
          <span class="icon-eye"></span> {{ product.views }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
        },
        {
          id: 2,
          name: 'Smdkits box',
          likes: 591,
          views: '141k',
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center'
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

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
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
