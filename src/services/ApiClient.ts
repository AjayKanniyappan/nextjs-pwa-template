import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string, headers: cat.Headers) {
    this.client = axios.create({
      baseURL,
      headers,
      timeout: 15000,
    });
  }

  get(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.get(path, config);
  }
}

export default ApiClient;
