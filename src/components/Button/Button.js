import React from 'react';
import { Button } from 'reactstrap';
import './Button.css';

const CustomButton = props => (
  <div>
    <Button className="save-button" onClick={props.handleSubmit}>Save</Button>
  </div>
)

export default CustomButton;