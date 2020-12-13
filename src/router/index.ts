import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/alquilar',
    name: 'Alquilar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  },
  {
    path: '/comprar',
    name: 'Comprar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  },
  {
    path: '/propiedades',
    name: 'Propiedades',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  },
  {
    path: '/inmueble/:id',
    name: 'Inmueble',
    component: () => import(/* webpackChunkName: "about" */ '../views/Property.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
