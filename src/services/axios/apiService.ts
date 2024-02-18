import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // eslint-disable-next-line class-methods-use-this
  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios(config);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message || error;
    }
  }

  private async requestFetch<T>(endpoint: string, request?: RequestInit) {
    const result = await fetch(`${this.baseUrl}/${endpoint}`, request);
    return result.json() as T;
  }

  public async getFetch<T>(endpoint: string, config: RequestInit): Promise<T> {
    return this.requestFetch<T>(endpoint, config);
  }

  public async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>({
      method: 'get',
      url: `${this.baseUrl}/${endpoint}`,
      ...config,
    });
  }

  public async post<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>({
      method: 'post',
      url: `${this.baseUrl}/${endpoint}`,
      data,
      ...config,
    });
  }

  public async put<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>({
      method: 'put',
      url: `${this.baseUrl}/${endpoint}`,
      data,
      ...config,
    });
  }

  public async delete<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>({
      method: 'delete',
      url: `${this.baseUrl}/${endpoint}`,
      ...config,
    });
  }
}

export const createApiService = new ApiService(
  process.env.NEXT_PUBLIC_API ?? ''
);
