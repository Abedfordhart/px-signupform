import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import './ExpertProfileExpertise.css';

class ExpertProfileExpertise extends Component {
  render() {
    return (
      <div>
        <Container className="expertise-info">
            <h3>Areas of Expertise</h3>
            <Row className="expertise-survey">
              <Col md="6">
              <legend align="left">Sectors</legend>
               <FormGroup check>
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               </FormGroup>
               <FormGroup>
                <Label for="other">Other:</Label>
                <Input type="org" name="org" id="exampleorg" placeholder="" />
               </FormGroup>
             </Col>
             <Col md="6">
               <legend align="left">Technologies</legend>
               <FormGroup check>
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               </FormGroup>
               <legend align="left">Functions</legend>
               <FormGroup check>
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               
                   <Label check>
                     <Input type="radio" name="radio1" />{' '}
                      Food and Agriculture
                   </Label>
               </FormGroup>
             </Col>
             <Col md="12">
              <FormGroup>
                <Label for="other">Keywords that best describe your expertise</Label>
                <Input type="textarea" name="org" id="exampleorg" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="other">Summary of your industry experiences relevant to your areas of expertise</Label>
                <Input type="textarea" name="org" id="exampleorg" placeholder="" />
              </FormGroup> 
             </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default ExpertProfileExpertise;