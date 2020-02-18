import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  
  

  handleDelete=(e) => {
    // console.log('delete')
    // console.log(this.props.restaurant)
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;


    return (
      <div>
        <li>
          {restaurant.text} | {restaurant.id}
          <button onClick ={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
