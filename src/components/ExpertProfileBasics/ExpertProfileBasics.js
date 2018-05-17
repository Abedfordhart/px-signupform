import React from 'react';
import {Container, Row, Col, FormGroup, Input } from 'reactstrap';
import './ExpertProfileBasics.css';

const ExpertProfileBasics = props => (
  <div>
    <Container className="personal-info">
      <Row>
        <Col sm="12">
          <h3>Basics</h3>
        </Col>
          {Object.keys(props.basicsFormData.basicsFormData).map((item, i) => {
            return (
              <Col sm="6" key={i}>
                <FormGroup>
                  <Input 
                    type="text" 
                    name={item} 
                    onChange={(event)=>props.handleInputChange(Object.keys(props)[0], event)}
                    placeholder={item} 
                  />
                </FormGroup>
              </Col>
            )
          })}
        <Col sm="12">
          <FormGroup>
            <Input type="text" 
              name="oneSentenceBio" 
              onChange={(event)=>props.handleInputChange(Object.keys(props.basicsFormData)[1], event)}
              placeholder="One-sentence evaluator bio we can share with startups and investors" 
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup>
            <Input 
              type="textarea" 
              name="summaryOfBackground" 
              onChange={(event)=>props.handleInputChange(Object.keys(props.basicsFormData)[1], event)}
              placeholder="Summary of your academic background (including university affiliations, degrees attained, research experiences and publications)" 
            />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ExpertProfileBasics;