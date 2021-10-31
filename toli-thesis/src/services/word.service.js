import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const getWord = () => {
    return axios.get(API_URL + "sortedtutorials", { headers: authHeader() });
  };
  const getWords = () => {
    return axios.get(API_URL + "word", { headers: authHeader() });
  };
  const getWordUud = () => {
    return axios.get(API_URL + "worduud", { headers: authHeader() });
  };
  const getRandomWord = () => {
    return axios.get(API_URL + "random", { headers: authHeader() });
  };
  const getRandomOne = () => {
    return axios.get(API_URL + "randomone", { headers: authHeader() });
  };
  const getOtUUd = () => {
    return axios.get(API_URL + "wordsuud", { headers: authHeader() });
  };
  const getOtChuud = () => {
    return axios.get(API_URL + "wordchuud", { headers: authHeader() });
  };
  const getOtNar = () => {
    return axios.get(API_URL + "wordotnar", { headers: authHeader() });
  };
  const getOtD = () => {
    return axios.get(API_URL + "wordotd", { headers: authHeader() });
  };
  const getOt=(ot)=>{
    return axios.get(API_URL+"/",ot,  { headers: authHeader() })
  }
  const deleteWord=(id)=>{
    return axios.delete(API_URL + "word"+"/" + id, { headers: authHeader()});
  }
  const createWord=(word)=>{
    return axios.post(API_URL+"word",word,  { headers: authHeader() })
  
  }
  const findBuleg=(buleg)=>{
    return axios.post(API_URL+"buleg?keyword"+"="+buleg);
  
  }
  const updateWord=(word)=>{
    return axios.put(API_URL+"word"+"/",word,  { headers: authHeader() })
  
  }
  const getWordById=(id)=>{
    return axios.get(API_URL +"word"+"/"+ id, { headers: authHeader() });
  }
  const getWordByMhUg=(mhUg)=>{
    return axios.get(API_URL +"key?keyword"+"="+ mhUg);
  }
  const getWordByUsage=(usage)=>{
    return axios.get(API_URL +"key?keyword"+"="+ usage);
  }
   
  const findByTitle = title => {
    return axios.get(`API_URL+/?mhUg=${title}`,{ headers: authHeader() });
    
  };
  const findByMhUg = keyword => {
    return axios.get(API_URL+"key?keyword="+keyword,{ headers: authHeader() });
    
  };
  const getAllIsActive=()=>{
    return axios.get(API_URL+"isActiveW", { headers: authHeader() })
  
  }
  const getAllEgshig=()=>{
    return axios.get(API_URL+"egshig", { headers: authHeader() })
  
  }
  const getAllFindMhBuleg=()=>{
    return axios.get(API_URL+"mhBuleg", { headers: authHeader() })
  
  }
  const getAllErEm=()=>{
    return axios.get(API_URL+"erEm", { headers: authHeader() })
  
  }
  const getAllPos=()=>{
    return axios.get(API_URL+"findpos", { headers: authHeader() })
  
  }
  const getAllUsage=()=>{
    return axios.get(API_URL+"findusage", { headers: authHeader() })
  
  }
  export default {
    getAllPos,
    getWordByMhUg,
    getRandomOne,
    getOt,
    getOtChuud,
    getOtNar,
    getOtD,
    getAllIsActive,
    getWordById,
    getWord,
    deleteWord,
    createWord,
    updateWord,
    findByTitle,
    findByMhUg,
    getWords,
    getAllEgshig,
    getAllFindMhBuleg,
    getAllErEm,
    getOtUUd,
    getRandomWord,
    findBuleg,
    getWordByUsage,
    getAllUsage,
    getWordUud

  
  };
  