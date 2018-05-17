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
                  <Input type="checkbox" name={item}/>{' '}
                    {item}
                </Label>
              )
             })}
           </FormGroup>
           <FormGroup>
            <Label>Other:</Label>
            <Input type="text" name="other" placeholder="" />
           </FormGroup>
         </Col>
         <Col md="6">
           <legend align="left">Technologies</legend>
           <FormGroup check>
               {Object.keys(props.technologies).map((item, i) => {
                return (
                  <Label check key={i}>
                    <Input type="checkbox" name={item} />{' '}
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
                    <Input type="checkbox" name={item} />{' '}
                      {item}
                  </Label>
                )
               })}
           </FormGroup>
         </Col>
         <Col md="12">
          <FormGroup>
            <Label>Keywords that best describe your expertise</Label>
            <Input type="textarea" name="keywords" placeholder="Help us identify the most relevant evaluation opportunities for you (e.g. next-gen proteomics, pharmaceutical therapy adherence, thermo-electric waste heat recovery, radio frequency filtering)" />
          </FormGroup>
          <FormGroup>
            <Label>Summary of your industry experiences relevant to your areas of expertise</Label>
            <Input type="textarea" name="summary" placeholder="" />
          </FormGroup> 
         </Col>
        </Row>
    </Container>
  </div>
);

export default ExpertProfileExpertise;