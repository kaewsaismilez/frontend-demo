import Axios, { AxiosRequestConfig } from "axios";

export interface Credentials {
  email: string;
  password: string;
}

interface LoginApiResponse {
  created: string;
  id: string;
  token: string;
  email: string;
}

const API_BASE_URL = 'http://165.22.88.139:4000'

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: API_BASE_URL + "/login",
    data,
  };

  try {
    const {data:response} = await Axios.request<LoginApiResponse>(requestConfig);
    storeToken(response.token);
    return {token: response.token};
  } catch (e) {
    console.error(e);
    return { error: e.response.data.message };
  }
};

export const onRegister = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: API_BASE_URL + "/register",
    data,
  };
  try {
    const { data: response } = await Axios.request(requestConfig);
  } catch (e) {
    console.error(e.response);
    return { error: e.response.data.message };
  }
};

export const BOUNCE_IT_TOKEN_KEY = "bounce_it_token_key";

const storeToken = (token: string) => {
  localStorage.setItem(BOUNCE_IT_TOKEN_KEY, token);
};
