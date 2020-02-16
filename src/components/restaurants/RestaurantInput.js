import React, { Component } from 'react';
import {connect} from 'react-redux'
import uuid from 'uuid'

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()
    this.props.addRestaurant({...this.state, id: uuid.v4()})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <input name = 'text' type ='text' value={this.state.text} onChange={this.onChange}/>
          <input type = 'submit'/>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (restaurant)=> dispatch({type: 'ADD_RESTAURANT', restaurant})
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput);
