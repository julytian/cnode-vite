<template>
  <h3 class="topic-reply van-hairline--bottom" v-if="topic.reply_count >= 0">
    <strong>{{ topic.reply_count }}</strong> 回复
  </h3>
  <section class="reply-list">
    <template v-for="item in topic.replies" :key="item.id">
      <div class="d-flex align-items-center reply-user van-hairline--top">
        <img class="reply-avatar" v-lazy="item.author.avatar_url" />
        <div class="d-flex align-items-center flex-1">
          <div class="flex-1 reply-info-content">
            {{ item.author.loginname }} 发布于:{{
              getLastTimeStr(item.create_at, true)
            }}
          </div>
          <span
            class="iconfont reply-icon"
            :class="{ uped: item.ups.length > 0 }"
            >&#xe608;</span
          >
          <span class="reply-ups">{{ item.ups.length }}</span>
          <span class="iconfont reply-icon">&#xe609;</span>
        </div>
      </div>
      <div class="markdown-body reply-content" v-html="item.content"></div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { getLastTimeStr } from '@/utils/util';

export default defineComponent({
  name: 'TopicReply',
  props: {
    topic: {
      type: Object as PropType<ITopicDetail>,
      default: {},
      required: true,
    },
  },
  methods: {
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
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
  border-radius: $gap * 2;
  background-color: $light;
}

.reply-info-content {
  color: $color62;
}
.reply-icon {
  font-size: 26px;
}
.reply-content {
  padding: 0 $gap * 3;
}
.reply-ups {
  margin: 0 $gap;
}
</style>
