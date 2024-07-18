<template>
  <div id="app" class="container">
    <div class="header">
      <AppHeader />
    </div>
    <div class="body">
      <RouterView />
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </div>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: column;
}

.header,
.footer {
  text-align: center;
  flex-shrink: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.body {
  flex: 1;
  padding: 1rem;
  padding-top: calc(var(--header-height, 60px) + 1rem);
  padding-bottom: calc(var(--footer-height, 60px) + 1rem);
  overflow-y: auto;
}
</style>
