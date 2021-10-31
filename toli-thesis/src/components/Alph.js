import React,{Component} from 'react';
import {Card,InputGroup,Table,ButtonGroup,Button, FormControl} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import wordService from '../services/word.service';
import "./Alph.css";
import UserService from "../services/user.service";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link}  from 'react-router-dom';
import {faStepBackward,faStepForward,faFastForward, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import authHeader from "../services/auth-header";

class Alph extends Component {
    constructor(props){
        super(props);
        this.state = {
          word:[],
            itemList:'',
            value:3,
            search:'',
            currentPage:1,
            usersPerPage:10,
            searchInput: '',
            alphabet: '',
            searchInput: ''
           
        };
    }
    onSearchInputChange = (e) => {
      this.setState({searchInput: e.target.value})
    }
    componentDidMount(){
      this.findAllWords();
   }
   findAllWords(){
    wordService.getWords()
   .then(response=>response.data)
   .then((data)=>{
     this.setState({word:data});
   });
}
   


  firstPage = ()=>{
      if(this.state.currentPage > 1){
          
          this.setState({
              currentPage:1
          })
          
      }
      

  }
  prevPage = ()=>{
      if(this.state.currentPage>1){
          this.setState({
              currentPage:this.state.currentPage - 1
          })
      }
  }
  lastPage = ()=>{
      if(this.state.currentPage<Math.ceil(this.state.word.length/this.state.usersPerPage)){
          this.setState({
              currentPage:Math.ceil(this.state.word.length/this.state.usersPerPage)
          })
      }
  }
  nextPage = ()=>{
      if(this.state.currentPage<Math.ceil(this.state.word.length/this.state.usersPerPage)){
          this.setState({
              currentPage:this.state.currentPage+1
          })
      }
  }
    
   
    onAlphabetClick = (e) => {
      this.setState({alphabet: e.target.value})
    }
    prepareAlphabets = () => {
      let result = [];
      for(let i=1040; i<1046; i++) {
        result.push(
          <button  className={" bg-dark text-white"} type="button" key={i} 
          onClick={this.onAlphabetClick} 
          value={String.fromCharCode(i)} >
          {String.fromCharCode(i)}</button>
        )
      }
      
        result.push(
            <button  className={" bg-dark text-white"} type="button" key={1025} onClick={this.onAlphabetClick} value={String.fromCharCode(1025)} >
            {String.fromCharCode(1025)}</button>
          )
      
      for(let i=1046; i<1054; i++) {
        result.push(
          <button  className={" bg-dark text-white"} type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >
          {String.fromCharCode(i)}</button>
        )
      }
      result.push(
        <button  className={" bg-dark text-white"} type="button" key={1256} onClick={this.onAlphabetClick} value={String.fromCharCode(1256)} >
        {String.fromCharCode(1256)}</button>
      )
      for(let i=1055; i<1059; i++) {
        result.push(
          <button  className={" bg-dark text-white"} type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >
          {String.fromCharCode(i)}</button>
        )
      }
      result.push(
        <button  className={" bg-dark text-white"} type="button" key={1198} onClick={this.onAlphabetClick} value={String.fromCharCode(1198)} >
        {String.fromCharCode(1198)}</button>
      )
      for(let i=1060; i<1072; i++) {
        result.push(
          <button  className={" bg-dark text-white"} type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >
          {String.fromCharCode(i)}</button>
        )
      }
      return result;
    }
  

  /* filterItems = (itemList) => {
        let result = [];
        const { searchInput, alphabet } = this.state;
        if(itemList && (searchInput || alphabet)) {
          result=itemList.filter((element)=>
           // result = names.filter((element) =>
            (element.name.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
            this.elementContainsSearchString(searchInput, element));
          } else {
            result = word || [];
          }
        result = result.map((item) => (<li className="celeb-item"><a href="#"><img src={item.image_url} className="img-responsive" /></a><strong>{item.name}</strong></li>))
        return result;
    }*/
    
   elementContainsSearchString = (searchInput, element) => (searchInput ? element.mhUg.toLowerCase().includes(searchInput.toLowerCase()) : false);
      filterItems = (word) => {
        let result = [];
        const { searchInput,alphabet } = this.state;
        if(word && (searchInput || alphabet)) {
          result = word.filter((element) => (element.mhUg.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
          this.elementContainsSearchString(searchInput, element));
        } else {
          result = word || [];
        }
      /*  result = result.map((item)=> (<Link to={"/worddetail/"+item.id}><li key ={item.id}>{item.mhUg}{' '}
        {item.mhBuleg}{' '} {item.pos}</li></Link>))*/
       return result;
      }
    handleClick = (e) => {
        this.setState({ alphabet: e.target.value })
    }
    searchData = () =>{
      //UserService.searchData(this.state.search)
      axios.get("http://localhost:8080/api/test/key?keyword="+this.state.search, { headers: authHeader() })
      .then(response=>response.data)
      .then((data)=>{
        this.setState({
            names:data.content});
      });
  }
  changePage = event =>{
    if(this.state.search){
this.search.data();
    }
    else{
        this.findAllWords();
    }
    this.setState(
        {
           [event.target.name]: parseInt(event.target.value) 
        }
    );
};
    firstPage = ()=>{
      if(this.state.currentPage > 1){
          
          this.setState({
              currentPage:1
          })
          
      }
      

  }
  prevPage = ()=>{
      if(this.state.currentPage>1){
          this.setState({
              currentPage:this.state.currentPage - 1
          })
      }
  }
  lastPage = ()=>{
      if(this.state.currentPage<Math.ceil(this.state.word.length/this.state.usersPerPage)){
          this.setState({
              currentPage:Math.ceil(this.state.word.length/this.state.usersPerPage)
          })
      }
  }
  nextPage = ()=>{
      if(this.state.currentPage<Math.ceil(this.state.word.length/this.state.usersPerPage)){
          this.setState({
              currentPage:this.state.currentPage+1
          })
      }
  }

    render(){
      const{ word, currentPage, usersPerPage} = this.state;
      const lastIndex=currentPage*usersPerPage;
      const firstIndex=lastIndex-usersPerPage;
      const currentUsers = word.slice(firstIndex, lastIndex);
      const totalPages = Math.ceil(word.length/usersPerPage);
      const pageNumCss = {
          width:"45px",
          border:" 1px solid #17A2B8",
          color: "#17A2B8",
          textAlign:"center",
          fontWeight:"bold"
      };
      const {search}=this.state;
     const filteredList = this.filterItems(word);
      return(
          <div>
           
      <Card className={"border border-dark bg-dark text-white"}>
      <Card.Header >
     
         {this.prepareAlphabets()}
       
            </Card.Header>
          
            <Card.Body>
                <Table bordered hover striped variant="dark">
           
<tbody>
  <Table bordered hover striped variant="dark">
    
                 
  <tbody>
  {
      word.length === 0 ?
    <tr align="center">
    <td colSpan="6">No Words Available</td>
</tr>:
currentUsers.map((words)=>(
<tr  >
  
<td   className="bg-dark text-white" key={words.id}>
  <Link to={"/worddetail/"+words.id}>{words.mhUg}</Link>{' '}
  <Link to={"/mhbuleg/"+words.mhBuleg}>{words.mhBuleg}</Link> {' '} 
  
  <Link to={"/mhusage/"+words.mhUsage}><Rating  max={3} name="read-only" value={words.mhUsage} readOnly />
    </Link> {' '} 
    <Link>{words.pos}</Link>
       </td></tr>
)
)
  }
  
  
  </tbody>
                  </Table>
</tbody>
                </Table>
               
                 </Card.Body>
                 <Card.Footer>
      <div style={{"float":"left"}}>
      Showing Page {currentPage} of {totalPages}
      </div>
      <div style={{"float":"right"}}>
          <InputGroup size="sm">
          <InputGroup.Prepend>
          <Button type="button" variant="outline-info" disabled={currentPage===1 ? true:false}
          onClick={this.firstPage}>
          <FontAwesomeIcon icon={faFastBackward}/> First
          </Button>
          <Button type="button" variant="outline-info" disabled={currentPage===1 ? true:false} 
          onClick={this.prevPage}>
          <FontAwesomeIcon icon={faStepBackward}/> Prev
              </Button>
          </InputGroup.Prepend>
          <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage}
          onChange={this.changePage}/>
          <InputGroup.Append>
          <Button type="button" variant="outline-info" disabled={totalPages===1 ? true:false}
          onClick={this.nextPage}>
          <FontAwesomeIcon icon={faStepForward}/> Next
          </Button>
          <Button type="button" variant="outline-info" disabled={totalPages===1 ? true:false}
          onClick={this.lastPage}>
          <FontAwesomeIcon icon={faFastForward}/> Last
              </Button>
          </InputGroup.Append>
          </InputGroup>

</div>
  </Card.Footer>
 
      </Card> 
      </div>);
  }
}

  export default Alph;