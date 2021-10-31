import React,{Component} from 'react';
import {Card,Table,ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import MyToast from './MyToast';
import {Link}  from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faEdit,faTrash,faPlusSquare,faStepBackward,faStepForward,faFastForward,faSearch,faTimes, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import wordService from '../services/word.service';
export default class MhBuleg extends Component{
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
    componentDidMount(){
        
        const search = +this.props.match.params.search;
        this.searchData()
     
     }
    
    searchData = () =>{
        //UserService.searchData(this.state.search)
        axios.get("http://localhost:8080/api/test/buleg?keyword="+this.props.match.params.search)
        .then(response=>response.data)
        .then((data)=>{
          this.setState({
              word:data});
        });
        
        
    }
    findWordByMhUg=(search)=>{
        axios.get("http://localhost:8080/api/test/buleg?keyword="+search)
      //axios.get("http://localhost:8080/names/"+nameId)
      .then(response=> response.data)
      .then((data)=>
  {
  this.setState({
    word:data
  });
  })
      
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
        wordService.getWord()
       //axios.get("http://localhost:8080/word")
       .then(response=>response.data)
       .then((data)=>{
         this.setState({word:data});
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
                 <div style={{"display":this.state.show ? "block":"none"}}>
              <MyToast show= {this.state.show} message ={ " Үг амжилттай устлаа."} type={'danger'}/>
            </div>
           <Row>
            <Col sm={3}><Card  className={"border border-dark bg-dark text-white"}><SideBar/></Card></Col>
            <Col sm={9} >
            <Card style={{ width: '61rem' }} className={"border border-dark bg-dark text-white"}>
            <Link to="/addword">  <FontAwesomeIcon icon={faPlusSquare} /> Үг нэмэх </Link>
            <div style={{"float":"right"}}>
              
              </div>
              <Card.Body>
             
                  <Table bordered hover striped variant="dark">
                 
                  <thead>
    <tr>
   
       <th >Үг</th>
      <th>Үгийн утга</th> 
      <th>Pos</th> 
    </tr>
  </thead>
  <tbody>
  {
      word.length === 0 ?
    <tr align="center">
    <td colSpan="6">No Words Available</td>
</tr>:
currentUsers.map((word)=>(
<tr key={word.id}>

<td>{word.mhUg}</td>
    <td>{word.meaning}</td>
    <td>{word.mhBuleg}</td>
</tr>
)
)
  }
  
  
  </tbody>
                  </Table>
                   </Card.Body>
                  
                   <Card.Footer>
                   <div style={{"float":"left"}} className="bg-dark text-white">
        Showing Page {currentPage} of {totalPages}
        </div>
        <div style={{"float":"right"}}>
            <InputGroup size="sm">
            <InputGroup.Prepend>
            <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true:false}
            onClick={this.firstPage}>
            <FontAwesomeIcon icon={faFastBackward}/> First
            </Button>
            <Button type="button" variant="outline-info" disabled={currentPage===1 ? true:false} 
            onClick={this.prevPage}>
            <FontAwesomeIcon icon={faStepBackward}/> Prev
                </Button>
            </InputGroup.Prepend>
            <FormControl style={pageNumCss} 
            className={"bg-dark"} name="currentPage" value={currentPage}
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
    </Col>   
    </Row>
        </div> );
    }
}
