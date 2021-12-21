import axios from "axios";
import {UserProfileType} from "../types/types";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f6c84f1f-526b-455b-b54c-ae0f09e46ef0'
  }
});

export const api = {
  getUsers(currentPage: number, pageSize: number) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  followUser(userId: number) {
    return axiosInstance
      .post(`follow/${userId}`)
      .then(response => response.data);
  },
  unFollowUser(userId: number) {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then(response => response.data);
  },

  me() {
    return axiosInstance
      .get<MeResponseType>('auth/me')
      .then(response => response.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return axiosInstance
      .post<LoginResponseType>('/auth/login', {email, password, rememberMe, captcha})
      .then(response => response.data);
  },
  logout() {
    return axiosInstance
      .delete('/auth/login')
      .then(response => response.data);
  },

  getProfile(userId: number) {
    return axiosInstance
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId: number) {
    return axiosInstance
      .get(`/profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status: string) {
    return axiosInstance
      .put('/profile/status', {status: status})
      .then(response => response.data);
  },
  uploadPhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return axiosInstance
      .put('/profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => response.data);
  },
  saveProfile(profile: UserProfileType) {
    return axiosInstance
      .put('/profile', profile)
      .then(response => response.data);
  },

  getCaptchaUrl() {
    return axiosInstance
      .get('/security/get-captcha-url')
      .then(response => response.data);
  }
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

// api.me().then((res:AxiosResponse<number>) => res.data.valueOf())
// axiosInstance.get<string>('auth/me').then((res) => res.data.toUpperCase();

type MeResponseType = {
  data: {
    id: number,
    email: string,
    login: string
  },
  resultCode: ResultCodeEnum,
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
  },
  resultCode: ResultCodeEnum | ResultCodeForCaptcha,
  messages: Array<string>
}
