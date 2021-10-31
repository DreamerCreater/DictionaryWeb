import React, { Component } from 'react'
import wordService from '../services/word.service';
import './AutoCompleteText.css';
import Navbar from 'react-bootstrap/Navbar';
import {Card,Form,Button,FormControl,Col,} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
export default class AutoCompleteText extends Component {
    constructor(props) {
super(props);
this.items=[
    'david',
    'dolgor',
    'gerlee',
    'brian',
    'yoko',
    'jane'
];
this.state={
    word:[],
    suggestions:[],
    text:'',

};
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
    onTextChanged=(e)=>{
      const value=e.target.value;
      let suggestions=[];
      let words=[];
      if(value.length >0){
          const regex=new RegExp(`^${value}`,'i');
          suggestions=this.items.sort().filter(v=>regex.test(v));
         
      }
      this.setState(()=>({suggestions, text:value}));
    }
    renderSuggestions(){
        const {suggestions} =this.state;
        if(suggestions.length===0){
            return null;
        }
        return(
            <ul >
                {suggestions.map((item)=><li  onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    suggestionSelected(value){
this.setState(()=>({
    text:value,
    suggestions: [],

}))
    }

    render() {
        const{ word} = this.state;
        const{text}=this.state;
        return (
            <div  className="AutoCompleteText">
               
                <Navbar className="bg-dark text-white" expand="lg">
  <Navbar.Brand className="bg-dark text-white"  href="#home">Монгол хэлний тайлбар толь</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav><div> <input value={text} onChange={this.onTextChanged} type="text"/>
    {this.renderSuggestions()}</div>
      
  </Navbar.Collapse>
</Navbar>

       
  
            </div>

        )
    }
}
