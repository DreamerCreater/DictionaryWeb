import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};
const deleteUser=(id)=>{
  return axios.delete(API_URL + "users"+"/" + id, { headers: authHeader()});
}
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  deleteUser,
  login,
  logout,
  getCurrentUser,
  getUsers
};
