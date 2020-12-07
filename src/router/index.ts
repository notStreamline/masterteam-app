import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: 'search' */ '../views/Search.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: 'not-found' */ '../views/About.vue'),
    meta: {
      visible: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
