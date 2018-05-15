import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './Button.css';

export default class CustomButton extends Component {
  render() {
    return (
      <div>
        <Button className="save-button">Save</Button>{' '}
      </div>
    );
  }
}