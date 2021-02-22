<template>
  <section class="nav-menu">
    <nav-user></nav-user>
    <section class="nav-menu-list">
      <a
        class="icon-quanbu iconfont nav-menu-item"
        @click="goPage('/list?tab=all')"
        >全部</a
      >
      <a
        class="icon-hao iconfont nav-menu-item"
        @click="goPage('/list?tab=good')"
        >精华</a
      >
      <a
        class="icon-fenxiang iconfont nav-menu-item"
        @click="goPage('/list?tab=share')"
        >分享</a
      >
      <a
        class="icon-wenda iconfont nav-menu-item"
        @click="goPage('/list?tab=ask')"
        >问答</a
      >
      <a
        class="icon-zhaopin iconfont nav-menu-item"
        @click="goPage('/list?tab=job')"
        >招聘</a
      >
      <a
        class="icon-tianjia iconfont nav-menu-item"
        @click="goPage('/list?tab=dev')"
        >测试</a
      >
      <a
        class="icon-xiaoxi iconfont nav-menu-item line"
        @click="goPage('/message')"
        >消息</a
      >
      <a class="icon-about iconfont nav-menu-item" @click="goPage('/about')"
        >关于</a
      >
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import NavUser from '@/components/nav-user.vue';

export default defineComponent({
  name: 'NavMenu',
  components: {
    NavUser,
  },
  emits: ['hideMenu'],
  setup(props, context) {
    const router = useRouter();
    const goPage = (url: string) => {
      context.emit('hideMenu');
      router.push(url);
    };
    return {
      goPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100vh;
  width: 200px;
  background-color: #fff;
  color: $color31;
}
.nav-menu-list {
  margin: 0 24px;
  border-top: 1px solid #d4d4d4;
  overflow: hidden;
  padding-top: 9%;
}
.nav-menu-item {
  display: block;
  font-size: 14px;
  padding: 9% 0;
  text-align: left;
  text-indent: 1px;
  line-height: 15px;
  color: #313131;
  font-weight: 700;
  &:last-child {
    margin-bottom: 50px;
  }
  &:before {
    color: #2c3e50;
  }
  &.line {
    border-top: 1px solid #d4d4d4;
  }
}
</style>
