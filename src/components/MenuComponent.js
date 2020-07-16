import React, { Component } from 'react';
import { Media, CardImg, Card, CardTitle, CardText, CardBody } from 'reactstrap';

import Dishdetail from './DishdetailsComponent.js';

function RenderItem(props) {
  return (
    <Card onClick={() => props.onClick(props.dish.id)}>
      <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
      <CardTitle>{props.dish.name}</CardTitle>
    </Card>
  );
}



const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}


export default Menu;