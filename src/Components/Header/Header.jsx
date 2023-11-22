import React from 'react';
import './Header.css';
import { NavItem, Nav, NavLink, Container } from 'reactstrap';
import navLogo from '../Image/navLogo.png';

const Header = () => {
    return (
        <Container>
            <div className='headNav'>Free Courses 🌟 Sale Ends Soon, Get It Now</div>
        <Nav
            >
                <div className='navLogo'>
                <img src={navLogo} alt="navLogo" className="w-100" />
                </div>
          <NavItem>
            <NavLink
              active
              href="#"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
            Courses
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
             About us 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
             Prising
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
             Contact
            </NavLink>
          </NavItem>
            </Nav>
            </Container>
    
    );
};

export default Header;