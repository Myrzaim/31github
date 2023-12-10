import React from 'react';
import './KartPost.css';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import photo1 from '../Image/photo1.png';

const KartPost = () => {
    return (
        <div>
            <Card
                body
                className="my-2"
                style={{
                  width: '23rem',
                  height: '17rem',
                  borderRadius:'2%'
                }}>
    <CardBody>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
   </CardText>
      <div>
        <img src={photo1}>
                        </img>
        <CardText> Sarah L</CardText>
      <Button>
        Read Full Story
      </Button>
        </div>
    </CardBody>
  </Card>
        </div>
    );
};

export default KartPost;