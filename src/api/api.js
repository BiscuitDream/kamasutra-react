import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f6c84f1f-526b-455b-b54c-ae0f09e46ef0'
  }
});

export const api = {
  getUsers(currentPage, pageSize) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then(response => response.data);
  },
  unFollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then(response => response.data);
  },
  checkAuth() {
    return axiosInstance
      .get('auth/me')
      .then(response => response.data);
  },
  getProfile(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then(response => response.data);
  }
};
