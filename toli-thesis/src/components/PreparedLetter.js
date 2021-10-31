import React,{Component} from 'react';
import {Card,InputGroup,Table,ButtonGroup,Button, FormControl} from 'react-bootstrap';

import wordService from '../services/word.service';
import "./Alph.css";
import UserService from "../services/user.service";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link}  from 'react-router-dom';
import {faStepBackward,faStepForward,faFastForward, faFastBackward} from '@fortawesome/free-solid-svg-icons'

class Alph extends Component {
    constructor(props){
        super(props);
        this.state = {
          word:[],
            itemList:'',
            search:'',
            currentPage:1,
            usersPerPage:5,
            searchInput: '',
            alphabet: ''
           
        };
    }

  
    onAlphabetClick = (e) => {
        window.location.replace("alph")
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
  


    render(){
      return(
         <div>   
      <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header >
          <Link>{this.prepareAlphabets()}</Link> 
            </Card.Header>
      </Card> 
      </div>
      )
  }
}

  export default Alph;