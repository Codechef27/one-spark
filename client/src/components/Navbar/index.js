import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/one-spark.png';
import auth from '../../utils/auth';


  const AppNavbar = () => {

    return (
      <>
        <Navbar bg="light" variant="light" expand='lg'>
          <Container fluid>
            <Nav.Link as={Link} to="/">
              <img  className="logo" href="/" src={logo} alt="one spark logo" />
            </Nav.Link>
                {auth.loggedIn() ? (
                  <>      
                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
                 <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                   <Nav>
                     <Nav.Link as={Link} to='game/Minecraft'>Minecraft</Nav.Link>
                     <Nav.Link as={Link} to='game/Princesses'>Princesses</Nav.Link>
                     <Nav.Link as={Link} to='game/Dinosaurs'>Dinosaurs</Nav.Link>
                     <Nav.Link as={Link} to='game/Minions'>Minions</Nav.Link>
                     <NavDropdown title="Educational">
                       <NavDropdown.Item as={Link} to="game/Alphabet">ABC'S</NavDropdown.Item>
                       <NavDropdown.Item as={Link} to="game/Numbers">Numbers</NavDropdown.Item>
                       <NavDropdown.Item as={Link} to="game/Planets">Planets</NavDropdown.Item>
                     </NavDropdown>
                   </Nav>
                 </Navbar.Collapse>
                 </>
                ) :  null }
           </Container>     
        </Navbar>
      </>
    );
  };

export default AppNavbar;