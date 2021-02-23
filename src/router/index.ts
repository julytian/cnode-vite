import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
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
    path: '/topic/:id',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "topic" */ '../views/topic/index.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:loginname',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  },
  {
    path: '/add/:id?',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/add/index.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
