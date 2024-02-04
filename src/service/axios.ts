"use client";
import axios from "axios";

let instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status < 400 || status === 401;
  },
});

instance.interceptors.response.use(async (res) => {
  const { status, config } = res;
  if (status === 401) {
    // refreshToken
  }
  return res;
});

const onSuccess = function (response: any) {
  return response.data;
};
const onError = function (error: any) {
  if (error?.response?.status) {
    const message = error.response.data.message ?? "uncaught error";
    const status = error.response.status;

    console.log(message + ", " + status);
    throw new Error(message, { cause: { status } });
  }

  throw new Error("uncaught error");
};

export const request = async function (options: any) {
  return instance(options).then(onSuccess).catch(onError);
};

export const changeServerLang = (lang: string) => {
  console.log("changeServerLang", lang);
  instance.defaults.headers.common["x-lang"] = lang;
};
