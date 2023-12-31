import React, { useContext } from 'react';
import './Kart.css';
import { Card, CardTitle,CardText, Button } from 'reactstrap';
import kartbtn from '../Image/kart-btn.png';

const Kart = ({ obj }) => {
    return (
       <>
<div>
  <Card
    body
    className="my-2"
    style={{
      width: '23rem',
      height: '24rem',
      borderRadius:'2%'
    }}
  >
    <CardTitle className='kart-num' tag="h1">
      {obj.id}
            </CardTitle>
            <CardTitle className='title' tag="h5">
            {obj.title}
            </CardTitle>
            <div className='kart-txt'>
    <CardText >
    {obj.info}
              </CardText>
              </div>
            
            <Button className='btn1' >
              <img src={kartbtn} ></img>
      
    </Button>
  </Card>
            </div>
            </>
    );
};

export default Kart;