<template>
  <nav-header :title="title"></nav-header>
  <topic-list></topic-list>
  <back-top></back-top>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import NavHeader from '@/components/nav-header.vue'
import TopicList from './topic-list.vue'
import { tabs } from '@/utils/constant';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';

export default defineComponent({
  name: 'ListPage',
  components: {
    NavHeader,
    TopicList,
    BackTop: defineAsyncComponent(() => import(/* webpackChunkName: "backtop" */ '@/components/back-top.vue')),
  },
  setup() {
    const store = useStore<IGlobalState>()
    const title = computed(() => tabs[store.state.topics.tab])
    return {
      title
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
