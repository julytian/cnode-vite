<template>
  <nav-header title="主题"></nav-header>
  <h2 class="topic-title">{{ topic.title }}</h2>
  <van-skeleton title avatar :row="5" :loading="!topic.id" class="skeleton-top">
    <topic-info :topic="topic"></topic-info>
    <section
      class='markdown-body topic-content van-hairline--bottom'
      v-html="topic.content">
    </section>
  </van-skeleton>
  <Suspense>
    <template #default>
      <topic-reply :topic="topic"></topic-reply>
    </template>
    <template #fallback>
      <van-skeleton title :row="5" class="skeleton-top"></van-skeleton>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, onMounted } from 'vue';
import { Skeleton } from 'vant';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import NavHeader from '@/components/nav-header.vue';
import * as Types from '@/store/action-types';
import { IGlobalState } from '@/store';
import "@/assets/styles/github-markdown.scss";

import TopicInfo from './topic-info.vue';

export default defineComponent({
  name: 'TopicPage',
  components: {
    [Skeleton.name]: Skeleton,
    NavHeader,
    TopicInfo,
    TopicReply: defineAsyncComponent(() => import(/* webpackChunkName: "topic-reply" */ './topic-reply.vue')),
  },
  setup() {
    const route = useRoute();
    const store = useStore<IGlobalState>();
    const topic = computed(() => store.state.topic.topic);
    onMounted(() => {
      if (!topic.value.id) {
        store.dispatch(`topic/${Types.SET_TOPIC_DETAIL}`, route.params?.id);
      }
    });
    return {
      topic,
    };
  },
});
</script>

<style lang="scss" scoped>
.topic-title {
  padding: $gap;
  margin: $gap * 3;
  font-size: 18px;
  color: $title;
  line-height: 1.5;
  background-color: $colorf0;
  border-radius: $gap;
}
.topic-content {
  padding: $gap * 3;
  background: $white;
}
</style>
