import React from 'react';

import {Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link}  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component{
    logout =()=>{
        this.props.logoutUser();
    }
    render(){
        const guestLinks =(
             <>
             <Nav className="Navbar-right">
             <Link to={"users"} className="nav-link">User List</Link>
        <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/>Register</Link>
        <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/>Login</Link>
        

    </Nav>
             </>
        );
        const userLinks =(
            <>
               <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </>
       );
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                Mongolion Dictionary
                </Link>
                {this.props.auth.isLoggedIn ? userLinks:guestLinks}
              </Navbar>
                
        );
    }
}


export default NavigationBar;