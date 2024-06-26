<template>
  <header>
    <h1>Product Showcase</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

nav a {
  margin: 0 0.5rem;
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
