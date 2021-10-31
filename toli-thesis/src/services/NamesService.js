import http from "../http-common";
import authHeader from "./auth-header";
import Axios from "axios";
const API_URL = "http://localhost:8080/api/names";
const getAll = (params) => {
  return Axios.get(API_URL+"/names",{params},{ headers: authHeader() });
};

const get = id => {
  return Axios.get(`API_URL+/names/${id}`,{ headers: authHeader() });
};

const create = data => {
  return http.post("/names", data,{ headers: authHeader() });
};

const update = (id, data) => {
  return http.put(`/names/${id}`, data,{ headers: authHeader() });
};

const remove = id => {
  return http.delete(`/names/${id}`,{ headers: authHeader() });
};

const removeAll = () => {
  return http.delete(`/names`,{ headers: authHeader() });
};



export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
 
};
