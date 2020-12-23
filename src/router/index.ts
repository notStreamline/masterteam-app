import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

/**
 * Rutas:
 * - Home > /
 * - Search > /search?cat={categoria}&q={query}
 * - Inmueble > /inmueble/:id
 * - Dashboard > /dashboard
 * -  MyPropiedades > /dashboard/listings
 * -  MyPropiedades > /dashboard/listings/
 */

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
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  },
  {
    path: '/inmueble/:id',
    name: 'Inmueble',
    component: () => import(/* webpackChunkName: "about" */ '../views/Property.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/DashboardSummary.vue'),
      },
      {
        name: 'Dashboard',
        path: '/dashboard/listings',
        component: () => import(/* webpackChunkName: "about" */ '../views/DashboardListings.vue'),
      },
      // ...other sub routes
    ],
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
