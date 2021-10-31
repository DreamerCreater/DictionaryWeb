import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faUndo, faPlusSquare,faList,faEdit} from '@fortawesome/free-solid-svg-icons'
import {Card,Form,Button,Col,} from 'react-bootstrap';
import MyToast from './MyToast';
import AbbrService from "../services/abbrService";
import wordService from '../services/word.service';
  class Abbrevation extends Component{
    constructor(props){
        super(props);
        this.state=this.initialState;
        this.state={
          isMons:[],
          isActives:[],
          mhBulegs:[],
          egshigs:[],
          erEms:[],
          poss:[],
          show:false}
         
        this.nameChange=this.nameChange.bind(this);
        this.submitNames=this.submitNames.bind(this);
    }
    initialState = {
      id:'',
        isMon:'',
        isActive:'',
        pos:'',
        meaing:'',
        aimag:'',
        addDesc:'',
        addDate:'',
        delDesc:'',
        delDate:'',
        mhUg:'',
        mhHelber1:'',
        tMhUg:'',
        mhBuleg:'',
        mhCheckType:'',
        egshig:'',
        mbUg:'',
        mbHelber1:'',
        tMbUg:'',
        mbBuleg:'',
        mbCheckType:'',
        erEm :'',
        abbrUsage:'',
        lastMhUg:'',
        lastMbUg:''

    }
    componentDidMount(){
      const nameId = +this.props.match.params.id;
      if(nameId){
        this.findNameById(nameId);
      }
      this.findAllIsActive();
      this.findAllIsMon();
      this.findAllPos();
      this.findAllMhBuleg();
      this.findAllEgshig();
      this.findAllErEm();
     
    }
    findAllIsActive=()=>{
        AbbrService.getAllIsActive()
      //axios.get("http://localhost:8080/isActive")
      .then(response => response.data)
      .then((data)=>{
          this.setState
          ({
              isActives:[{value:'',display:'Үгийн төлөв сонгох'}]
              .concat(data.map(isActive =>{
                  return {value:isActive,display:isActive}
              }))
          })
      })
  };
 
  findAllIsMon=()=>{
      AbbrService.getAllIsMon()
      //axios.get("http://localhost:8080/isMon")
      .then(response => response.data)
      .then((data)=>{
          this.setState
          ({
              isMons:[{value:'',display:'Үгийн үүсэл сонгох'}]
              .concat(data.map(isMon =>{
                  return {value:isMon,display:isMon}
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
    findNameById=(nameId)=>{
    AbbrService.getNamesById(nameId)
      //axios.get("http://localhost:8080/names/"+nameId)
      .then(response=>{
if(response.data!=null){
this.setState({
  id:response.data.id,
  isMon: response.data.isMon,
          isActive:response.data.isActive,
          pos:response.data.pos,
          meaning:response.data.meaning,
          aimag:response.data.aimag,
          addDesc:response.data.addDesc,
          addDate: response.data.addDate,
          delDesc:response.data.delDesc,
          delDate:response.data.delDate,
          mhUg:response.data.mhUg,
          mhHelber1:response.data.mhHelber1,
          tMhUg:response.data.tMhUg,
          mhBuleg: response.data.mhBuleg,
          mhCheckType:response.data.mhCheckType,
          egshig:response.data.egshig,
          mbUg:response.data.mbUg,
          mbHelber1:response.data.mbHelber1,
          tMbUg:response.data.tMbUg,
          mbBuleg:response.data.mbBuleg,
          mbCheckType:response.data.mbCheckType,
          erEm:response.data.erEm,
          abbrUsage:response.data.abbrUsage,
          lastMhUg:response.data.lastMhUg,
          lastMbUg:response.data.lastMbUg
});
}

      },1000).catch((error)=>{
console.error("Error - " +error)
      })
    
    }
    resetNames = () => {
        this.setState(() => this.initialState);
    };
    updateName=event=>{
      event.preventDefault();
        const names = {
          id:this.state.id,
            isMon: this.state.isMon,
            isActive:this.state.isActive,
            pos:this.state.pos,
            meaning:this.state.meaning,
            aimag:this.state.aimag,
            addDesc:this.state.addDesc,
            addDate: this.state.addDate,
            delDesc:this.state.delDesc,
            delDate:this.state.delDate,
            mhUg:this.state.mhUg,
            mhHelber1:this.state.mhHelber1,
            tMhUg:this.state.tMhUg,
            mhBuleg: this.state.mhBuleg,
            mhCheckType:this.state.mhCheckType,
            egshig:this.state.egshig,
            mbUg:this.state.mbUg,
            mbHelber1:this.state.mbHelber1,
            tMbUg:this.state.tMbUg,
            mbBuleg:this.state.mbBuleg,
            mbCheckType:this.state.mbCheckType,
            erEm:this.state.erEm,
            abbrUsage:this.state.abbrUsage,
          lastMhUg:this.state.lastMhUg,
          lastMbUg:this.state.lastMbUg
        };
      //  console.log('names =>'+JSON.stringify(names));
      //  console.log('id =>'+JSON.stringify(this.state.id));
        AbbrService.updateName(names)
        .then(response=>{
            if(response.data != null){
                this.setState({"show":true,"method":"put"});
                setTimeout(()=>this.setState({"show":false}),3000);
                setTimeout(()=>this.namesList(),3000);
                
            }
            else{
              this.setState({"show":false});
            }
        },2000);
        this.setState(this.initialState);
      
      }
     

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
    submitNames= event => {
       
        event.preventDefault();
        const names = {
            isMon: this.state.isMon,
            isActive:this.state.isActive,
            pos:this.state.pos,
            meaning:this.state.meaning,
            aimag:this.state.aimag,
            addDesc:this.state.addDesc,
            addDate: this.state.addDate,
            delDesc:this.state.delDesc,
            delDate:this.state.delDate,
            mhUg:this.state.mhUg,
            mhHelber1:this.state.mhHelber1,
            tMhUg:this.state.tMhUg,
            mhBuleg: this.state.mhBuleg,
            mhCheckType:this.state.mhCheckType,
            egshig:this.state.egshig,
            mbUg:this.state.mbUg,
            mbHelber1:this.state.mbHelber1,
            tMbUg:this.state.tMbUg,
            mbBuleg:this.state.mbBuleg,
            mbCheckType:this.state.mbCheckType,
            erEm:this.state.erEm,
            abbrUsage:this.state.abbrUsage,
          lastMhUg:this.state.lastMhUg,
          lastMbUg:this.state.lastMbUg
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
      AbbrService.createName(names)
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
    nameChange=event => {
        this.setState({
            [event.target.name]:event.target.value
        });

    };
    namesList=()=>{
      return  this.props.history.push("/abbr")
          }
    render(){
        const{isMon,isActive,pos,meaning,aimag,addDesc,addDate,delDesc,delDate,mhUg,mhHelber1,tMhUg,mhBuleg,mhCheckType,egshig,mbUg,mbHelber1,tMbUg,mbBuleg,mbCheckType,erEm,abbrUsage,lastMhUg,lastMbUg} = this.state;
        return(
          <div>
            <div style={{"display":this.state.show ? "block":"none"}}>
              <MyToast show =  {this.state.show} message ={this.state.method ==="put"?"Name Updated Successfully.":" Name Saved Successfully."} type={"success"}/>
            </div>
          
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
           
              <FontAwesomeIcon icon= {this.state.id ? faEdit : faPlusSquare} /> 
              {this.state.id ? "Товчилсон үг" : "Товчилсон үг нэмэх"}
              
              </Card.Header>
            
            <Form onReset={this.resetNames} onSubmit={this.state.id ? this.updateName : this.submitNames} id="namesFormId"
            ref={(c) => {
                this.form = c;
              }}>
            <Card.Body>
            <Form.Row>
  

  <Form.Group as={Col} controlId="formGridmhUg">
    <Form.Label>Монгол хэлний үг</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="mhUg"
     value={mhUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний үг" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmeaning">
    <Form.Label>Үгийн утга</Form.Label>
    <Form.Control  autoComplete="off"
    
    type="test" name="meaning"
    value={meaning}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Утга" />
  </Form.Group>
  </Form.Row>
                <Form.Row>
  <Form.Group as={Col} controlId="formGridisMon">
    <Form.Label>Үгийн үүсэл</Form.Label>
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
  <Form.Group as={Col} controlId="formGridaimag">
    <Form.Label>Үгийн аймаг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="aimag"
    value={aimag}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Үгсийн аймаг" />
  </Form.Group>
  
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPos">
    <Form.Label>Хэл зүйн ангилал</Form.Label>
    <Form.Control required as ="select"
    custom onChange = {this.nameChange}
    name="pos" value={pos}
    className={"bg-dark text-white"}>
    {this.state.poss.map(pos =>
      <option key = {pos.value} value={pos.value}>
        {pos.display}
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
  
  </Form.Row>
  <Form.Row>
  
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
  <Form.Group as={Col} controlId="formGridmbUg">
    <Form.Label>Монгол бичгийн үг</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="mbUg"
     value={mbUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичгийн үг" />
  </Form.Group>
  </Form.Row>
 
  
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmhHelber1">
    <Form.Label>Монгол хэлний хэлбэр</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhHelber1"
    value={mhHelber1}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний хэлбэр" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmbHelber1">
    <Form.Label>Монгол бичгийн хэлбэр </Form.Label>
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
  <Form.Group as={Col} controlId="formGridmhBuleg">
    <Form.Label>Монгол хэлний бүлэг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mhBuleg"
    value={mhBuleg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний бүлэг" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmbBuleg">
    <Form.Label>Монгол бичгийн бүлэг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="mbBuleg"
    value={mbBuleg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичгийн бүлэг" />
  </Form.Group>
  
  </Form.Row>
  <Form.Row>
 
 
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridtMhUg">
    <Form.Label>Монгол хэлний үг тонгоргосон</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="tMhUg"
     value={tMhUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол хэлний үг томоор" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridtMbUg">
    <Form.Label>Монгол бичгийн үгийн тонгоргосон</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="tMbUg"
     value={tMbUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол бичгийн үгийн төрөл" />
  </Form.Group>
  </Form.Row>
  <Form.Row>

  <Form.Group as={Col} controlId="formGridmhCheckType">
    <Form.Label>Монгол хэлний төрөл сонгох</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="mhCheckType"
     value={mhCheckType}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="Монгол хэлний төрлийг хянах" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridmbCheckType">
    <Form.Label>Монгол бичгийн төрөл сонгох</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="mbCheckType"
     value={mbCheckType}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол бичгийн үгийг тэмдэглэх" />
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGriderlastMhUg">
    <Form.Label>Сүүлийн монгол хэлний үг</Form.Label>
    <Form.Control  autoComplete="off"
    type="test" 
    name="lastMhUg"
    value={lastMhUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="эр/эм" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridlastMbUg">
    <Form.Label>Сүүлийн монгол бичгийн үг</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="lastMbUg"
     value={lastMbUg}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder=" бичгийн үгийг тэмдэглэх" />
  </Form.Group>
  </Form.Row>
  <Form.Row>
  
  <Form.Group as={Col} controlId="formGridabbrUsage">
    <Form.Label>Үгийн хэрэглээ</Form.Label>
    <Form.Control 
     autoComplete="off"
     type="test" name="abbrUsage"
     value={abbrUsage}
    onChange={this.nameChange} 
    className={"bg-dark text-white"}
    placeholder="монгол бичгийн үгийг тэмдэглэх" />
  </Form.Group>
  </Form.Row>
  
    </Card.Body>
     <Card.Footer style={{"textAlign":"right"}}>
 <Button size="sm" variant="success" type="submit">
 <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}

  </Button>{' '}
  <Button size="sm" variant="info" type="reset">
 <FontAwesomeIcon icon={faUndo} /> Reset
  </Button>{' '}
  <Button size="sm" variant="info" type="button" onClick={this.namesList.bind()}>
 <FontAwesomeIcon icon={faList} /> Abbrevation List
  </Button>
    </Card.Footer>
    </Form>
</Card>
</div>
                );  
    }
};

export default Abbrevation;

