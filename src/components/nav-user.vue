<template>
  <div class="user-info">
    <div class="btn-login">登录</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavUser',

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
    background: url("@/assets/images/login_icon.png") no-repeat left center;
    background-size: 100%;
    margin-right: $gap * 2;
  }
}
</style>
