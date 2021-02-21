<template>
  <van-skeleton title avatar :row="10" :loading="skeletonLoading" style="margin-top: 10px">
    <van-list
      v-model:loading="loading"
      :finished="!hasMore"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-for="topic in topics" :key="topic.id">
        <topic-item :topic="topic"></topic-item>
      </template>
    </van-list>
  </van-skeleton>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { List, Skeleton } from 'vant';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import * as Types from '@/store/action-types';
import TopicItem from './topic-item.vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'TopicList',
  components: {
    [List.name]: List,
    [Skeleton.name]: Skeleton,
    TopicItem,
  },
  setup() {
    const store = useStore<IGlobalState>();
    const router = useRouter();
    const route = useRoute();
    const topics = computed(() => store.state.topics.list);
    const hasMore = computed(() => store.state.topics.hasMore);
    const loading = computed(() => store.state.topics.loading);
    const skeletonLoading = ref(true);
    watch(
      () => route.query,
      async (query) => {
        if (query?.tab) {
          skeletonLoading.value = true;
          store.commit(`topics/${Types.SET_TOPICS_TAB}`, query.tab);
          await store.dispatch(`topics/${Types.SET_TOPICS_INIT}`);
          skeletonLoading.value = false;
        }
      }
    );
    onMounted(async () => {
      await store.dispatch(`topics/${Types.SET_TOPICS_INIT}`);
      skeletonLoading.value = false;
    });
    const onLoad = () => {
      if (hasMore.value) {
        store.dispatch(`topics/${Types.SET_TOPICS_LIST}`);
      }
    };
    return {
      skeletonLoading,
      topics,
      hasMore,
      loading,
      onLoad,
    };
  },
});
</script>
