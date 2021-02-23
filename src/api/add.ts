import axios from './axios';

/**
 *  新建主题
 * @param accesstoken 用户的 accessToken
 * @param title 标题
 * @param tab 目前有 ask share job dev
 * @param content 主题内容
 */
export function apiAddTopics<T>(params: IAddTopicParams) {
  return axios.post<T, T>('/topics', params);
}
/**
 *  编辑主题
 * @param accesstoken 用户的 accessToken
 * @param title 标题
 * @param tab 目前有 ask share job dev
 * @param content 主题内容
 * @param topic_id 主题id
 */
export function apiUpdateTopics<T>(params: IAddTopicParams) {
  return axios.post<T, T>('/topics/update', params);
}
