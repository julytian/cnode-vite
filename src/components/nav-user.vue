<template>
  <div class="user-info">
    <div v-if="!userInfo.loginname" class="btn-login" @click="goLogin">
      登录
    </div>
    <div v-else class="d-flex align-items-center" @click="goUser">
      <img class="user-avatar" v-lazy="userInfo.avatar_url" />
      <span
        class="flex-1 text-ellipsis username"
        v-text="userInfo.loginname"
      ></span>
      <img class="icon-next" src="../assets/images/go_next_icon.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { IGlobalState } from '@/store';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavUser',
  emits: ['goPage'],
  setup(props, context) {
    const store = useStore<IGlobalState>();
    const route = useRoute();
    const userInfo = computed(() => store.state.user.userInfo);
    const goLogin = () => {
      context.emit('goPage', `/login?redirect=${encodeURIComponent(route.path)}`)
    };
    const goUser = () => {
      context.emit('goPage', `/user/${userInfo.value.loginname}`)
    };
    return {
      userInfo,
      goLogin,
      goUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-info {
  padding: $gap * 3;
  font-size: 15px;
  color: $color31;
}
.btn-login {
  display: flex;
  align-items: center;
  margin: 8px 9px;
  height: 24px;
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('@/assets/images/login_icon.png') no-repeat left center;
    background-size: 100%;
    margin-right: $gap * 2;
  }
}
.user-avatar {
  display: block;
  width: 40px;
  height: 40px;
  background-color: $light;
  border-radius: 20px;
}
.username {
  margin-left: $gap * 2;
  width: 85px;
  font-size: $font-info;
}
.icon-next {
  width: 6px;
  height: 10px;
}
</style>
