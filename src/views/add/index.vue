<template>
  <nav-header :title="title"></nav-header>
  <div class="d-flex align-items-center van-hairline--bottom add-hd">
    <span>选择分类：</span>
    <div class="flex-1">
      <van-dropdown-menu>
        <van-dropdown-item v-model="topic.tab" :options="topic.options" />
      </van-dropdown-menu>
    </div>
    <div class="submit-btn" @click="submit">{{ btnText }}</div>
  </div>
  <div class="add-title van-hairline--bottom">
    <van-field
      v-model.trim="topic.title"
      clearable
      maxlength="100"
      placeholder="标题，字数10字以上"
    />
  </div>
  <div class="add-content">
    <van-field
      v-model="topic.content"
      rows="20"
      type="textarea"
      placeholder="回复支持Markdown语法,请注意标记代码"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onActivated, reactive, ref } from "vue";
import { DropdownMenu, DropdownItem, Field, Toast } from "vant";
import NavHeader from "@/components/nav-header.vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";
import { apiAddTopics, apiUpdateTopics } from "@/api/add";
import { useRoute, useRouter } from "vue-router";
import * as Types from "@/store/action-types";
import { apiGetTopicDetail } from "@/api/topic";

export default defineComponent({
  name: "AddPage",
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Field.name]: Field,
    NavHeader,
  },
  setup() {
    const store = useStore<IGlobalState>();
    const router = useRouter();
    const title = ref("");
    const topicId = useRoute().params?.id as string;
    const btnText = topicId ? "更新" : "发布";
    const topic = reactive({
      tab: "dev",
      options: [
        { text: "测试", value: "dev" },
        { text: "分享", value: "share" },
        { text: "问答", value: "ask" },
        { text: "招聘", value: "job" },
      ],
      title: "",
      content: "",
    });
    onActivated(() => {
      if (topicId) {
        title.value = "编辑主题";
        apiGetTopicDetail<ITopicDetail>(topicId, false).then(
          (res: ITopicDetail) => {
            topic.title = res.title;
            topic.content = res.content;
            topic.tab = res.tab;
          }
        );
      } else {
        title.value = "添加主题";
      }
    });
    const submit = async () => {
      if (!topic.title) {
        Toast("标题不能为空");
        return;
      }
      if (!topic.content) {
        Toast("内容不能为空");
        return;
      }
      const params: IAddTopicParams = {
        accesstoken: store.state.user.userInfo.token,
        title: topic.title,
        tab: topic.tab as TTopicTab,
        content: topic.content,
      };
      try {
        if (topicId) {
          params.topic_id = topicId;
          const res = await apiUpdateTopics<IAddTopicResponse>(params);
          if (res.success) {
            Toast("更新成功");
            store.dispatch(`topic/${Types.SET_TOPIC_DETAIL}`, { id: topicId });
            router.back();
          }
        } else {
          const res = await apiAddTopics<IAddTopicResponse>(params);
          if (res.success) {
            Toast("发布成功");
            router.replace(`/list?tab=${topic.tab}`);
          }
        }
      } catch (error) {
        Toast(topicId ? "更新失败" : "发布失败");
      }
    };
    return {
      topic,
      submit,
      title,
      btnText,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-hd {
  padding: $gap * 2;
}
.submit-btn {
  color: $white;
  background-color: $color01;
  padding: 8px $gap * 3;
  border-radius: $gap;
  margin-left: $gap * 2;
}
::v-deep(.van-dropdown-menu__bar) {
  height: 30px !important;
}
.add-title ::v-deep(.van-cell) {
  padding: $gap * 2;
}
.add-content {
  margin: $gap * 2;
  ::v-deep(.van-cell) {
    border: $border;
  }
}
</style>
