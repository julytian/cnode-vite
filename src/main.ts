import { createApp } from 'vue'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'// 全局引入样式

import App from './App.vue'
import '@/assets/styles/index.scss'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .mount('#app')
