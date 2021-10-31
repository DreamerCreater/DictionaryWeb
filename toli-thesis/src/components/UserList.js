import React,{Component} from 'react';
import {Card,Table,ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import MyToast from './MyToast';
import {Link}  from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faEdit,faTrash,faPlusSquare,faStepBackward,faStepForward,faFastForward,faSearch,faTimes, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import userService from '../services/auth.service';
import wordService from '../services/word.service';
export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[],
            search:'',
            currentPage:1,
            usersPerPage:6,
            sortToggle:true
          
        };
    }
    cancelSearch = () =>{
        this.setState({"search":' '});
        this.findAllUsers();
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
        this.findAllUsers();
    }
    componentDidMount(){
        this.findAllUsers();
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
        if(this.state.currentPage < Math.ceil(this.state.users.length/this.state.usersPerPage)){
            this.setState({
                currentPage:Math.ceil(this.state.users.length/this.state.usersPerPage)
            })
        }
    }
    findAllUsers(){
        let sortDir = this.state.sortToggle ? "asc" : "desc";
        userService.getUsers()
       //axios.get("http://localhost:8080/word")
       .then(response=>response.data)
       .then((data)=>{
         this.setState({users:data});
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
        userService.deleteUser(id)
      //  axios.delete("http://localhost:8080/names/"+id)
        .then(response=>{
            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() =>this.setState({"show":false}),3000);
                
                this.setState({
                    user :this.state.users.filter(user =>user.id!==id)
                });
            }
                else{
                    this.setState({"show":false});
                }
            
        });
    };

    nextPage = ()=>{
        if(this.state.currentPage<Math.ceil(this.state.users.length/this.state.usersPerPage)){
            this.setState({
                currentPage:this.state.currentPage+1
            })
        }
    }
    render(){
        const{ users, currentPage, usersPerPage} = this.state;
        const lastIndex=currentPage*usersPerPage;
        const firstIndex=lastIndex-usersPerPage;
        const currentUsers = users.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(users.length/usersPerPage);
        const {search}=this.state;
       // const{word, currentPage, totalPages,totalElements} = this.state;
        const pageNumCss = {
            width:"45px",
            border:" 1px solid #17A2B8",
            color: "#17A2B8",
            textAlign:"center",
            fontWeight:"bold"
        };
        return(
            <div>
                 <div style={{"display":this.state.show ? "block":"none"}}>
              <MyToast show= {this.state.show} message ={ " Хэрэглэгч амжилттай устлаа."} type={'danger'}/>
            </div>
           
        <Card className={"border border-dark bg-dark text-white"}>
              <Card.Header 
              ><FontAwesomeIcon icon={faList} />Хэрэглэгчдийн мэдээлэл 
          <div style={{"float":"right"}}>
               <InputGroup size="sm">
                   <FormControl placeholder="Search" name="search" value={search}
                   className={"info-border bg-dark text-white"}
                   onChange={this.searchChange}/>

                   <InputGroup.Append>
                   <Button size="sm" variant="outline-info" type="button" onClick={this.searchData}>
                   <FontAwesomeIcon icon={faSearch} />
                   </Button>
                   <Button size="sm" variant="outline-info" type="button" onClick={this.cancelSearch}>
                   <FontAwesomeIcon icon={faTimes}/>
                   </Button>
                   </InputGroup.Append>
               </InputGroup>
              </div>
              </Card.Header>
             
              <Card.Body>
                  <Table bordered hover striped variant="dark">
                  <thead>
    <tr>
   
       <th >Хэрэглэгчийн нэр</th>
      <th>Имейл хаяг</th> 
      <th>Үйлдэл</th>
    </tr>
  </thead>
  <tbody>
  {
      users.length === 0 ?
    <tr align="center">
    <td colSpan="6">No Words Available</td>
</tr>:
currentUsers.map((users)=>(
<tr key={users.id}>

<td>{users.username}</td>
<td>{users.email}</td>  
 
<td>
    <ButtonGroup>

    <Link to={"editword/"+users.id} className="btn btn-sm btn-outline-primary" ><FontAwesomeIcon icon={faEdit}/>{' '}
           </Link>
        <Button  size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}  onClick={this.deleteWord.bind(this, users.id)}  /></Button>
    </ButtonGroup>
</td>
</tr>
)
)
  }
  
  
  </tbody>
                  </Table>
                  <Link to="/register">  <FontAwesomeIcon icon={faPlusSquare} /> Хэрэглэгч нэмэх </Link>
                   </Card.Body>
                   
                   <Card.Footer>
        <div style={{"float":"left"}}>
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
        </div> );
    }
}
