import { AxiosResponse } from 'axios';
import Repository from './Repository';

const resource = './users';
/**
 * TODO: Help with this one
 */
export default {
  get(): Promise<AxiosResponse> {
    return Repository.get(`${resource}`);
  },

  // This method shouldn't be in the front end ...
  delete(): Promise<AxiosResponse> {
    return Repository.delete(`${resource}`);
  },
  getUserById(userId: number): Promise<AxiosResponse> {
    return Repository.get(`${resource}/${userId}`);
  },

  getUserByEmail(email: string): Promise<AxiosResponse> {
    return Repository.get(`${resource}/${email}`);
  },

  signup(payload: object): Promise<AxiosResponse> {
    return Repository.post(`${resource}/signup`, payload);
  },

  deleteUser(userId: number): Promise<AxiosResponse> {
    return Repository.delete(`${resource}/${userId}`);
  },

  updatePassword(payload: object): Promise<AxiosResponse> {
    return Repository.put(`${resource}/password`, payload);
  },

  updateProfile(userId: number, payload: object): Promise<AxiosResponse> {
    return Repository.put(`${resource}/${userId}`, payload);
  },
};
