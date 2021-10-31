import React,{Component} from 'react';
import {Card,Table,ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import MyToast from './MyToast';
import {Link}  from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faEdit,faTrash,faPlusSquare,faStepBackward,faStepForward,faFastForward,faSearch,faTimes, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import wordService from '../services/word.service';
export default class WordOfDay extends Component{
    constructor(props){
        super(props);
        this.state = {
            word:[],
            search:'',
            currentPage:1,
            usersPerPage:6,
            sortToggle:true,
            windowWidth: window.innerWidth
          
        };
    }
    cancelSearch = () =>{
        this.setState({"search":' '});
        this.findAllWords();
     };
     searchChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    sortData = ()=>{
        this.setState(state =>({
           sortToggle: !state.sortToggle
        }));
        this.findAllWords();
    }
    componentDidMount(){
        this.findAllWords();
     }
   
  
    changePage = event =>{
        if(this.state.search){
this.search.data();
        }
        else{
            this.findAllWord();
        }
        this.setState(
            {
               [event.target.word]: parseInt(event.target.value) 
            }
        );
    };
    changePage = event =>{
        this.setState(
            {
               [event.target.word]: parseInt(event.target.value) 
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
        if(this.state.currentPage < Math.ceil(this.state.word.length/this.state.usersPerPage)){
            this.setState({
                currentPage:Math.ceil(this.state.word.length/this.state.usersPerPage)
            })
        }
    }
    findAllWords(){
        let sortDir = this.state.sortToggle ? "asc" : "desc";
        wordService.getRandomOne()
       //axios.get("http://localhost:8080/word")
       .then(response=>response.data)
       .then((data)=>{
         this.setState({word:data});
       });
   }
    searchData = () =>{
        wordService.findByMhUg(this.state.search)
        //axios.get("http://localhost:8080/api/test/key?keyword="+this.state.search, { headers: authHeader() })
        .then(response=>response.data)
        .then((data)=>{
          this.setState({
              word: data.content
             });
        });
        
    }
    deleteWord =(id)=>{
        wordService.deleteWord(id)
      //  axios.delete("http://localhost:8080/names/"+id)
        .then(response=>{
            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() =>this.setState({"show":false}),3000);
                
                this.setState({
                    word :this.state.word.filter(word =>word.id!==id)
                });
            }
                else{
                    this.setState({"show":false});
                }
            
        });
    };

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
        
        const {search}=this.state;
       // const{word, currentPage, totalPages,totalElements} = this.state;
        const pageNumCss = {
            width:"45px",
            border:" 1px solid #17A2B8",
            color: "#17A2B8",
            textAlign:"center",
            fontWeight:"bold"
        };
        const { windowWidth } = this.state; 
        const wid={windowWidth}/3;
        return(
            
            <div>
         <Card className="bg-dark text-white" >  
  <Card.Header style={{ width: '61rem' }}><FontAwesomeIcon icon={faPlusSquare} />Өнөөдрийн үг</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
   
      
        {
     
     word.map(( word)=>(
     
     <tr key={word.id}>
           {' '}   <p> {word.mhUg}</p> {' '}
           <p>
      {word.pos}
      </p>
      <footer className="blockquote-footer">
      {word.meaning}
      </footer>
     </tr>
     )
     )
       }
       
      
      
    
    </blockquote>
  </Card.Body>
  </Card> 
        </div> );
    }
}
