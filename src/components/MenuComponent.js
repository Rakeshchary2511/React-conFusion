import React, { Component } from 'react';
import { Media, CardImg, Card, CardTitle, CardText,CardBody } from 'reactstrap';

import Dishdetail from './DishdetailsComponent.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish : null
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish : dish
    })
  };
 

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div>
          <Dishdetail dish = {this.state.selectedDish} />
        </div>
      </div>
    );
  }
}

export default Menu;