import React, { Component } from 'react';
import Restaurant from './Restaurant'
import {connect} from 'react-redux'

class Restaurants extends Component {
  render() {
    console.log(this.props)
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant = {this.props.deleteRestaurant}/>)}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {restaurants: state.manageRestaurants.restaurants}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);