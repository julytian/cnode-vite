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
import { linkUsers } from '@/utils/util';
import marked from 'marked';
import { useRoute } from 'vue-router';

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
  emits: ['hideItemReply'],
  setup(props, { emit }) {
    const store = useStore<IGlobalState>();
    const route = useRoute();
    const content = ref('');
    const { topic, replyTo, replyId, show } = props;
    const { token, loginname, avatar_url } = store.state.user.userInfo;
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
          console.log('xxxxxx', content.value);
          const linkUsersStr = linkUsers(content.value);
          const htmlText = marked(linkUsersStr);
          const replyContent = `<div class="markdown-text">${htmlText}</div>`;
          topic.replies.push({
            id: res.reply_id,
            author: {
              loginname,
              avatar_url,
            },
            content: replyContent,
            ups: [],
            create_at: `${new Date()}`,
            is_uped: false,
            reply_id: '',
          });
          console.log('topic xxxxxx', topic);
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
