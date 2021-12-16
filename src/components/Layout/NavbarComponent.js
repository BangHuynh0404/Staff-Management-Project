import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";

import { NavLink } from "react-router-dom";
class NavbarCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar dark expand='lg' className='bg-success'>
        <div className='container-fluid px-5'>
          <NavbarBrand className='ms-1 fw-bold fs-6' href='/'>
            <img
              className='me-3'
              src='assets/images/logo.svg'
              height='50'
              width='50'
              alt='bang'
            />
            PHẦN MỀM QUẢN LÝ NHÂN SỰ
          </NavbarBrand>
          <NavbarToggler className='me-1 ' onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='ms-auto fw-bold '>
              <NavItem className='mx-2'>
                <NavLink className='nav-link' to='/staff'>
                  <span className='fa fa-users fa-lg mx-2'></span>
                  NHÂN VIÊN
                </NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink className='nav-link' to='/department'>
                  <span className='fa fa-building-o  fa-lg mx-2'></span>
                  PHÒNG BAN
                </NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink className='nav-link' to='/salary'>
                  <span className='fa fa-money fa-lg mx-2'></span>
                  BẢNG LƯƠNG
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarCom;
