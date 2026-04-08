import { getAxiosInstance } from './axiosInstance';

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';

class HttpClientClass {
  public readonly axiosInstance: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.axiosInstance = getAxiosInstance({
      ...config,
    });
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request(config);
  }
}

export const httpClient = new HttpClientClass();
