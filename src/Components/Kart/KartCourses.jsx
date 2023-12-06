import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './KartCourses.css';

const KartCourses = ({ obj }) => {
  var imagePath = obj.img;
  
    return (<>
        <div>
        <Card
            body
            className="my-2"
            style={{
              width: '34rem',
              height: '40rem',
              borderRadius:'2%'
            }}
        >
    <CardImg
      alt="Card image cap"
            src ={imagePath} 
      top
            width="100%"
         
          />
          <div className='d-flex main-div'>
            <div className='d-flex lil-div'>
              <p className='p-style'>{obj.duration}s</p>
              <p className='p-style'>{obj.level}</p>
            </div>
            <div>
              <p>{obj.author}</p>
            </div>
          </div>
    <CardBody>
      <CardTitle tag="h4" className='kardtitle'>
        {obj.title}
      </CardTitle>
            <CardText>
              {obj.info}
            </CardText>
      <Button className='btn-get'>
        Get It Now
      </Button>
    </CardBody>
  </Card>    
        </div>
        </>
    );
};

export default KartCourses;