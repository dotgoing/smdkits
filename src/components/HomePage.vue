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
        <div class="hide">
          <button>Log in</button>
          <button class="sign-up">Sign up</button>
        </div>
      </div>
    </header>

    <main>
      <section class="title-section">
        <h1>Toolbox for electronics engineers in lab</h1>
        <p>Everything needed is ready.</p>
      </section>

      <section class="grid">
        <!-- Repeat this div for each product -->
        <div class="card" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.title">
          <div class="info">
            <span class="name">{{ product.name }}</span>
            <span class="stats">
              <span class="icon-heart"></span> {{ product.likes }}
              <span class="icon-eye"></span> {{ product.views }}
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
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        },
        {
          id: 1,
          image: 'https://cdn.dribbble.com/userupload/4443647/file/original-d27a91979b9faf3d86db05cb877d5c94.png?resize=400x300&amp;vertical=center',
          title: 'Product Title',
          name: 'Smdkits box',
          likes: 591,
          views: '141k'
        }
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

.hide {
  display: none;
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

.name {
  font-weight: bold;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 2px 12px 2px 12px;
}

.icon-heart,
.icon-eye {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
}

.icon-heart::before,
.icon-eye::before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 1em;
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
