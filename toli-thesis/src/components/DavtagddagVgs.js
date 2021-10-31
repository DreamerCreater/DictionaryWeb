import React,{Component} from 'react';
import {Card,InputGroup,Table,ButtonGroup,Button, FormControl} from 'react-bootstrap';

import wordService from '../services/word.service';
import "./Alph.css";
import UserService from "../services/user.service";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link}  from 'react-router-dom';
import {faStepBackward,faStepForward,faFastForward, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import authHeader from "../services/auth-header";

class DavtagddagVgs extends Component {
    constructor(props){
        super(props);
        this.state = {
          word:[],
            itemList:'',
            search:'',
            currentPage:1,
            usersPerPage:5,
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
    wordService.getRandomWord()
   .then(response=>response.data)
   .then((data)=>{
     this.setState({word:data});
   });
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
      const numbers = [1, 2, 3, 4, 5];
      const {search}=this.state;
    
      return(
          <div >
        <Card.Header style={{ width: '61rem' }}>Эрэлттэй үгс</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
           
<tbody>
  
  {
     
word.map(( word)=>(

<tr key={word.id}>

  <td><Link to={"/worddetail/"+word.id}>{word.mhUg}</Link>{' '}
      <Link>{word.mhBuleg}</Link>  {' '} <Link>{word.pos}</Link></td>
</tr>
)
)
  }
  
  </tbody>       </Table>
</Card.Body>
                
      
      </div>);
  }
}

  export default DavtagddagVgs;