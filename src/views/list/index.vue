<template>
  <nav-header></nav-header>
  <topic-list></topic-list>
  <back-top></back-top>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import NavHeader from '@/components/nav-header.vue'
import TopicList from './topic-list.vue'

export default defineComponent({
  name: 'ListPage',
  components: {
    NavHeader,
    TopicList,
    BackTop: defineAsyncComponent(() => import(/* webpackChunkName: "backtop" */ '@/components/back-top.vue')),
  }
});
</script>

<style lang="scss" scoped>

</style>
