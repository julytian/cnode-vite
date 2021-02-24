<template>
  <section class="reply">
    <div class="van-hairline--surround">
      <van-field
        v-model="content"
        rows="8"
        type="textarea"
        :border="false"
        placeholder="回复支持Markdown语法,请注意标记代码"
      />
    </div>
    <div class="reply-btn" @click="submit">确定</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Field, Toast } from 'vant';
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { apiAddTopicReplies } from '@/api/topic';
import { useRoute } from 'vue-router';
import { SET_TOPIC_DETAIL } from '@/store/action-types';

export default defineComponent({
  name: 'AddReply',
  components: {
    [Field.name]: Field,
  },
  props: {
    topic: {
      type: Object as PropType<ITopicDetail>,
      default: {},
      required: true,
    },
    replyId: {
      type: String,
      default: '',
    },
    replyTo: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['hideItemReply', 'onReload'],
  setup(props, { emit }) {
    const store = useStore<IGlobalState>();
    const route = useRoute();
    const content = ref('');
    const { topic, replyTo, replyId, show } = props;
    const { token } = store.state.user.userInfo;
    if (replyTo) {
      content.value = `@${replyTo}`;
    }
    const submit = async () => {
      if (!content.value) {
        Toast('回复内容不能为空');
        return;
      }
      const params: IAddTopicRepliesParams = {
        topic_id: route.params.id as string,
        accesstoken: token,
        content: content.value,
      };
      if (replyId) {
        params.reply_id = replyId;
      }
      try {
        const res: IAddTopicRepliesResponse = await apiAddTopicReplies(params);
        if (res.success) {
          store.dispatch(`topic/${SET_TOPIC_DETAIL}`, { id: topic.id, reload: true, token })
        }
        content.value = '';
        if (show) {
          emit('hideItemReply');
        }
      } catch (error) {}
    };
    return {
      content,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.reply {
  margin: 0 $gap * 3;
}
.reply-btn {
  margin-top: $gap * 2;
  margin-bottom: $gap * 2;
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
