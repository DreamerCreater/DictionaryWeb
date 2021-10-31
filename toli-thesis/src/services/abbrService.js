import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";



const getNames = () => {
  return axios.get(API_URL + "abbr", { headers: authHeader() });
};
const deleteName=(id)=>{
  return axios.delete(API_URL + "abbr"+"/" + id, { headers: authHeader()});
}


const createName=(abbr)=>{
  return axios.post(API_URL+"abbr",abbr,  { headers: authHeader() })

}
const updateName=(namess)=>{
  return axios.put(API_URL+"abbr"+"/",namess,  { headers: authHeader() })

}
const searchData =({searchText})=>{
 return axios.get(API_URL + "search" +"/"+searchText, { headers: authHeader() });
}//axios.get("http://localhost:8080/test/api/search/"+this.state.search)

const getNamesById=(id)=>{
  return axios.get(API_URL +"abbr"+"/"+ id, { headers: authHeader() });
}

const getAllIsMon=()=>{
  return axios.get(API_URL+"isMonsf", { headers: authHeader() })

}

const getAllIsActive=()=>{
    return axios.get(API_URL+"isActiveWs", { headers: authHeader() })
  
  }
  const getAllPos=()=>{
    return axios.get(API_URL+"pos", { headers: authHeader() })
  
  }
export default {
    getAllPos,
  getNames,
  deleteName,
  createName,
  updateName,
  getAllIsMon,
  getAllIsActive,
  getNamesById,
  searchData

};
