import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      
      
     
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      
      
     
       
      <Button>Submit</Button>
    </Form>
  );
}

export default Contact;