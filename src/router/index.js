import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductsDetail from '../components/ProductDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/product', name: 'Products', component: ProductsPage },
  { path: '/product/:id', name: 'ProductDetail', component: ProductsDetail },
  { path: '/about', name: 'About', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
