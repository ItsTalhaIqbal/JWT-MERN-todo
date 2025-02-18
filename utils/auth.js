import cookie from "js-cookie";
import axios from "axios";

 const setCookie = (key, value) => {
  cookie.set(key, value, { expires: 1 });
};

 const removeCookie = (key) => {
  cookie.remove(key);
};

 const getCookie = (key) => {
  return cookie.get(key);
};

export const setAuthentication = (token) => {
  setCookie("token", token);
};

export const logOut = () => {
  removeCookie("token");
};

export const isLogin = async () => {
  const token = getCookie("token");

  if (token) {
    const res = await axios.post(`http://localhost:3000/api/auth`, { token });
    return res.data;
  }
  return false;
};