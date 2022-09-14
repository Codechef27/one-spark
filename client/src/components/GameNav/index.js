import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import  { Link } from 'react-router-dom';




const GameNav = () => {


    return (
        <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to='game/minecraft'> Minecraft</Nav.Link>
              {/* <Nav.Link as={Link} to='game/minions'>Minions</Nav.Link> */}
              {/* <Nav.Link as={Link} to='game/princesses'>Princesses</Nav.Link> */}
              <Nav.Link as={Link} to='game/animals'>Dinosaurs</Nav.Link>
              <NavDropdown title="Educational" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="game/abc's">ABC'S</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="game/numbers">Numbers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
}

export default GameNav;