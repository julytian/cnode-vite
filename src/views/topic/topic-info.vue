<template>
  <section class="d-flex align-items-center topic-info">
    <img v-if="topic.author" class="topic-info-avatar" v-lazy="topic.author.avatar_url" />
    <div class="flex-1">
      <span v-if="topic.author">{{ topic.author.loginname }}</span>
      <time> 发布于：{{ getLastTimeStr(topic.create_at, true) }} </time>
    </div>
    <div class="topic-info-wrap">
      <span
        class="topic-info-tag"
        :class="getTabInfo(topic.tab, topic.good, topic.top, true)"
        v-text="getTabInfo(topic.tab, topic.good, topic.top, false)"
      >
      </span>
      <span class="topic-info-name">{{ topic.visit_count }}次浏览</span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getTabInfo, getLastTimeStr } from '@/utils/util';

export default defineComponent({
  name: 'TopicInfo',
  props: {
    topic: {
      type: Object as PropType<ITopicDetail>,
      default: {},
      required: true,
    },
  },
  methods: {
    getTabInfo(tab: TTopicTab, good: boolean, top: boolean, isClass: boolean) {
      return getTabInfo(tab, good, top, isClass);
    },
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
  },
})
</script>

<style lang="scss" scoped>
.topic-info {
  padding: 0 15px;
  color: #34495e;
  font-size: 12px;
  span,
  time {
    display: block;
    padding: $gap 0;
  }
}
.topic-info-avatar {
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: $light;
}
.topic-info-wrap {
  text-align: right;
}
.topic-info-tag {
  padding: 5px 6px;
  font-size: 10px;
  font-weight: 400;
  border-radius: 4px;
  background-color: #e7e7e7;
  color: $white;
  text-align: center;
  vertical-align: middle;
  &.top {
    background: #e74c3c;
  }
  &.ask {
    background: #3498db;
  }
  &.good {
    background: #e67e22;
  }
  &.job {
    background: #9b59b6;
  }
  &.share {
    background: #1abc9c;
  }
  &.test {
    background: #80bd01;
  }
}
.topic-info-name {
  display: block;
  padding: $gap 0;
}
</style>