import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AuthService from "../services/auth.service";
import axios from 'axios';
import {Card,Form,Button,FormControl,Col,} from 'react-bootstrap';
import WordService from '../services/word.service'
import AutoCompleteText from '../components/AutoCompleteText';
const Home = () => {  
    const[word,setWord]=useState([])
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showUserBoard, setShowUserBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
  
    const logOut = () => {
        AuthService.logout();
      };
    useEffect(() => {
        let mounted = true;
        WordService.getWord()
          .then(words => {
        
          })
         
        return () => mounted = false;
      }, [])
    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
          setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
          setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
          setShowUserBoard(user.roles.includes("ROLE_USER"));
        }
      }, []);
   
    return (
        <div>
        <Navbar bg="dark"  expand="lg">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="bg-dark text-white" href="#home">Нүүр</Nav.Link>
            <Nav.Link className="bg-dark text-white" href="/tailbar">Заавар</Nav.Link>
            <Nav.Link className="bg-dark text-white" href="/namesu">Оноосон нэр</Nav.Link>
            <Nav.Link className="bg-dark text-white" href="/alph">Монгол хэлний үг</Nav.Link>
            <Nav.Link className="bg-dark text-white" href="/abbruser">Товчилсон нэрийн тайлбар</Nav.Link>
            {showAdminBoard && (
              <Nav.Link className="bg-dark text-white" href="/users">Хэрэглэгчийн мэдээлэл</Nav.Link>
            )}
          </Nav>
         
         
        </Navbar.Collapse>
        <div>

            {showModeratorBoard && (
               
                <NavDropdown className="bg-dark text-white"  title="Өөрчлөх үйлдэл" id="basic-nav-dropdown">
              <NavDropdown.Item className="bg-dark text-white" href="/wordlist">Үг харах</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-white" href="/addword">Үг нэмэх</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-white" href="/nameslist">Улс орны нэр харах</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-white" href="/addname">Улс орны нэр нэмэх</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="bg-dark text-white" href="/abbr">Товчилсон нэр харах </NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-white" href="/addabbr">Товчилсон нэр нэмэх </NavDropdown.Item>
            </NavDropdown>
              )}
  
         

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link bg-dark text-white">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link bg-dark text-white" onClick={logOut}>
                  Гарах
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link bg-dark text-white">
                  Нэвтрэх
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link bg-dark text-white">
                  Бүртгүүлэх
                </Link>
              </li>
            </div>
          )}
      </Navbar>
<ul>
        {word.map(word =><li key={word.id}>{word.mhUg}</li>)}
      </ul></div>
      
      
  
    );
  };
  
  export default Home;