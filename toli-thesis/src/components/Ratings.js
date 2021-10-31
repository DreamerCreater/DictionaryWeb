import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import wordService from '../services/word.service';
export default class Ratings extends React.Component{
  constructor(props){
    super(props);
        this.state = {
            word:[],
            search:'',
            currentPage:1,
            usersPerPage:6,
            sortToggle:true,
            windowWidth: window.innerWidth,
            value:3
          
        };
}
componentDidMount(){
  this.findAllWords();
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
render(){
  const{ word, currentPage, usersPerPage} = this.state;
  const lastIndex=currentPage*usersPerPage;
  const firstIndex=lastIndex-usersPerPage;
  const currentUsers = word.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(word.length/usersPerPage);
  
  const {search}=this.state;
  const{ value} = this.state;
  return (
    <div>
       {
      word.length === 0 ?
    <tr align="center">
    <td colSpan="6">No Words Available</td>
</tr>:
currentUsers.map((word)=>(
<tr key={word.id}>

<td>{word.mhUg}</td><td> <Box component="fieldset" mb={3} borderColor="transparent">
      
        <Rating name="read-only" value={word.mhUsage} max={3}  readOnly />
      </Box></td>
    <td>{word.meaning}</td>
    <td>{word.pos}</td>
    <td>{word.isMon}</td>
    <td>{word.mhBuleg}</td>
    <td>{word.egshig}</td>
    <td>{word.mhHelber1}</td>
    
    <td>{word.erEm}</td>
   
    <td>{word.addDate}</td>
    <td>{word.delDate}</td>

</tr>
)
)
  }
     
      
    </div>
  );}

}
