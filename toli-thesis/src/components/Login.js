import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import {Row, Col, Card, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt, faEnvelope,faUser, faLock, faUndo} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
     
  
      <div className="card card-container bg-dark text-white">
    


        <Form onSubmit={handleLogin} ref={form} className="justify-content-md-center">
     <div className="form-group"> <FontAwesomeIcon icon={faSignInAlt}/> Нэвтрэх</div>
    
         
          
        <div className="form-group"  >
        <Row className="form-group" >
        <div className="btn btn-light " style={{height: '38px', width : '45px'}}>
          <FontAwesomeIcon icon={faUser}/></div>
            <Input
              type="text"
              className="form-control"
              placeholder="Нэвтрэх нэр"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </Row>
          
          </div>
          <div className="form-group" >
          <Row  >
          <div className="btn btn-light " style={{height: '38px', width : '45px'}}>
          <FontAwesomeIcon icon={faLock}/></div>
         
          
            <Input
              type="password"
              className="form-control"
              name="password"
              placeholder="Нууц үг"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
           
          </Row>
         </div> 

          <div className="form-group" >
            <Row className="form-group">
            <button size="sm" style={{height: '35px', width : '240px'}} className="btn btn-primary " disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <FontAwesomeIcon icon={faSignInAlt}/> Login
            </button>
            </Row>
          </div>

          {message && (
            <div className="form-group">
               <Row className="form-group">
              <div className="alert alert-danger" role="alert" style={{height: '45px', width : '240px'}} >
                {message}
              </div>
              </Row>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
       
      </div>
      
    </div>
  );
};

export default Login;
