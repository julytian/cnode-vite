import axios from './axios';

/**
 * 获取主题详情
 * @param id 主题id
 */
export function apiGetTopicDetail<T>(id: string) {
  return axios.get<T, T>(`/topic/${id}`);
}

/**
 * 为评论点赞
 * @param accesstoken 主题accesstoken
 * @param reply_id 主题reply_id
 */
export function apiHandleReplyUps<T>(accesstoken: string, replyId: string) {
  return axios.post<T, T>(`/reply/${replyId}/ups`, { accesstoken });
}