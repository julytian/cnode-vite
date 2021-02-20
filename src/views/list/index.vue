<template>
  <nav-header></nav-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavHeader from '@/components/nav-header.vue'

export default defineComponent({
  name: 'ListPage',
  components: {
    NavHeader,
  }
});
</script>

<style lang="scss" scoped>

</style>
