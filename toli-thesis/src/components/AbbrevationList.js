import React,{Component} from 'react';
import {Card,InputGroup,Table,ButtonGroup,Button, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyToast from './MyToast';
import authHeader from "../services/auth-header";
import AbbrService from "../services/abbrService";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faStepBackward,faStepForward,faFastForward, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import {faList,faEdit,faTrash,faPlusSquare,faSearch,faTimes} from '@fortawesome/free-solid-svg-icons'

export default class AbbrevationList extends Component{
    constructor(props){
        super(props);
        this.state = {
            names:[],
            search:'',
            searchAlph:'',
            currentPage:1,
            usersPerPage:5,
           
        };
    }

    componentDidMount(){
       this.findAllNames();
      
       
    
    }
    searchData = () =>{
        //UserService.searchData(this.state.search)
        axios.get("http://localhost:8080/test/api/search?"+this.state.search, { headers: authHeader() })
        .then(response=>response.data)
        .then((data)=>{
          this.setState({
              names:data.content});
        });
    }
    searchAlphData = () =>{
        //UserService.searchData(this.state.search)
        axios.get("http://localhost:8080/test/api/searchAlph/"+this.state.search, { headers: authHeader() })
        .then(response=>response.data)
        .then((data)=>{
          this.setState({
              names:data.content});
        });
    }
    searchChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    cancelSearch = () =>{
       this.setState({"search":' '});
       this.findAllNames();
    };
    findAllNames=()=>{
        AbbrService.getNames()
        .then(response=>response.data)
        .then((data)=>{
          this.setState({names:data});
        });
    }
    deleteNames =(id)=>{
        AbbrService.deleteName(id)
      //  axios.delete("http://localhost:8080/names/"+id)
        .then(response=>{
            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() =>this.setState({"show":false}),3000);
                
                this.setState({
                    names :this.state.names.filter(names =>names.id!==id)
                });
            }
                else{
                    this.setState({"show":false});
                }
            
        });
    };
    changePage = event =>{
        if(this.state.search){
this.search.data();
        }
        else{
            this.findAllNames();
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
        if(this.state.currentPage<Math.ceil(this.state.names.length/this.state.usersPerPage)){
            this.setState({
                currentPage:Math.ceil(this.state.names.length/this.state.usersPerPage)
            })
        }
    }
    nextPage = ()=>{
        if(this.state.currentPage<Math.ceil(this.state.names.length/this.state.usersPerPage)){
            this.setState({
                currentPage:this.state.currentPage+1
            })
        }
    }
    render(){
        const{ names, currentPage, usersPerPage} = this.state;
        const lastIndex=currentPage*usersPerPage;
        const firstIndex=lastIndex-usersPerPage;
        const currentUsers = names.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(names.length/usersPerPage);
        const pageNumCss = {
            width:"45px",
            border:" 1px solid #17A2B8",
            color: "#17A2B8",
            textAlign:"center",
            fontWeight:"bold"
        };
        const {search}=this.state;
        return(
            <div>
                <Container>

  <Row>
     
 
  
  <Col sm={8}>
   
                 <div style={{"display":this.state.show ? "block":"none"}}>
              <MyToast show= {this.state.show} message ={ " ???? ?????????????????? ????????????."} type={'danger'}/>
            </div>
          
        <Card className={"border border-dark bg-dark text-white"}  style={{ width: '80rem' }}>
              <Card.Header style={{ width: '80rem' }} >
              <div style={{"float":"left"}}>
              <FontAwesomeIcon icon={faList}/> ?????????????????? ???????????? ????????????????
              </div>
              <div style={{"float":"right"}}>
              
              </div>
              
              </Card.Header>
              
             
              <Card.Body>
                  <Table bordered hover striped variant="dark">
                  <thead>
    <tr><th>???????????? ???????????? ????</th>
      <th>????????</th>
      <th>pos</th>
      <th>??????????</th>
      <th>??????????</th>
    <th>???????????? ???????????? ??????????</th>
    <th>???????????? ???????????? ????????????????</th>
    <th>?????????? ????????</th>
    <th>?????????????? ???????????? ???????????? ????</th>
    <th>???????????? ????????</th>
      <th>????????????</th>
    </tr>
  </thead>
  <tbody>
  {this.state.names.length === 0 ?
    <tr align="center">
    <td colSpan="6">No Words Available</td>
</tr>:
currentUsers.map((names)=>(
<tr key={names.id}>
<td>{names.mhUg}</td>
    <td>{names.meaning}</td>
    <td>{names.pos}</td>
    <td>{names.isActive}</td>
    <td>{names.isMon}</td>
    <td>{names.aimag}</td>
    <td>{names.abbrUsage}</td>
    <td>{names.erEm}</td>
    <td>{names.lastMhUg}</td>
    <td>{names.addDate}</td>
<td>
    <ButtonGroup>
        <Link to={"editname/"+names.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/>{' '}
           </Link>

        <Button  size="sm" variant="outline-danger" onClick={this.deleteNames.bind(this, names.id)}><FontAwesomeIcon icon={faTrash} /></Button>
    </ButtonGroup>
</td>
</tr>
)
)
  }
  
  
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
    <Link to="/addabbr">  <FontAwesomeIcon icon={faPlusSquare} /> ???? ?????????? </Link>
        </Card>
        </Col>
        
    
  </Row>
</Container> 
        </div>);
    }
}
