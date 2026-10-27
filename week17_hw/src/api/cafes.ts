import axios from 'axios';
import type { Cafe } from '../types/cafe';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export async function getData<T>(url: string): Promise<T> {
  const response = await api.get<T>(url);
  return response.data;
}

export function getCafes(): Promise<Cafe[]> {
  return getData<Cafe[]>('/cafes');
}

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return '서버에 연결할 수 없어요. JSON Server가 실행 중인지 확인해주세요.';
    }
    return `카페 정보를 불러오지 못했어요. (${error.response.status})`;
  }
  if (error instanceof Error) return error.message;
  return '알 수 없는 오류가 발생했어요.';
}
