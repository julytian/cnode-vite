import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import list from '../views/list/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    name: 'List',
    component: list,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message/index.vue'),
  },
  {
    path: '/topic/:id',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "topic" */ '../views/topic/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
