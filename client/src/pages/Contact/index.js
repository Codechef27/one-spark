import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const ContactGameDevs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p variant="primary" onClick={handleShow}>
        Message Us 
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark' >Fill out the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-dark'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='text-dark'>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Send us a message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactGameDevs;