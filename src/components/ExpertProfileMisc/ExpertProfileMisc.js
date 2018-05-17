import React from 'react';
import {Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import './ExpertProfileMisc.css';

const ExpertProfileMisc = props => (
  <div>
    <Container className="misc-info">
      <h3>Miscellaneous</h3>
      <Row className="expertise-misc">
        <Col md="12">
        <Label>Do you want to be considered for the board of advisors and/or Board of Directors by startups fundraising on our site?</Label>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="radio1" />{' '}
            Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="radio1" />{' '}
            No
            </Label>
          </FormGroup>
        </Col>
        <Col md="12">
        <Label>How did you hear about us?</Label>
          <FormGroup>
            <Input type="text" name="hearAboutUs" placeholder="" />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ExpertProfileMisc;