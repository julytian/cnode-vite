<template>
  <section class="message markdown-body">
    <div class="d-flex">
      <img class="message-hd-avatar" v-lazy="item.author.avatar_url" />
      <p class="flex-1 message-hd-title">
        <span>{{ item.author.loginname }}</span>
        <span v-if="item.type === 'at'">在回复中@了您</span>
        <span v-if="item.type === 'reply'">回复了您的话题</span>
      </p>
      <span
        class="message-hd-time"
        v-text="getLastTimeStr(item.reply.create_at, true)"
      ></span>
    </div>
    <div class="message-reply" v-html="item.reply.content"></div>
    <router-link :to="{ name: 'Topic', params: { id: item.topic.id } }">
      <div class="message-topic">话题：{{ item.topic.title }}</div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { getLastTimeStr } from '@/utils/util';

export default defineComponent({
  name: 'MessageItem',
  props: {
    item: {
      type: Object as PropType<IMessage>,
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
.message {
  padding: $gap * 2;
  &:not(:first-of-type) {
    border-top: $border;
  }
}
.message-hd-avatar {
  width: 30px;
  height: 30px;
  margin-right: $gap * 2;
  border-radius: $gap * 2;
  background-color: $light;
}
.message-hd-title {
  color: $color31;
}
.message-hd-time {
  color: $color01;
  font-size: $font-info;
}
.message-reply {
  margin-bottom: $gap * 3;
}
.message-topic {
  padding: $gap;
  margin-bottom: $gap * 2;
  font-size: 18px;
  color: $title;
  line-height: 1.5;
  background-color: $colorf0;
  border-radius: $gap;
}
</style>
