import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    // console.log(this.props.reviews)
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

//why do this here
const mapStateToProps=(state) => {
  return {
    reviews: state.reviews
  }
  
}

const mapDispatchToProps=(dispatch) => {
  return {
    addReview: (review) => dispatch({type:'ADD_REVIEW', review}),
    deleteReview: (ids) =>dispatch({type: 'DELETE_REVIEW',ids})
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
