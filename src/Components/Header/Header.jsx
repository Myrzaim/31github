import React from 'react';
import './Header.css';
import { NavItem, Nav, NavLink, Container } from 'reactstrap';
import navLogo from '../Image/navLogo.png';

const Header = () => {
    return (
        <>
            <div className='mainDiv'>
            <div className='headNav'>Free Courses 🌟 Sale Ends Soon, Get It Now</div>
        <Nav className='mt-1 navStyle'
            >
               <Nav>
          <NavItem>
                <div className='navLogo'>
                <img src={navLogo} alt="navLogo" className="imgLogo" />
                    </div>
         </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            disabled
             href="#">
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
                <Nav>
                <NavItem>
            <NavLink
              disabled
              href="#"
            >
             Sign Up
            </NavLink>
          </NavItem>
          <NavItem >
            <NavLink className='nav-login'
              href="#"
            >
             Login
            </NavLink>
                </NavItem>  
                </Nav>
        </Nav>
        </div>
    </>
    );
};

export default Header;