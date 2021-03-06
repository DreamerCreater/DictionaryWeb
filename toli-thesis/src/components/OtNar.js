import React,{Component} from 'react';
import {Card,Table,ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import MyToast from './MyToast';
import {Link}  from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faEdit,faTrash,faPlusSquare,faStepBackward,faStepForward,faFastForward,faSearch,faTimes, faFastBackward} from '@fortawesome/free-solid-svg-icons'
import wordService from '../services/word.service';
export default class OtNar extends Component{
    constructor(props){
        super(props);
        this.state = {
            word:[],
            search:'',
            currentPage:1,
            usersPerPage:6,
            sortToggle:true
          
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
        wordService.getOtNar()
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
        return(
            <div>
                 <div style={{"display":this.state.show ? "block":"none"}}>
              <MyToast show= {this.state.show} message ={ " ???? ?????????????????? ????????????."} type={'danger'}/>
            </div>
           
       
            
              <Card.Body>
                  <Table bordered hover striped variant="dark">
                  <thead>
    <tr>
   
       <th >????</th>
      <th>?????????? ????????</th> 
      <th>Pos</th> 
      <th>?????????? ??????????</th> 
      <th>???????????? ???????????? ??????????</th> 
      <th>??????????</th> 
      <th>???????????? ???????????? ????????????</th> 
      <th>???????????? ?????????????? ??????????</th> 
      <th>???? ????</th> 
      <th>???????????? ?????????????? ????????????</th> 
      <th>???????????? ????????</th> 
      <th>???????????????? ????????</th> 
      <th>????????????</th>
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
    <td>{word.pos}</td>
    <td>{word.isMon}</td>
    <td>{word.mhBuleg}</td>
    <td>{word.egshig}</td>
    <td>{word.mhHelber1}</td>
    <td>{word.mbBuleg}</td>
    <td>{word.erEm}</td>
    <td>{word.mbHlber1}</td>
    <td>{word.addDate}</td>
    <td>{word.delDate}</td>
<td>
    <ButtonGroup>

    <Link to={"editword/"+word.id} className="btn btn-sm btn-outline-primary" ><FontAwesomeIcon icon={faEdit}/>{' '}
           </Link>
        <Button  size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}  onClick={this.deleteWord.bind(this, word.id)}  /></Button>
    </ButtonGroup>
</td>
</tr>
)
)
  }
  </tbody>
                  </Table>
                  <Link to="/addword">  <FontAwesomeIcon icon={faPlusSquare} /> ???? ?????????? </Link>
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
        </div> );
    }
}
