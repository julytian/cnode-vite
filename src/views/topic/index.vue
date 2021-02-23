<template>
  <nav-header title="主题" :topic-id="isSelf ? topic.id :''">
    <template v-if="token" #collect>
      <van-icon
        name="like"
        size="20"
        :color="topic.is_collect ? '#80bd01' : '#000000'"
        @click="toggleCollect(topic.is_collect)"
      />
    </template>
  </nav-header>
  <h2 class="topic-title">{{ topic.title }}</h2>
  <van-skeleton title avatar :row="5" :loading="!topic.id" class="skeleton-top">
    <topic-info :topic="topic"></topic-info>
    <section
      class="markdown-body topic-content van-hairline--bottom"
      v-html="topic.content"
    ></section>
  </van-skeleton>
  <Suspense>
    <template #default>
      <topic-reply :topic="topic"></topic-reply>
    </template>
    <template #fallback>
      <van-skeleton title :row="5" class="skeleton-top"></van-skeleton>
    </template>
  </Suspense>
  <back-top></back-top>
</template>

<script lang="ts">
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  nextTick,
  onActivated,
} from 'vue';
import { Skeleton, ImagePreview, Icon } from 'vant';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import NavHeader from '@/components/nav-header.vue';
import * as Types from '@/store/action-types';
import { IGlobalState } from '@/store';

import TopicInfo from './topic-info.vue';
import { apiAddTopicCollect, apiDelTopicCollect } from '@/api/topic';

function previewImage() {
  nextTick(() => {
    const imgs = document.querySelectorAll('.markdown-body img');
    const images: string[] = [];
    imgs.forEach((img, index) => {
      let url = img.getAttribute('src') as string;
      if (!url.startsWith('http')) {
        url = `https:${url}`;
      }
      images.push(url);
      img.addEventListener('click', () => {
        ImagePreview({
          images,
          startPosition: index,
          closeable: true,
          teleport: 'body',
        });
      });
    });
  });
}

export default defineComponent({
  name: 'TopicPage',
  components: {
    [Skeleton.name]: Skeleton,
    [Icon.name]: Icon,
    NavHeader,
    TopicInfo,
    TopicReply: defineAsyncComponent(
      () => import(/* webpackChunkName: "topic-reply" */ './topic-reply.vue')
    ),
    BackTop: defineAsyncComponent(
      () =>
        import(/* webpackChunkName: "backtop" */ '@/components/back-top.vue')
    ),
  },
  setup() {
    const route = useRoute();
    const store = useStore<IGlobalState>();
    const topic = computed(() => store.state.topic.topic);
    const token = computed(() => store.state.user.userInfo.token);
    const isSelf = computed(() => store.state.topic.topic.author_id === store.state.user.userInfo.userId);
    onActivated(async () => {
      const id = route.params.id as string;
      if (!topic.value.id || (topic.value.id !== id)) {
        await store.dispatch(
          `topic/${Types.SET_TOPIC_DETAIL}`,
          { id }
        );
      }
      previewImage();
    });
    const toggleCollect = async (is_collect: boolean) => {
      const id = route.params.id as string;
      if (is_collect) {
        const res:any = await apiDelTopicCollect(token.value, id);
        if (res.success) {
          topic.value.is_collect = false;
        }
      } else {
        const res:any = await apiAddTopicCollect(token.value, id);
        if (res.success) {
          topic.value.is_collect = true;
        }
      }
    };
    return {
      topic,
      token,
      toggleCollect,
      isSelf,
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
.icon-font {
  margin-right: $gap * 3;
}
</style>
