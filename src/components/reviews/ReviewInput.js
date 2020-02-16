import React, { Component } from 'react';
import Reviews from './Reviews';
import {connect} from 'react-redux'
import uuid from 'uuid'

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = (e) =>{
    e.preventDefault()
    this.props.addReview({
      ...this.state,
      id: uuid.v4(),
      restaurantId: this.props.restaurant.id
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          Review Input
          <input type = 'text' name= 'text' value={this.state.text} onChange={this.handleOnChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review})
  }
}
export default connect(null, mapDispatchToProps)(ReviewInput);
