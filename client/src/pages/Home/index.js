import React from 'react';
import loopedVid from '../../images/loop-blocks.mp4';
import Contact from '../Contact'
import LoginForm from '../../components/login';
import SignUpForm from '../../components/signup';
import { Nav, Tab, Col, Stack } from 'react-bootstrap';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const HomePage = () => { 
    
    return (
      <div className='justify-content-center' >
        <video
          autoPlay
          loop
          src={loopedVid}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "50%",
            top: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        ></video>
       
        <Col>
        <Nav className='mt-5 '>
           { !auth.loggedIn() ? (
            <Stack>
            <Tab.Container defaultActiveKey="login">
                <Nav className='justify-content-center ' >
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="signup">Signup</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content >
                  <Tab.Pane  eventKey="login">
                    <LoginForm/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="signup">
                    <SignUpForm />
                  </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Stack>
           ) : null }
        </Nav> 
        </Col>
      </div>
      
    );

}

export default HomePage; 