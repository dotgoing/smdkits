<!-- src/views/Home.vue -->
<template>
  <div>
    <AppHeader />
    <h1>Welcome to the Product Showcase</h1>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
