import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import ProductsPage from '../views/ProductsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: ProductsPage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/about', name: 'About', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
