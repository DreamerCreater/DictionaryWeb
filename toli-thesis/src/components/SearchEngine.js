import React from 'react'
import {Link}  from 'react-router-dom';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import  ReactSearchAutocomplete  from './ReactSearchAutocomplete'
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import wordService from '../services/word.service';
import {faSearch,faTimes} from '@fortawesome/free-solid-svg-icons'
import WordList from './WordList';
import styled from 'styled-components'
export default class SearchEngine extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
        word:[],
        mhUg:'',
        items:[],
        search:'',
        currentPage:1,
        usersPerPage:6,
        sortToggle:true,
        windowWidth: window.innerWidth
      
    };
    this.onInputchange = this.onInputchange.bind(this);
}
componentDidMount(){
  this.findAllWords();
}
cancelSearch = () =>{
  this.setState({search:''});
  this.findAllWords();
};
searchChange = event =>{
  this.setState({
      [event.target.name]:event.target.value
  });
}
findAllWords(){
  let sortDir = this.state.sortToggle ? "asc" : "desc";
  wordService.getWord()
 //axios.get("http://localhost:8080/word")
 .then(response=>response.data)
 .then((data)=>{
   this.setState({word:data});
 });
}

handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  
 
  }
wordList=()=>{
        return  this.props.history.push("/wordlist")
            }
 handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }
 
 handleOnSelect = (words) => {
    // the item selected
   console.log(words);
  //return this.props.history.push(`/searchingBar/${words}`); 
  this.setState(()=>({
    search:words.mhUg
  }))

  
  }
  handleClick() {
    
  }
  searchChange = event =>{
    this.setState({
        [event.target.name]:event.target.value
    });
}
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

 handleOnFocus = () => {
    console.log('Focused')
  }
  
 render(){
  
   const{word}=this.state;
   const{mhUg,search,value}= this.state;
  
    return (
      <div  className="AutoCompleteText">
         
          <Navbar className="bg-dark text-white" expand="lg">
<Navbar.Brand className="bg-dark text-white"  href="#home">Монгол хэлний тайлбар толь</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<div className="navbar-nav ml-auto"  >
              <li className="nav-item" style={{ width:200,zIndex: 2  }}>
              <ReactSearchAutocomplete
          name="search" 
          value={search}
            items={word}
            onChange={this.searchChange}
            onSearch={this.handleOnSearch}
            onHover={this.handleOnHover}
            onSelect={this.handleOnSelect}
            onFocus={this.handleOnFocus}
           // autoFocus
            fuseOptions={{ keys: ["mhUg", "meaning"] }}
            resultStringKeyName="mhUg"

          /> </li>
          <li> <Link to={"/searchingBar/"+search} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faSearch} />
           </Link>
        
              </li>

            
            </div>

</Navbar.Collapse>



 
      
                   </Navbar>
        </div>


 

     
  )}
}
const StyledSearchInput = styled.div`
  min-height: ${(props) => props.theme.height};
  width: 100%;
  
  display: flex;
  align-items: center;
  > input {
    width: 100%;
    padding: 0 0 0 13px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: inherit;
    font-family: inherit;
    color: ${(props) => props.theme.color};
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme.placeholderColor};
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${(props) => props.theme.placeholderColor};
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${(props) => props.theme.placeholderColor};
    }
  }
`
