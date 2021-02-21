import axios from './axios';

/**
 * 获取AccessToken
 * @param accesstoken 用户的 accessToken
 */
export function apiGetAccessToken<T>(accesstoken: string) {
  return axios.post<T, T>('/accesstoken', { accesstoken });
}
