<template>
  <nav-header title="用户信息"></nav-header>
  <section class="d-flex flex-column align-items-center userinfo">
    <img class="userinfo-avatar" v-lazy="user.avatar_url" />
    <p class="userinfo-name">{{ user.loginname }}</p>
    <div class="d-flex align-items-center justify-content-around w-100">
      <span
        v-if="user.create_at"
        v-text="getLastTimeStr(user.create_at, false)"
      ></span>
      <span v-if="user.score" class="userinfo-score"
        >积分: {{ user.score }}</span
      >
    </div>
  </section>
  <van-tabs v-model:active="activeName" swipeable sticky>
    <van-tab title="最近回复" name="replies">
      <van-empty
        v-if="user.recent_replies && user.recent_replies.length === 0"
        description="暂无数据"
      />
      <template v-else>
        <template v-for="item in user.recent_replies" :key="item.id">
          <recent-item :item="item"></recent-item>
        </template>
      </template>
    </van-tab>
    <van-tab title="最新发布" name="topics">
      <van-empty
        v-if="user.recent_topics && user.recent_topics.length === 0"
        description="暂无数据"
      />
      <template v-else>
        <template v-for="item in user.recent_topics" :key="item.id">
          <recent-item :item="item"></recent-item>
        </template>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import NavHeader from '@/components/nav-header.vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast, Tab, Tabs, Empty } from 'vant';
import { apiGetUserInfo } from '@/api/user';
import { getLastTimeStr } from '@/utils/util';
import RecentItem from './recent-item.vue';

export default defineComponent({
  name: 'UserPage',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Empty.name]: Empty,
    NavHeader,
    RecentItem,
  },
  methods: {
    getLastTimeStr(time: string, friendly: boolean) {
      return getLastTimeStr(time, friendly);
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = ref({});
    const activeName = ref('replies');
    onMounted(() => {
      getUserInfo();
    });
    const getUserInfo = async () => {
      const loginname = route.params?.loginname as string;
      if (!loginname) {
        Toast('缺少用户名参数');
        router.replace('/');
        return;
      }
      const res = await apiGetUserInfo<IUserInfo>(loginname);
      user.value = res;
    };
    watch(() => route.params, () => {
      const loginname = route.params?.loginname as string;
      if (loginname) {
        getUserInfo()
      }
    });
    return {
      activeName,
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
.userinfo {
  background-color: $colore7;
  height: 180px;
  color: $color31;
}
.userinfo-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: $gap * 3;
  background-color: $light;
}
.userinfo-name {
  margin-top: $gap * 2;
  margin-bottom: $gap * 2;
}

.userinfo-score {
  color: $color01;
}
</style>
