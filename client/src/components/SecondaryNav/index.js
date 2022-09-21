import React  from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import auth from '../../utils/auth';
import Contact from '../../pages/Contact'
import { Link } from 'react-router-dom';





const secondaryNav = () => {


    return (
      
        <Navbar >
          {auth.loggedIn() ? (
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link><Contact/></Nav.Link>
              <Nav.Link as={Link} to="/records">Records</Nav.Link>
              <Nav.Link onClick={auth.logout}>Logout</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
        ) : null }
      </Navbar>
      
    );
    
}

export default secondaryNav;