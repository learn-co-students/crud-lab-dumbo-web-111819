import React, { Component } from 'react';
import EditReview from './EditReview';

class Review extends Component {


  state = {
    edit: false
  }

  onClickDelete = () => {
    this.props.deleteReview(this.props.review.id)
  }

  onClickEdit = () => {
    this.setState({edit: !this.state.edit})
  }

  changeEditStatusOnSubmit = () => {
    this.setState({edit: false})
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.state.edit ? <EditReview review ={review} changeEditStatusOnSubmit = {this.changeEditStatusOnSubmit} />:<p>{review.text}</p>  }
        </li>
        <button onClick ={this.onClickDelete}> X </button>
        <button onClick ={this.onClickEdit}> Edit </button>
      </div>
    );
  }

};

export default Review;
