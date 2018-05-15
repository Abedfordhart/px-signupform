import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Input } from 'reactstrap';
import './ExpertProfileBasics.css';

class ExpertProfileBasics extends Component {
  render() {
    return (
      <div>
        <Container className="personal-info">
          <Row>
            <Col xs="12">
              <h3>Basics</h3>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="org" name="org" id="exampleorg" placeholder="Organization" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="instituion" name="institution" id="exampleinstitution" placeholder="Institutional/Company Bio Link" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="department" name="department" id="exampledepartment" placeholder="Department" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="reasearchgate" name="reasearchgate" id="exampleresearchgate" placeholder="ResearchGate Profile Link" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="title" name="title" id="exampletitle" placeholder="Title" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="academia" name="academia" id="exampleacademia" placeholder="Academia.edu Profile Link" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Input type="evalbio" name="evalbio" id="exampleevalbio" placeholder="One-sentence evaluator bio we can share with startups and investors" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Input type="textarea" name="academia" id="exampleacademia" placeholder="Summary of your academic background (including university affiliations, degrees attained, research experiences and publications)" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ExpertProfileBasics;