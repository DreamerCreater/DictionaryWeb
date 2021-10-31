import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faUndo, faPlusSquare,faList} from '@fortawesome/free-solid-svg-icons'
import {Card,Form,Button,Col,} from 'react-bootstrap';
import MyToast from './MyToast';
import Checkbox from '@material-ui/core/Checkbox'
import DatePicker from 'react-datepicker';
import wordService from '../services/word.service';
import axios from 'axios';
import { setTokenSourceMapRange } from 'typescript';
export default class Checkboxs extends Component{
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
          poss:[],
          usages:[],
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
      this.findAllPos();
      this.findAllUsages();
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
findAllPos=()=>{
  wordService.getAllPos()
   
    .then(response => response.data)
    .then((data)=>{
        this.setState
        ({
            poss:[{value:'',display:'Хэл зүйн ангилал'}]
            .concat(data.map(pos =>{
                return {value:pos,display:pos}
            }))
        })
    })
};
findAllUsages=()=>{
  wordService.getAllUsage()
   
    .then(response => response.data)
    .then((data)=>{
        this.setState
        ({
            usages:[{value:'',display:'Хэрэглээ сонгох'}]
            .concat(data.map(usage =>{
                return {value:usage,display:usage}
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
        return  this.props.history.push("/wordlist")
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
            <div style={{"display":this.state.show ?
             "block":"none"}}>
              <MyToast show =  {this.state.show}
               message ={this.state.method ==="put"?"Үгийг амжилттай заслаа.":" Үгийг амжилттай нэмлээ."} type={"success"}/>
            </div>
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Шинэ үг нэмэх</Card.Header>
            
            <Form onReset={this.resetWord} onSubmit={this.state.id ? 
            this.updateWord : this.submitWord} id="namesFormId"
            ref={(c) => {
                this.form = c;
              }}>
            <Card.Body>
         
          
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhUg">
    <Form.Label>Үг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhUg"
    value={mhUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний үг" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridegshig">
    <Form.Label>Үгийн утга</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="meaning"
    value={meaning}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="утга" />
  </Form.Group>
 
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridisMonId">
    <Form.Label>Үгийн үндэс</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="isMon" value={isMon}
    className={"bg-dark text-white"}>
    {this.state.isMons.map(isMon =>
      <option key = {isMon.value} value={isMon.value}>
        {isMon.display}
      </option>)}
    </Form.Control>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmhBuleg">
    <Form.Label>Монгол хэлний бүлэг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhBuleg"
    value={mhBuleg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол хэлний бүлэг" />
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmh">
    <Form.Label>pos</Form.Label>
    <Form.Control 
    required as ="select"
   custom onChange={this.nameChange} 
   name="pos"
   value={pos}
    className={"bg-dark text-white"}>
    {this.state.poss.map(pos =>
      <option key = {pos.value} value={pos.value}>
        {pos.display}
      </option>)}
      </Form.Control>
   
  </Form.Group>
  <Form.Group as={Col} controlId="formGridaimag">
    <Form.Label>Үгийн аймаг</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="aimag"
     value={aimag}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Үгсийн аймаг" />
  </Form.Group>
  
  </Form.Row>
  <Form.Label>Олон тооны нөхцөл авах эсэх</Form.Label>
  <Form.Row>
 
  <Form.Group as={Col} controlId="formGridotS">
  <input autoComplete="off"
    type="checkbox" 
    name="otNar"
    value={otNar}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
     />{' '} Олон тооны нар
 
  </Form.Group>
  <Form.Group as={Col} controlId="formGridotUud">
    
    <input
     autoComplete="off"
     type="checkbox" name="otUud" 
     value={otUud}
    onChange={this.nameChange} 
   
    //placeholder="Олон тооны ууд авах эсэх"
     />{' '} Олон тооны ууд нөхцөл
   
  </Form.Group>
  
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridotChuud">
    <input  autoComplete="off"
    type="checkbox" 
    name="otChuud"
    value={otChuud}
    onChange={this.nameChange} 
    /> {' '} Олон тооны чууд нөхцөл
  </Form.Group>
  <Form.Group as={Col} controlId="formGridotChuul">
    <input 
     autoComplete="off"
     type="checkbox" name="otChuul"
     value={otChuul}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="олон тооны чуул авах эсэх" />{' '}Олон тооны чуул нөхцөл
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridotS">
    <input  autoComplete="off"
    type="checkbox" 
    name="otS"
    value={otS}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    />{' '}Олон тооны c нөхцөл
  </Form.Group>
  <Form.Group as={Col} controlId="formGridotD">
    
    <input
     autoComplete="off"
     type="checkbox" name="otD"
     value={otD}
    onChange={this.nameChange} 
     />{' '} Олон тооны Д нөхцөл
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridotNar">
    
  
  </Form.Group>
  </Form.Row>
  
  
  <Form.Row>
  <Form.Group as={Col} controlId="formGriderEm">
    <Form.Label>Үгийн хүйс</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="erEm" value={erEm}
    className={"bg-dark text-white"}>
    {this.state.erEms.map(erEm =>
      <option key = {erEm.value} value={erEm.value}>
        {erEm.display}
      </option>)}
    </Form.Control>
    
  </Form.Group>
  <Form.Group as={Col} controlId="formGridegshig">
    <Form.Label>Эгшиг</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="egshig" value={egshig}
    className={"bg-dark text-white"}>
    {this.state.egshigs.map(egshig =>
      <option key = {egshig.value} value={egshig.value}>
        {egshig.display}
      </option>)}
    </Form.Control>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridaddDesc">
    <Form.Label>Тайлбар нэмэх</Form.Label>
    <Form.Control 
    autoComplete="off"
     type="test" name="addDesc"
     value={addDesc}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Тайлбар нэмэх" />
  </Form.Group>
 
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhBulegSp">
    <Form.Label>Монгол хэлний бүлэг сп</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhBulegSp"
    value={mhBulegSp}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол хэлний бүлэг сп" />
  </Form.Group>
  
  
  <Form.Group as={Col} controlId="formGridmbUg">
    <Form.Label>Монгол бичгийн үг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mbUg"
    value={mbUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичигийн үг" />
  </Form.Group>
  
 
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhHelber1">
    <Form.Label>Монгол хэлний хэлбэр</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="mhHelber1"
     value={mhHelber1}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний хэлбэр" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmbHelber1">
    <Form.Label>Монгол бичгийн хэлбэр</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mbHelber1"
    value={mbHelber1}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичгийн хэлбэр" />
  </Form.Group>
 
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridtMhUg">
    <Form.Label>Үгийн тонгоргосон хэлбэр</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="tmhUg"
    value={tmhUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний үгийн тонгоргосон хэлбэр" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmbBuleg">
    <Form.Label>Монгол бичгийн бүлэг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mbBuleg"
    value={mbBuleg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол бичгийн бүлэг" />
  </Form.Group>

  
  </Form.Row>
  
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhBulegT">
    <Form.Label>Монгол хэлний бүлэг тонгоргосон</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhBulegT"
    value={mhBulegT}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол хэлний бүлэгт" />
  </Form.Group>

 
  <Form.Group as={Col} controlId="formGridtMbUg">
    <Form.Label>Монгол бичгийн тонгоргосон хэлбэр</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="tMbUg"
    value={tMbUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичгийн үгийн тонгоргосон хэлбэр" />
  </Form.Group>
  </Form.Row>

  
  <Form.Row>
 
  
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhUsage">
    <Form.Label>Үгийн хэрэглээ</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="mhUsage" value={mhUsage}
    className={"bg-dark text-white"}>
    {this.state.usages.map(usagesd =>
      <option key = {usagesd.value} value={usagesd.value}>
        {usagesd.display}
      </option>)}
    </Form.Control>
    </Form.Group>
  <Form.Group as={Col} controlId="formGridmbUsage">
    <Form.Label>Монгол бичгийн хэрэглээ</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="mbUsage" value={mbUsage}
    className={"bg-dark text-white"}>
    {this.state.usages.map(usagesd =>
      <option key = {usagesd.value} value={usagesd.value}>
        {usagesd.display}
      </option>)}
    </Form.Control>
  </Form.Group>
  
  </Form.Row>
  
  
    </Card.Body>
     <Card.Footer style={{"textAlign":"right"}}>
     <Button size="sm" variant="success" type="submit">
 <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Засварлах" : "Хадгалах"}
  </Button>{' '}
  <Button size="sm" variant="info" type="reset">
 <FontAwesomeIcon icon={faUndo} /> Шинэчлэх
  </Button>{' '}
  <Button size="sm" variant="info" type="button" onClick={this.wordList.bind()}>
 <FontAwesomeIcon icon={faList} /> Үгсийн жагсаалт
  </Button>
    </Card.Footer>
    </Form>
</Card>
</div>
                );  
    }
}
