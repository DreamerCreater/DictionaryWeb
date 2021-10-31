import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getNames = () => {
  return axios.get(API_URL + "names", { headers: authHeader() });
};
const deleteName=(id)=>{
  return axios.delete(API_URL + "names"+"/" + id, { headers: authHeader()});
}
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const createName=(names)=>{
  return axios.post(API_URL+"names",names,  { headers: authHeader() })

}
const updateName=(namess)=>{
  return axios.put(API_URL+"names"+"/",namess,  { headers: authHeader() })

}
const searchData =({searchText})=>{
 return axios.get(API_URL + "search" +"/"+searchText, { headers: authHeader() });
}//axios.get("http://localhost:8080/test/api/search/"+this.state.search)
const getAllIsActive=()=>{
  return axios.get(API_URL+"isActive", { headers: authHeader() })

}
const getNamesById=(id)=>{
  return axios.get(API_URL +"names"+"/"+ id, { headers: authHeader() });
}

const getAllIsMon=()=>{
  return axios.put(API_URL+"isMon", { headers: authHeader() })

}


export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getNames,
  deleteName,
  createName,
  updateName,
  getAllIsMon,
  getAllIsActive,
  getNamesById,
  searchData

};
