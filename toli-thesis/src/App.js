import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import UserProfile from "./components/UserProfile";
import mongolia from './pic/mongolia.jpg';
import ff from './pic/ff.jpg';
import mongolians from './pic/mongolians.jpg';
import {Card,Row,Col,Container,InputGroup,Table,ButtonGroup,Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faStepBackward,faStepForward,faFastForward, faFastBackward} from '@fortawesome/free-solid-svg-icons'

import {faList,faEdit,faTrash,faPlusSquare,faSearch,faTimes} from '@fortawesome/free-solid-svg-icons'
import AuthService from "./services/auth.service";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Tailbar from "./components/Tailbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import NamesList from "./components/NamesList";
import WordList from "./components/WordList";
import PreparedLetter from "./components/PreparedLetter";
import Names from "./components/Names";
import Alph from "./components/Alph";
import Word from "./components/Word";
import WordDetail from "./components/WordDetail";
import userNames from "./components/userNames";
import UserList from "./components/UserList";
import AbbrevationList from "./components/AbbrevationList";
import Abbrevation from "./components/Abbrevation";
import UserAbbr from "./components/UserAbbr";
import CheckBox from "./components/Checkbox";
import AutoCompleteText from "./components/AutoCompleteText";
import SideBar from "./components/SideBar";
import ItemFound from "./components/ItemFound";
import OtChuud from "./components/OtChuud";
import OtD from "./components/OtD";
import OtNar from "./components/OtNar";
import WordOfDay from "./components/WordOfDay";
import DavtagddagVgs from "./components/DavtagddagVgs";
import Rating from "./components/Ratings";
import Ratings from "./components/Ratings";
import SearchingBar from "./components/SearchingBar";
import SearchEngine from "./components/SearchEngine";
import Zaawar from "./components/Zaawar";
import MhBuleg from "./components/MhBuleg";
import MhUsage from "./components/MhUsage";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (

    <div>
      
     <div className="bg-dark text-white">  <Home/>
     <SearchEngine/>
   </div> 
 
      <Footer/>
      <div className="container mt-3">
        <Switch>
          <Route exact path={[ "/home"]} component={Home} />
          <Route exact path={["/"]} component={Alph} />
          <Route exact  path="/tutorials" component={TutorialsList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Zaawar} />
          <Route path="/user" component={BoardUser} />
          <Route path="/namesu" component={userNames} />
          <Route path="/mod" component={BoardModerator} />
          <Route exact path="/tutorials/:id" component={Tutorial} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/preparedletter" component={PreparedLetter} />
          <Route path="/preparedletter/:letter" component={Alph} />
          <Route path="/nameslist" component={NamesList} />
          <Route path="/wordlist" component={WordList} />
          <Route path="/alph" component={Alph} />
          <Route path="/users" component={UserList} />
          <Route path="/worddetail/:id" component={WordDetail} />
          <Route path="/wordlist/:{alph}" component={WordList} />
          <Route path="/editname/:id" exact component={Names} />
          <Route path="/addname" exact component={Names} />
          <Route path="/editword/:id" exact component={Word} />
          <Route path="/addword" exact component={CheckBox}  />
          <Route path="/checkbox" exact component={Word} />
          <Route path="/addabbr" exact component={Abbrevation} />
          <Route path="/abbr" exact component={AbbrevationList} />
          <Route path="/abbruser" exact component={UserAbbr} />
          <Route path="/auto" exact component={AutoCompleteText} />
          <Route path="/sidebar" exact component={SideBar} />
          <Route path="/uud" exact component={ItemFound} />
          <Route path="/chuud" exact component={OtChuud} />
          <Route path="/otnar" exact component={OtNar} />
          <Route path="/otd" exact component={OtD} />
          <Route path="/wordofday" exact component={WordOfDay} />
          <Route path="/dawtagddag" exact component={DavtagddagVgs} />
          <Route path="/rating" exact component={Ratings} />
          <Route path="/searchEngine" exact component={SearchEngine} />
          <Route path="/searchingBar/:search" exact component={SearchingBar} />
          <Route path="/zaawar" exact component={Profile} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/tailbar" exact component={Tailbar} />
          <Route path="/mhbuleg/:search" exact component={MhBuleg} />
          <Route path="/mhusage/:search" exact component={MhUsage} />
        </Switch>
      </div>
    </div>
    
  );
};

export default App;
