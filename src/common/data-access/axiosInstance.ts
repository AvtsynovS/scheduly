import axios, { AxiosError } from 'axios';

import type { CreateAxiosDefaults } from 'axios';

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`request error: [${JSON.stringify(error)}]`);

  return Promise.reject(error);
};

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAxiosInstance = (config?: CreateAxiosDefaults) => {
  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    async (config) => config,
    (error) => {
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    onRequestError,
  );

  return axiosInstance;
};
