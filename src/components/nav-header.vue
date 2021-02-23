<template>
  <van-sticky>
    <header class="d-flex align-items-center justify-content-between navbar">
      <div v-if="showMenu" class="navbar-icon-menu" @click="showMenu"></div>
      <div v-else class="navbar-blank"></div>
      <div class="flex-1 navbar-title" v-text="title"></div>
      <slot name="collect"></slot>
      <router-link :to="`/add/${topicId}`">
        <i class="iconfont navbar-icon-add">&#xe60f;</i>
      </router-link>
    </header>
  </van-sticky>
  <van-popup v-model:show="show" position="left" teleport="body">
    <nav-menu v-model:show="show"></nav-menu>
  </van-popup>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Sticky, Popup } from 'vant';
import NavMenu from '@/components/nav-menu.vue';

export default defineComponent({
  name: 'NavHeader',
  components: {
    [Sticky.name]: Sticky,
    [Popup.name]: Popup,
    NavMenu,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    showMenu: {
      type: Boolean,
      default: true,
    },
    topicId: {
      type: String,
      default: '',
    }
  },
  setup() {
    const show = ref(false);
    const showMenu = () => {
      show.value = true;
    };
    return {
      show,
      showMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  height: 44px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.navbar-icon-menu {
  width: 49px;
  height: 44px;
  background: url('@/assets/images/nav_icon.png') no-repeat center center;
  background-size: 19px 16px;
}
.navbar-title {
  font-size: 16px;
  text-align: center;
}
.navbar-icon-add {
  color: #42b983;
  padding: 5px 15px;
  border-radius: 5px;
}
.navbar-blank {
  width: 49px;
}
</style>
