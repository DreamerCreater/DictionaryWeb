import http from "../http-common";
import authHeader from "./auth-header";
import Axios from "axios";
const API_URL = "http://localhost:8080/api/names";
const getAll = (params) => {
  return Axios.get(API_URL+"/tutorials",{params},{ headers: authHeader() });
};

const get = id => {
  return Axios.get(`API_URL+/tutorials/${id}`,{ headers: authHeader() });
};

const create = data => {
  return http.post("/tutorials", data,{ headers: authHeader() });
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data,{ headers: authHeader() });
};

const remove = id => {
  return http.delete(`/tutorials/${id}`,{ headers: authHeader() });
};

const removeAll = () => {
  return http.delete(`/tutorials`,{ headers: authHeader() });
};

const findByTitle = title => {
  return http.get(`API+/tutorials?title=${title}`,{ headers: authHeader() });
  
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
