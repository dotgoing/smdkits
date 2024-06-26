<template>
  <header>
    <h1>Toolbox for electronics engineers in lab</h1>
    <nav>
      <router-link to="/products">Products</router-link>
      <router-link to="/">About Us</router-link>
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
  width: 100%;
  background-color: #333;
  color: #fff;
}

header h1 {
  margin-left: 2rem;
}

nav a {
  margin-right: 2rem;
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
