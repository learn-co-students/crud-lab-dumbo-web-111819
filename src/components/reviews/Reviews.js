import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'
class Reviews extends Component {
  thisRestaurantsReviews = () => {
    let filteredReviews =  this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return filteredReviews.map( review => <Review  key = {review.id} review = {review} deleteReview={this.props.deleteReview}/>)
  }
  render() {
    console.log(this.props)
    return (
      <ul>
        Reviews
        {this.thisRestaurantsReviews()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {reviews: state.manageReviews.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);