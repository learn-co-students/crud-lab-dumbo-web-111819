import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let arrayOfComponents=this.props.restaurants.map(restaurantObj=> <Restaurant key={restaurantObj.id} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurantObj}/>)

    return(
      <ul>
        {arrayOfComponents}
      </ul>
    );
  }
};

export default Restaurants;