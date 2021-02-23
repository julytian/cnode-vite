import { IGlobalState } from '@/store';
import { useStore } from 'vuex';
import axios from './axios';

/**
 * 获取主题详情
 * @param id 主题id
 */
export function apiGetTopicDetail<T>(id: string) {
  const store = useStore<IGlobalState>();
  const token = store.state.user.userInfo.token;
  let url = `/topic/${id}`;
  if (token) {
    url += `?accesstoken=${token}`;
  }
  return axios.get<T, T>(url);
}

/**
 * 新建评论
 * @param params 评论参数对象
 * {
 *  accesstoken: '',
 *  content: '',
 *  reply_id: '',
 *  topic_id: ''
 * }
 */
export function apiAddTopicReplies<T>(params: IAddTopicRepliesParams) {
  return axios.post<T, T>(`/topic/${params.topic_id}/replies`, params);
}

/**
 * 为评论点赞
 * @param accesstoken 用户accesstoken
 * @param reply_id 主题id
 */
export function apiHandleReplyUps<T>(accesstoken: string, replyId: string) {
  return axios.post<T, T>(`/reply/${replyId}/ups`, { accesstoken });
}

/**
 * 收藏主题
 * @param accesstoken 用户accesstoken
 * @param topic_id 主题id
 */
export function apiAddTopicCollect<T>(accesstoken: string, topic_id: string) {
  return axios.post<T, T>('/topic_collect/collect', { accesstoken, topic_id });
}

/**
 * 取消主题
 * @param accesstoken 用户accesstoken
 * @param topic_id 主题id
 */
export function apiDelTopicCollect<T>(accesstoken: string, topic_id: string) {
  return axios.post<T, T>('/topic_collect/de_collect', { accesstoken, topic_id });
}
