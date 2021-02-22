<template>
  <teleport to="body">
    <div class="iconfont icon-top" v-show="show" @click="goTop">&#xe611;</div>
  </teleport>
</template>

<script lang="ts">
import { backTop } from '@/utils/util';
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'BackTop',
  setup() {
    const show = ref(false);
    const handleScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        show.value = true;
      } else {
        show.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    const goTop = () => {
      backTop();
    };
    return {
      show,
      goTop,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-top {
  position: fixed;
  right: 10px;
  bottom: 80px;
  font-size: 50px;
  z-index: 2;
  color: $color83;
}
</style>
