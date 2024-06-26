<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><a href="#">Find designers</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Go Pro</a></li>
        </ul>
      </nav>
      <div class="logo">Dribbble</div>
      <div class="search-login">
        <input type="text" placeholder="Search...">
        <button>Log in</button>
        <button class="sign-up">Sign up</button>
      </div>
    </header>

    <main>
      <section class="title-section">
        <h1>Product Showcase</h1>
        <p>209 inspirational designs, illustrations, and graphic elements from the world's best designers.</p>
        <p>Want more inspiration? Browse our <a href="#">search results...</a></p>
      </section>

      <section class="product-grid">
        <!-- Repeat this div for each product -->
        <div class="product-card" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.title">
          <div class="product-info">
            <img :src="product.authorAvatar" :alt="product.author" class="author-avatar">
            <span class="author-name">{{ product.author }}</span>
            <span class="product-stats">
              <i class="icon-heart"></i> {{ product.likes }}
              <i class="icon-eye"></i> {{ product.views }}
            </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: [
        // Add your product data here
        // Example:
        // { id: 1, image: 'path/to/image.jpg', title: 'Product Title', author: 'Author Name', authorAvatar: 'path/to/avatar.jpg', likes: 591, views: '141k' },
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style-type: none;
}

nav ul li {
  margin-right: 1rem;
}

.search-login {
  display: flex;
  align-items: center;
}

.search-login input {
  margin-right: 1rem;
}

.sign-up {
  background-color: #0d0c22;
  color: white;
}

.title-section {
  text-align: center;
  padding: 2rem 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: auto;
}

.product-info {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.product-stats {
  margin-left: auto;
}
</style>
