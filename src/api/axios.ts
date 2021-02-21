import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
axios.interceptors.request.use((config: AxiosRequestConfig) => config);
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data.data || response.data
    // 错误码
    if (!response.data.success) {
      return Promise.reject(data);
    }
    return data;
  },
  (err) => Promise.reject(err),
);

export default axios;
