import React from 'react';
import Footer from './Footer';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import "../../style/Contact.css";

const Contact = (props) => {
  return (
    <Form className ="contact-form"> 
      <FormGroup className="email-input">
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email here" />
      </FormGroup>
      
      
     
      <FormGroup className="message-input">
        <Label for="text">Text Area</Label>
        <Input type="textarea" name="text" id="text" placeholder="Enter message here" />
      </FormGroup>
      
      
     
       <FormGroup>
      <Button className="btn-custom">Submit</Button>
      </FormGroup>
      <hr />
      <Footer></Footer>
     
    </Form>
    
  );
}

export default Contact;