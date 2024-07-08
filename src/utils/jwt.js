import jwtDecode from "jwt-decode";
import { PATH_AUTH } from "../routes/paths";
import axios from "./axios";

let expiredTimer;

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;

  expiredTimer = setTimeout(() => {
    alert("Token expired. Please log in again."); // Consider using a more user-friendly approach than alert
    logout();
  }, timeLeft);
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const { exp } = jwtDecode(accessToken);
    handleTokenExpired(exp);
  } else {
    logout();
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
  delete axios.defaults.headers.common.Authorization;
  clearTimeout(expiredTimer);
  window.location.href = PATH_AUTH.login;
};

export { isValidToken, setSession };
