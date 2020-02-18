import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text:'',
    // reviews:'empty reviews'
  }
  handleSubmit=(e) => {
    e.preventDefault()
    // console.log(this.props)
    this.props.addRestaurant(this.state.text)
    this.setState({
      text:''
    })
  }
  handleOnChange=(e) => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add restaurant</label>
          <input onChange={this.handleOnChange} value={this.state.text} type='text' name='text'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
