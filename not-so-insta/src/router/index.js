import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }, {
    path: '/post/:id',
    name: 'Post Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostPage.vue'),
    props: true
  }, {
    path: '*',
    name: 'Lost',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
