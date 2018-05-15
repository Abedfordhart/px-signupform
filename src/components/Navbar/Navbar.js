import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Navbar.css'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Container className="propelx-nav" fluid>
          <Navbar light expand="lg">
            <NavbarBrand href="/">
              <img alt="" src="https://d1m7iq40dbyv6q.cloudfront.net/images/logo-secondary.png"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Explore
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Company
                    </DropdownItem>
                    <DropdownItem>
                      Portfolio
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Press Room
                    </DropdownItem>
                    <DropdownItem>
                      Channel Partners
                    </DropdownItem>
                    <DropdownItem>
                      Industry Council
                    </DropdownItem>
                    <DropdownItem>
                      Blog
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="https://www.propelx.com/account/investing">Invest in Startups</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.propelx.com/get_listed">List a Startup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.propelx.com/account/expertise">Share Expertise</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    User Profile
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      My Account
                    </DropdownItem>
                    <DropdownItem>
                      Expert Portal
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}