import axios from "axios";

let instance = axios.create({
  url: process.env.NEXT_PUBLIC_API_URL,
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

export const request = async function (options: any) {
  return instance(options)
    .then(onSuccess)
    .catch(() => console.log("error"));
};
