import React, { Component } from 'react';
import { CardImg, Card, CardTitle, BreadcrumbItem, Breadcrumb, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderItem(props) {
  return (
    <Card>
      <Link to={`/menu/${props.dish.id}`} >
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
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
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home"> Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dishes.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}


export default Menu;