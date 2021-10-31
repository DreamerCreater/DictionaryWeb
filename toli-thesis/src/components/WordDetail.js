import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faUndo, faPlusSquare,faList} from '@fortawesome/free-solid-svg-icons'
import {Card,Form,Button,Col,} from 'react-bootstrap';
import MyToast from './MyToast';
import DatePicker from 'react-datepicker';
import wordService from '../services/word.service';
import axios from 'axios';
export default class WordDetail extends Component{
    constructor(props){
        super(props);
        this.state=this.initialState;
        this.state.show=false;
        this.state={
          isMons:[],
          isActives:[],
          mhBulegs:[],
          egshigs:[],
          erEms:[],
          show:false}
        this.nameChange=this.nameChange.bind(this);
        this.submitWord=this.submitWord.bind(this);
    }
    initialState = {
      id:'',
        addDate:'',
        addDesc:'',
        aimag:'',
        delDate:'',
        delDesc:'',
        egshig:'',
        erEm:'',
        isActive:'',
        isMon:'',
        mbBuleg:'',
        mbHelber1:'',
        mbUg:'',
        mbUsageId:'',
        meaning:'',
        mhBuleg:'',
        mhBulegSp:'',
        mhBulegT:'',
        mhHelber1:'',
        mhUg :'',
        tmhUg:'',
        mhUsage:'',
        otChuud:'',
        otChuul:'',
        otD:'',
        otNar:'',
        otS:'',
        otUud:'',
        pos:'',
        sid:'',
        tMbUg:''

    }
    resetWord = () => {
        this.setState(() => this.initialState);
    };
    componentDidMount(){
      const wordId = +this.props.match.params.id;
      if(wordId){
        this.findWordById(wordId);
      }
      this.findAllIsActive();
      this.findAllIsMon();
      this.findAllMhBuleg();
      this.findAllEgshig();
      this.findAllErEm();
     
    }
    findAllIsActive=()=>{
      wordService.getAllIsActive()
    //axios.get("http://localhost:8080/isActive")
    .then(response => response.data)
    .then((data)=>{
        this.setState
        ({
            isActives:[{value:'',display:'Идэвхитэй эсэхийг сонгох'}]
            .concat(data.map(isActive =>{
                return {value:isActive,display:isActive}
            }))
        })
    })
};

findAllIsMon=()=>{
    wordService.getAllIsActive()
    //axios.get("http://localhost:8080/isMon")
    .then(response => response.data)
    .then((data)=>{
        this.setState
        ({
            isMons:[{value:'',display:'Үгийн үндэс'}]
            .concat(data.map(isMon =>{
                return {value:isMon,display:isMon}
            }))
        })
    })
};
findAllMhBuleg=()=>{
  wordService.getAllFindMhBuleg()
  //axios.get("http://localhost:8080/isMon")
  .then(response => response.data)
  .then((data)=>{
      this.setState
      ({
          mhBulegs:[{value:'',display:'Монгол хэлний бүлэг'}]
          .concat(data.map(mhBuleg =>{
              return {value:mhBuleg,display:mhBuleg}
          }))
      })
  })
};

findAllErEm=()=>{
  wordService.getAllErEm()
  //axios.get("http://localhost:8080/isMon")
  .then(response => response.data)
  .then((data)=>{
      this.setState
      ({
          erEms:[{value:'',display:'Үгийн хүйс'}]
          .concat(data.map(erEm =>{
              return {value:erEm,display:erEm}
          }))
      })
  })
};
findAllEgshig=()=>{
  wordService.getAllEgshig()
  //axios.get("http://localhost:8080/isMon")
  .then(response => response.data)
  .then((data)=>{
      this.setState
      ({
          egshigs:[{value:'',display:'Эгшиг'}]
          .concat(data.map(egshig =>{
              return {value:egshig,display:egshig}
          }))
      })
  })
};
    submitWord= event => {
       
      event.preventDefault();
      const word = {
        id:this.state.id,
        addDate: this.state.addDate,
          addDesc:this.state.addDesc,
          aimag:this.state.aimag,
          delDate:this.state.delDate,
          delDesc:this.state.delDesc,
          egshig:this.state.egshig,
          erEm:this.state.erEm,
          isActive:this.state.isActive,
          isMon: this.state.isMon,
          mbBuleg:this.state.mbBuleg,
          mbHelber1:this.state.mbHelber1,
          mbUg:this.state.mbUg,
          mbUsage:this.state.mbUsage,
          meaning:this.state.meaning,
          mhBuleg:this.state.mhBuleg,
          mhBulegSp:this.state.mhBulegSp,
          mhBulegT:this.state.mhBulegT,
          mhHelber1:this.state.mhHelber1,
          mhUg:this.state.mhUg,
          tmhUg :this.state.tmhUg,
          mhUsage:this.state.mhUsage,
          otChuud:this.state.otChuud,
          otChuul:this.state.otChuul,
          otD:this.state.otD,
          otNar:this.state.otNar,
          otS: this.state.otS,
          otUud:this.state.otUud,
          pos:this.state.pos,
          sid:this.state.sid,
           tMbUg:this.state.tMbUg
      };
    /*  this.props.saveName(names);
      setTimeout(()=>{
        if(this.props.nameObject.names != null){
        this.setState({"show":true, "method":"post"});
       setTimeout(() =>this.setState({"show":false}),3000);
    }
    else{
      this.setState({"show":false});
    }},2000)*/
    wordService.createWord(word)
   //axios.post("http://localhost:8080/api/test/names",names)
      .then(response=>{
        if(response.data != null){
            this.setState({"show":true, "method":"post"});
           setTimeout(() =>this.setState({"show":false}),3000);
        }
        else{
          this.setState({"show":false});
        }
        
    });
   this.setState(this.initialState);
};
    updateWord=event=>{
      event.preventDefault();
        const word = {
          id:this.state.id,
          addDate: this.state.addDate,
            addDesc:this.state.addDesc,
            aimag:this.state.aimag,
            delDate:this.state.delDate,
            delDesc:this.state.delDesc,
            egshig:this.state.egshig,
            erEm:this.state.erEm,
            isActive:this.state.isActive,
            isMon: this.state.isMon,
            mbBuleg:this.state.mbBuleg,
            mbHelber1:this.state.mbHelber1,
            mbUg:this.state.mbUg,
            mbUsage:this.state.mbUsage,
            meaning:this.state.meaning,
            mhBuleg:this.state.mhBuleg,
            mhBulegSp:this.state.mhBulegSp,
            mhBulegT:this.state.mhBulegT,
            mhHelber1:this.state.mhHelber1,
            mhUg:this.state.mhUg,
            tmhUg :this.state.tmhUg,
            mhUsage:this.state.mhUsage,
            otChuud:this.state.otChuud,
            otChuul:this.state.otChuul,
            otD:this.state.otD,
            otNar:this.state.otNar,
            otS: this.state.otS,
            otUud:this.state.otUud,
            pos:this.state.pos,
            sid:this.state.sid,
             tMbUg:this.state.tMbUg
        };
      //  console.log('names =>'+JSON.stringify(names));
      //  console.log('id =>'+JSON.stringify(this.state.id));
        wordService.updateWord(word)
        .then(response=>{
            if(response.data != null){
                this.setState({"show":true,"method":"put"});
                setTimeout(()=>this.setState({"show":false}),3000);
                setTimeout(()=>this.wordList(),3000);
                
            }
            else{
              this.setState({"show":false});
            }
        },2000);
        this.setState(this.initialState);
      
      }
    
    findWordById=(wordId)=>{
      wordService.getWordById(wordId)
    //axios.get("http://localhost:8080/names/"+nameId)
    .then(response=>{
if(response.data!=null){
this.setState({
  id:response.data.id,
  addDate: response.data.addDate,
  addDesc:response.data.addDesc,
  aimagId:response.data.aimagId,
  delDate:response.data.delDate,
  delDesc:response.data.delDesc,
  egshig:response.data.egshig,
  erEm:response.data.erEm,
  isActive:response.data.isActive,
  isMon: response.data.isMon,
  mbBuleg:response.data.mbBuleg,
  mbHelber1:response.data.mbHelber1,
  mbUg:response.data.mbUg,
  mbUsage:response.data.mbUsage,
  meaning:response.data.meaning,
  mhBuleg:response.data.mhBuleg,
  mhBulegSp:response.data.mhBulegSp,
  mhBulegT:response.data.mhBulegT,
  mhHelber1:response.data.mhHelber1,
  mhUg:response.data.mhUg,
  tmhUg :response.data.tmhUg,
  mhUsage:response.data.mhUsage,
  otChuud:response.data.otChuud,
  otChuul:response.data.otChuul,
  otD:response.data.otD,
  otNar:response.data.otNar,
  otS: response.data.otS,
  otUud:response.data.otUud,
  pos:response.data.pos,
  sid:response.data.sid,
   tMbUg:response.data.tMbUg


});
}

    },1000).catch((error)=>{
console.error("Error - " +error)
    })
  
  }
    nameChange=event => {
        this.setState({
            [event.target.name]:event.target.value
        });

    }
    wordList=()=>{
        return  this.props.history.push("/alph")
            }
    render(){
        const{id,
            addDate,addDesc,aimag,delDate,delDesc,egshig, erEm,isActive,isMon,
            mbBuleg,mbHelber1,mbUg,mbUsage,meaning,mhBuleg,mhBulegSp,mhBulegT,mhHelber1,mhUg,
            tmhUg,mhUsage,otChuud,otChuul,otD,otNar,otS,otUud,pos,
            sid,tMbUg
    } = this.state;
        return(
          <div>
           
              
  

            <Card className={"bg-dark text-white"}>
  <Card.Header>
   <h1>{mhUg}</h1> </Card.Header>
  <Card.Body>
    <Card.Title>Үгийн утга</Card.Title>
    <Card.Text>
      {meaning}
    </Card.Text>
    
    <Card.Title>Хэлзүйн ангилал</Card.Title>
    <Card.Text>
      {pos}
    </Card.Text>
    <Card.Title>Эгшиг</Card.Title>
    <Card.Text>
      {egshig}
    </Card.Text>
    <Button variant="primary" onClick={this.wordList.bind()}>Буцах</Button>
  </Card.Body>
</Card>
  
 </div>

                );  
    }
}
