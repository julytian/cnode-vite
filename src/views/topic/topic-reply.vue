<template>
  <h3 class="topic-reply van-hairline--bottom van-hairline--top" v-if="topic.reply_count >= 0">
    <strong>{{ topic.reply_count }}</strong> 回复
  </h3>
  <section class="reply-list">
    <template v-for="item in topic.replies" :key="item.id">
      <div class="d-flex align-items-center reply-user van-hairline--top">
        <img class="reply-avatar" v-lazy="item.author.avatar_url" />
        <div class="d-flex align-items-center flex-1">
          <div class="flex-1 reply-info-content">
            {{ item.author.loginname }} 发布于：{{
              getLastTimeStr(item.create_at, true)
            }}
          </div>
          <span
            class="iconfont reply-icon"
            :class="{ uped: isUps(item) }"
            @click="handleReplyUps(item)"
            >&#xe608;</span
          >
          <span class="reply-ups">{{ item.ups.length }}</span>
          <span class="iconfont reply-icon" @click="addReply(item.id)"
            >&#xe609;</span
          >
        </div>
      </div>
      <div class="markdown-body reply-content" v-html="item.content"></div>
      <template v-if="userId && curReplyId === item.id">
        <reply
          v-model:topic="topic"
          :reply-id="item.id"
          :reply-to="item.author.loginname"
          :show="!!curReplyId"
          @hide-item-reply="hideItemReply"
        ></reply>
      </template>
    </template>
    <template v-if="topic.id && userId">
      <reply v-model:topic="topic" :key="Math.random()"></reply>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { getLastTimeStr } from '@/utils/util';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { apiHandleReplyUps } from '@/api/topic';
import Reply from './reply.vue';

interface IReplyUpsResponse {
  success: boolean;
  action: string;
}

export default defineComponent({
  name: 'TopicReply',
  props: {
    topic: {
      type: Object as PropType<ITopicDetail>,
      default: {},
      required: true,
    },
  },
  components: {
    Reply,
  },
  methods: {
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
  },
  setup() {
    const store = useStore<IGlobalState>();
    const router = useRouter();
    const route = useRoute();
    const curReplyId = ref('');
    const { token, userId } = store.state.user.userInfo;
    const handleReplyUps = async (reply: ITopicReply) => {
      if (!token) {
        Toast('你还没登录~~');
        router.push(`/login?redirect=${encodeURIComponent(route.path)}`);
        return;
      }
      try {
        const res = await apiHandleReplyUps<IReplyUpsResponse>(token, reply.id);
        if (res.action === 'down') {
          const index = reply.ups.findIndex((i) => i === userId);
          reply.ups.splice(index, 1);
        } else {
          reply.ups.push(userId);
        }
      } catch (error) {
        Toast('点赞失败');
      }
    };
    const isUps = (reply: ITopicReply) => {
      return reply.ups.findIndex((i) => i === userId) >= 0;
    };
    const hideItemReply = () => {
      curReplyId.value = '';
    }
    const addReply = (id: string) => {
      if (id === curReplyId.value) {
        hideItemReply()
      } else {
        curReplyId.value = id;
      }
      if (!token) {
        Toast('你还没登录~~');
        router.push(`/login?redirect=${encodeURIComponent(route.path)}`);
        return;
      }
    };
    return {
      handleReplyUps,
      isUps,
      userId,
      curReplyId,
      addReply,
      hideItemReply,
    };
  },
});
</script>

<style lang="scss" scoped>
.topic-reply {
  padding: $gap * 3;
  color: $title;
  font-size: 16px;
  line-height: 1.5;
}
strong {
  color: $color83;
}
.reply-list {
  padding-bottom: $gap * 3;
}
.reply-user {
  padding: $gap * 2;
}
.reply-avatar {
  display: inline-block;
  width: $gap * 6;
  height: $gap * 6;
  margin-right: $gap * 2;
  border-radius: 50%;
  background-color: $light;
}

.reply-info-content {
  color: $color62;
}
.reply-icon {
  font-size: 26px;
  &.uped {
    color: $color01;
  }
}
.reply-content {
  padding: 0 $gap * 3;
}
.reply-ups {
  margin: 0 $gap;
}
</style>
