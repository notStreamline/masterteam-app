import { AxiosResponse } from 'axios';
import Repository from './Repository';

const resource = './categories';
export default {
  get(): Promise<AxiosResponse> {
    return Repository.get(`${resource}`);
  },

  createCategory(payload: object): Promise<AxiosResponse> {
    return Repository.post(`${resource}`, payload);
  },
};
