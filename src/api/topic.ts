import axios from './axios';

/**
 * 获取主题详情
 * @param id 主题id
 */
export function apiGetTopicDetail<T>(id: string) {
  return axios.get<T, T>(`/topic/${id}`);
}