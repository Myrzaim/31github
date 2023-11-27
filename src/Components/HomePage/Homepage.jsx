import React from 'react';
import Header from '../Header/Header';
import './Homepage.css';
import homelogo from '../Image/homelogo.png';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Logo from '../Image/Logo.png';
import Logo1 from '../Image/Logo1.png';
import Logo2 from '../Image/Logo2.png';
import Logo3 from '../Image/Logo3.png';
import Logo4 from '../Image/Logo4.png';
import Logo5 from '../Image/Logo5.png';
import Logo6 from '../Image/Logo6.png';

const homepage = () => {
    return (<>
        <Header/>
        <div className='first-div'>
            <div className='d-flex div-second'>
                <img src={homelogo} alt="homeLogo" className="homeLogo" />
                <p className='first-txt'><span>Unlock</span> Your Creative Potential</p>
            </div>
           <div className='third-div'>
                <p>with Online Design and Development</p>
                <p> Courses.</p>
                <h6>Learn from Industry Experts and Enhance Your Skills.</h6>
                <Button>
                Explore Courses
  </Button>  <Button className='button-white'>
  View Pricing
  </Button>   
            </div>
            <div className='div-list'>
            <ListGroup horizontal  >
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo} className='list-group'></img>
            </ListGroupItem>
            <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo6}  className='list-group'></img>
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo1}  className='list-group'></img>
            </ListGroupItem>
            
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo2}  className='list-group'></img>
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo3}  className='list-group'></img>
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo4}  className='list-group'></img>
            </ListGroupItem>
            <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo5}  className='list-group'></img>
    </ListGroupItem>
  </ListGroup> 
  
            </div>
        </div>
        </> );
};

export default homepage;