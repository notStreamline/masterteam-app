import { AxiosResponse } from 'axios';
import Repository from './Repository';

const resource = './locations';
export default {
  get(): Promise<AxiosResponse> {
    return Repository.get(`${resource}`);
  },

  getLocation(locationId: number): Promise<AxiosResponse> {
    return Repository.get(`${resource}/${locationId}`);
  },

  create(payload: object): Promise<AxiosResponse> {
    return Repository.post(`${resource}`, payload);
  },

  delete(locationId: number): Promise<AxiosResponse> {
    return Repository.delete(`${resource}/${locationId}`);
  },
};
