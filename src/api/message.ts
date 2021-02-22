import axios from './axios';

/**
 * 获取已读和未读消息
 * @param accesstoken 用户的 accesstoken
 */
export function apiGetMessages<T>(accesstoken: string) {
  return axios.get<T, T>(`/messages?accesstoken=${accesstoken}`);
}