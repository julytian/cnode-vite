<template>
  <section class="d-flex recent" @click="goDetail(item)">
    <img class="recent-avatar" v-lazy="item.author.avatar_url" @click.stop="goUser(item)"/>
    <div class="d-flex flex-column justify-content-between flex-1 recent-wrap">
      <div class="text-ellipsis recent-title">{{ item.title }}</div>
      <div class="d-flex align-items-center justify-content-between">
        <span class="recent-loginname">{{ item.author.loginname }}</span>
        <span class="recent-time">{{
          getLastTimeStr(item.last_reply_at, true)
        }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { getLastTimeStr } from '@/utils/util';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { useRouter } from 'vue-router';
import * as Types from '@/store/action-types';

export default defineComponent({
  name: 'RecentItem',
  props: {
    item: {
      type: Object as PropType<IUserRecent>,
      default: {},
      required: true,
    },
  },
  methods: {
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
  },
  setup() {
    const store = useStore<IGlobalState>();
    const router = useRouter();
    const goDetail = (item: IUserRecent) => {
      router.push(`/topic/${item.id}`);
      store.dispatch(`topic/${Types.SET_TOPIC_DETAIL}`, { id: item.id });
    };
    const goUser = (item: IUserRecent) => {
      router.push(`/user/${item.author.loginname}`);
    }
    return {
      goDetail,
      goUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent {
  padding: $gap * 3;
  background-color: $white;
  &:not(:first-of-type) {
    border-top: 1px solid $light;
  }
}
.recent-wrap {
  width: 0;
}
.recent-avatar {
  width: 45px;
  height: 45px;
  margin-right: $gap * 2;
  border-radius: 50%;
  background-color: $light;
}
.recent-title {
  font-size: 18px;
  font-weight: bold;
  color: $color31;
}
.recent-loginname {
  color: $color31;
}
.recent-time {
  font-size: $font-info;
  color: $color01;
}
</style>
