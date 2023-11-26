import React from 'react';
import Header from '../Header/Header';
import './Homepage.css';
import homelogo from '../Image/homelogo.png';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Logo from '../Image/Logo.png';

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
            <ListGroup horizontal>
    <ListGroupItem
      href="#"
      tag="a"
    >
      <img src = {Logo}></img>
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem
      href="#"
      tag="a"
    >
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup> 
            </div>
        </div>
        </> );
};

export default homepage;