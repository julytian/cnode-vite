<template>
  <nav-header title="关于"></nav-header>
  <dl class="about-info">
    <dt>关于项目</dt>
    <dd>该项目是基于Cnodejs的api，采用vue3+vite重写的webapp。</dd>

    <dt>预览地址</dt>
    <dd>
      <a href="https://cnode-vite.vercel.app">https://cnode-vite.vercel.app</a>
    </dd>

    <dt>源码地址</dt>
    <dd>
      <a href="https://github.com/julytian/cnode-vite.git">
        https://github.com/julytian/cnode-vite.git</a
      >
    </dd>

    <dt>意见反馈</dt>
    <dd>
      <a href="https://github.com/julytian/cnode-vite/issues">
        发表意见或者提需求</a
      >
    </dd>

    <dt>当前版本</dt>
    <dd>V1.0</dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavHeader from '@/components/nav-header.vue';

export default defineComponent({
  name: 'AboutPage',
  components: {
    NavHeader,
  },
});
</script>

<style lang="scss" scoped>
.about-info {
  height: 95vh;
  padding: $gap * 2 $gap * 3;
  line-height: 1.5;
  background-color: #f7f7f7;
  dt {
    padding: 1em 0;
    font-weight: bold;
    color: #2c3e50;
    font-size: $font-title;
    line-height: 1.5;
  }
  dd {
    padding-bottom: $gap * 3;
    font-size: 14px;
    border-bottom: 1px solid $light;
  }
  a {
    color: $color83;
  }
}
</style>
