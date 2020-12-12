import { AxiosResponse } from 'axios';
import Repository from './Repository';

const resource = './properties';
export default {
  get(): Promise<AxiosResponse> {
    return Repository.get(`${resource}`);
  },

  getProperty(propertyId: number): Promise<AxiosResponse> {
    return Repository.get(`${resource}/${propertyId}`);
  },

  create(payload: object): Promise<AxiosResponse> {
    return Repository.post(`${resource}`, payload);
  },

  update(payload: object): Promise<AxiosResponse> {
    return Repository.put(`${resource}`, payload);
  },

  delete(propertyId: number): Promise<AxiosResponse> {
    return Repository.delete(`${resource}/${propertyId}`);
  },
};
