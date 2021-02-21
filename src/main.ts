import { createApp } from 'vue';
import { Lazyload } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

import App from './App.vue';
import '@/assets/styles/index.scss';
import router from './router';
import store from './store';
import { SET_USER_INFO } from './store/action-types';

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
  store.dispatch(
    `user/${SET_USER_INFO}`,
    JSON.parse(window.sessionStorage.user)
  );
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.user.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(store)
  .use(Lazyload, {
    preload: 1.5,
    lazyComponent: true,
  })
  .mount('#app');
