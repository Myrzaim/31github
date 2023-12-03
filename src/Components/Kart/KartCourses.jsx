import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './KartCourses.css';

const KartCourses = () => {
    return (<>
        <div>
        <Card
            body
            className="my-2"
            style={{
              width: '30rem',
              height: '24rem'
            }}
        >
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
          />
          <div className='d-flex main-div'>
            <div className='d-flex lil-div'>
              <p>4 weeks</p>
              <p>beginner</p>
            </div>
            <div>
              <p>By John Smith</p>
            </div>
          </div>
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>    
        </div>
        </>
    );
};

export default KartCourses;