<template>
  <van-skeleton title avatar :row="10" :loading="skeletonLoading" class="skeleton-top">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-for="topic in topics" :key="topic.id">
        <topic-item :topic="topic" @click="goDetail(topic)"></topic-item>
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
    const finished = computed(() => store.state.topics.finished);
    const loading = ref(false);
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
      if (topics.value.length === 0) {
        await store.dispatch(`topics/${Types.SET_TOPICS_INIT}`);
      }
      skeletonLoading.value = false;
    });
    const onLoad = async () => {
      if (!finished.value) {
        await store.dispatch(`topics/${Types.SET_TOPICS_LIST}`);
        loading.value = false;
      }
    };
    const goDetail = (item: ITopic) => {
      router.push(`/topic/${item.id}`);
      store.dispatch(`topic/${Types.SET_TOPIC_DETAIL}`, item.id);
    };
    return {
      skeletonLoading,
      topics,
      finished,
      loading,
      onLoad,
      goDetail,
    };
  },
});
</script>
