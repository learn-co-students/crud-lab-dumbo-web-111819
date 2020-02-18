import React, { Component } from 'react';

class Review extends Component {

  handleDelete=(e) => {
    console.log('delete')
    // console.log(this.props.review.id)
    // console.log(this.props.restaurant.id)
    let ids={reviewId:this.props.review.id,restaurantId:this.props.restaurant.id}
    console.log(ids.reviewId)
    console.log(ids.restaurantId)
    this.props.deleteReview(ids)
  }


  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick ={this.handleDelete}> X </button>
      </div>
    );
  }

};

export default Review;
