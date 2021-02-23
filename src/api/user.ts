import axios from './axios';

/**
 * 获取AccessToken
 * @param accesstoken 用户的 accessToken
 */
export function apiGetAccessToken<T>(accesstoken: string) {
  return axios.post<T, T>('/accesstoken', { accesstoken });
}
/**
 * 获取用户详情
 * @param loginname 用户的 loginname
 */
export function apiGetUserInfo<T>(loginname: string) {
  return axios.get<T, T>(`/user/${loginname}`);
}

/**
 * 获取用户所收藏的主题
 * @param loginname 用户的 loginname
 */
export function apiGetTopicCollect<T>(loginname: string) {
  return axios.get<T, T>(`/topic_collect/${loginname}`);
}
