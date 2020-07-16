import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md">
          <RenderCard item={props.dishes} />
        </div>
        <div className="col-12 col-md">
          <RenderCard item={props.promotions} />
        </div>
        <div className="col-12 col-md">
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  );
}

export default Home;   