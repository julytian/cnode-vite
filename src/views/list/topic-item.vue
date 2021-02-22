<template>
  <div class="topic van-hairline--bottom">
    <h3
      class="text-ellipsis"
      :class="getTabInfo(topic.tab, topic.good, topic.top, true)"
      :title="getTabInfo(topic.tab, topic.good, topic.top, false)"
    >
      {{ topic.title }}
    </h3>
    <div class="d-flex align-items-center content">
      <img class="avatar" v-lazy="topic.author.avatar_url" alt="用户头像" />
      <div class="flex-1">
        <p class="info">
          <span class="name">{{ topic.author.loginname }}</span>
          <span class="status" v-if="topic.reply_count > 0">
            <b>{{ topic.reply_count }}</b>
            / {{ topic.visit_count }}
          </span>
        </p>
        <p class="info">
          <time>{{ getLastTimeStr(topic.create_at, true) }}</time>
          <time>{{ getLastTimeStr(topic.last_reply_at, true) }}</time>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getLastTimeStr, getTabInfo} from '@/utils/util'

export default defineComponent({
  name: 'TopicItem',
  props: {
    topic: {
      type: Object as PropType<ITopic>,
      default: {},
      required: true,
    }
  },
  methods: {
    getTabInfo(tab: TTopicTab, good: boolean, top: boolean, isClass: boolean) {
      return getTabInfo(tab, good, top, isClass);
    },
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
  }
})
</script>

<style lang="scss" scoped>
.topic {
  padding: $gap * 2 $gap * 3;
}
h3 {
  color: $title;
  font-size: $font-title;
  line-height: 1.5;
  &:before {
    content: attr(title);
    margin-right: $gap * 2;
    color: $white;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: 400;
    border-radius: $radius;
    text-align: center;
    vertical-align: middle;
  }
  &.top:before {
    background: #e74c3c;
  }
  &.ask:before {
    background: #3498db;
  }
  &.good:before {
    background: #e67e22;
  }
  &.job:before {
    background: #9b59b6;
  }
  &.share:before {
    background: #1abc9c;
  }
  &.test:before {
    background: #80bd01;
  }
}
.content {
  padding-top: $gap;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: $gap * 2;
  border: 1px solid #f3f3f3;
  background-color: $light;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
  color: $text;
  font-size: 12px;
  b {
    font-size: 14px;
    color: $color83;
  }
}
</style>