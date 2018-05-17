import React from 'react';
import {Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import './ExpertProfileExpertise.css';

const ExpertProfileExpertise = props => (
      <div>
        <Container className="expertise-info">
            <h3>Areas of Expertise</h3>
            <Row className="expertise-survey">
              <Col md="6">
              <legend align="left">Sectors</legend>
               <FormGroup check>
                 {Object.keys(props.sectors).map((item, i) => {
                  return (
                    <Label check key={i}>
                      <Input type="radio" name={item} />{' '}
                        {item}
                    </Label>
                  )
                 })}
               </FormGroup>
               <FormGroup>
                <Label for="other">Other:</Label>
                <Input type="org" name="org" id="exampleorg" placeholder="" />
               </FormGroup>
             </Col>
             <Col md="6">
               <legend align="left">Technologies</legend>
               <FormGroup check>
                   {Object.keys(props.technologies).map((item, i) => {
                  return (
                    <Label check key={i}>
                      <Input type="radio" name={item} />{' '}
                        {item}
                    </Label>
                  )
                 })}
               </FormGroup>
               <legend align="left">Functions</legend>
               <FormGroup check>
                   {Object.keys(props.functions).map((item, i) => {
                  return (
                    <Label check key={i}>
                      <Input type="radio" name={item} />{' '}
                        {item}
                    </Label>
                  )
                 })}
               </FormGroup>
             </Col>
             <Col md="12">
              <FormGroup>
                <Label for="other">Keywords that best describe your expertise</Label>
                <Input type="textarea" name="org" id="exampleorg" placeholder="Help us identify the most relevant evaluation opportunities for you (e.g. next-gen proteomics, pharmaceutical therapy adherence, thermo-electric waste heat recovery, radio frequency filtering)" />
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

export default ExpertProfileExpertise;