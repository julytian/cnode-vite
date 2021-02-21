<template>
  <nav-header></nav-header>
  <topic-list></topic-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavHeader from '@/components/nav-header.vue'
import TopicList from './topic-list.vue'

export default defineComponent({
  name: 'ListPage',
  components: {
    NavHeader,
    TopicList,
  }
});
</script>

<style lang="scss" scoped>

</style>
