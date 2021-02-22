<template>
  <nav-header title="消息"></nav-header>
  <van-tabs v-model:active="activeName" swipeable sticky>
    <van-tab title="已读消息" name="has_read_messages">
      <van-empty
        v-if="message.has_read_messages && message.has_read_messages.length === 0"
        description="暂无数据"
      />
      <template v-else>
        <template v-for="item in message.has_read_messages" :key="item.id">
          <message-item :item="item"></message-item>
        </template>
      </template>
    </van-tab>
    <van-tab title="未读消息" name="hasnot_read_messages">
      <van-empty
        v-if="message.hasnot_read_messages && message.hasnot_read_messages.length === 0"
        description="暂无数据"
      />
      <template v-else>
        <template v-for="item in message.hasnot_read_messages" :key="item.id">
          <message-item :item="item"></message-item>
        </template>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NavHeader from '@/components/nav-header.vue'
import { Tab, Tabs, Empty } from 'vant';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { apiGetMessages } from '@/api/message';
import MessageItem from './message-item.vue';

export default defineComponent({
  name: 'MessagePage',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Empty.name]: Empty,
    NavHeader,
    MessageItem,
  },
  setup() {
    const message = ref({})
    const activeName = ref('has_read_messages');
    const store = useStore<IGlobalState>()
    const { token } = store.state.user.userInfo
    onMounted(async () => {
      try {
        const res = await apiGetMessages<IMessage>(token)
        message.value = res;
        console.log('message', res);
      } catch (error) {
        
      }
    });
    return {
      message,
      activeName,
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
