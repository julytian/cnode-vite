import axios from './axios';

/**
 * @param params 请求参数
 */
export function apiGetTopics<T>(page: number, tab: TTopicTab, limit = 20, mdrender = true) {
  return axios.get<T, T>(`/topics?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`);
}