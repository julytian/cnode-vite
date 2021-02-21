<template>
  <nav-header :show-menu="false" title="登录"></nav-header>
  <section class="login-info">
    <input
      v-model.trim="token"
      class="login-input"
      type="text"
      placeholder="Access Token"
      maxlength="36"
    />
    <div class="login-btn" @click="submit">登录</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavHeader from '@/components/nav-header.vue';
import { Toast } from 'vant';
import { apiGetAccessToken } from '@/api/user';
import { useStore } from 'vuex';
import { SET_USER_INFO } from '@/store/action-types';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  components: {
    NavHeader,
  },
  setup() {
    const token = ref('');
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const url = route.query.redirect as string;
    const submit = async () => {
      if (!token.value) {
        Toast('令牌格式错误,应为36位UUID字符串');
        return;
      }
      try {
        const res = await apiGetAccessToken<IUser>(token.value);
        const user = {
          loginname: res.loginname,
          avatar_url: res.avatar_url,
          userId: res.id,
          token: token.value,
        };
        window.sessionStorage.user = JSON.stringify(user);
        store.dispatch(`user/${SET_USER_INFO}`, user);
        const redirect = decodeURIComponent(url || '/');
        router.replace({
          path: redirect,
        });
        console.log('token', res);
      } catch (error) {
        // 
      }
    };
    return {
      token,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-info {
  padding: $gap * 8 $gap * 3;
  background-color: $white;
}
.login-input {
  width: 100%;
  display: block;
  margin-top: $gap * 3;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid $color83;
  font-size: $font-content;
  color: $color31;
}
.login-btn {
  margin-top: $gap * 3;
  height: 42px;
  line-height: 42px;
  border-radius: 3px;
  color: $white;
  font-size: $font-title;
  background-color: $color83;
  border: none;
  text-align: center;
  vertical-align: middle;
}
</style>
