import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state={
    text:''
    // restaurantId:''
  }
  handleSubmit=(e) => {
    e.preventDefault()
    // console.log(this.props.restaurant)
    // console.log(this.state)
    // console.log('review')
    this.props.addReview(this.state)
    this.setState({
      text:'',
      // restaurantId:''
    })
  }
  handleOnChange=(e) => {
    // console.log(e.target.value)
    // console.log(this.props.restaurant)
    // debugger
    this.setState({
      text: e.target.value,
      restaurantId:this.props.restaurant.id
    }
    // ,()=>console.log(this.state)
    )
  }
  render() {
    // console.log(this.props.restaurant)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleOnChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
