import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props.reviews)
    // console.log(this.props.restaurant.id)
    let filteredReviews=this.props.reviews.filter(review=> review.restaurantId === this.props.restaurant.id)
    // console.log(filteredReviews)
    let arrayOfComponents=filteredReviews.map(review=><Review key={review.id} restaurant={this.props.restaurant} review={review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {arrayOfComponents}
      </ul>
    );
  }
};

export default Reviews;