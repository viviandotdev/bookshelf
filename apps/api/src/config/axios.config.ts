// axiosRetryInterceptor.ts

import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // Your Axios configuration options
  timeout: 5000, // Set the timeout to 10 seconds (10000 milliseconds)
});

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  const { config, response } = error;
  const retryConfig = {
    retries: 3, // Number of retries
    retryDelay: 1000, // Delay between retries in milliseconds
  };

  // If request failed due to timeout
  if (error.code === 'ECONNABORTED') {
    console.error('Request timed out retry');
    return new Promise((resolve) => {
      setTimeout(() => resolve(axiosInstance(config)), retryConfig.retryDelay);
    });
  }

  // If request failed and is eligible for retry
  if (response && response.status >= 500) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(axiosInstance(config)), retryConfig.retryDelay);
    });
  }

  // If request failed but not eligible for retry
  return Promise.reject(error);
});

export default axiosInstance;
