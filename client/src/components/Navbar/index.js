import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUpForm from '../signup';
import LoginForm from '../login';
import logo from '../../Games/images/one-spark.png';
import Auth from '../../utils/auth';

  const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Navbar bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img  className="logo" href="/" src={logo} alt="one spark logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" className='justify-content-end'/>
            <Navbar.Collapse id="navbar" className='justify-content-end'>
              <Nav className="ml-auto">
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link  as={Link} to="/records">
                      See Your Records
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link className='loginSignup' onClick={() => setShowModal(true)}>
                    Login/Sign Up
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Modal
          size="md"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="signup-modal">
          <Tab.Container defaultActiveKey="login">
            <Modal.Header closeButton>
              <Modal.Title id="signup-modal">
                <Nav>
                  <Nav.Item>
                    <Nav.Link className='navTabs' eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='navTabs' eventKey="signup">Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  <SignUpForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </>
    );
  };

export default AppNavbar;