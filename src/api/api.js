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

  me() {
    return axiosInstance
      .get('auth/me')
      .then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return axiosInstance
      .post('/auth/login', {email, password, rememberMe})
      .then(response => response.data);
  },
  logout() {
    return axiosInstance
      .delete('/auth/login')
      .then(response => response.data);
  },

  getProfile(userId) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return axiosInstance
      .get(`/profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status) {
    return axiosInstance
      .put('/profile/status', {status: status})
      .then(response => response.data);
  },
  uploadPhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return axiosInstance
      .put('/profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => response.data);
  },
  saveProfile(profile) {
    return axiosInstance
      .put('/profile', profile)
      .then(response => response.data);
  }
};
