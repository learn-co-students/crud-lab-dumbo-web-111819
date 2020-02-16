import React, { Component } from 'react'
import {connect} from 'react-redux'

export class EditReview extends Component {

    state = {
        text: ''
    }

    handleOnChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitEdit =(e) => {
        e.preventDefault()
        this.props.updateReview(this.props.review.id, this.state.text)
        this.props.changeEditStatusOnSubmit()
        this.setState({text: ''})
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit = {this.onSubmitEdit}>
                    <input type='text' name = 'text' value ={this.state.text} onChange = {this.handleOnChange} />
                    <input type ='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateReview: (id, text) => dispatch({type: 'UPDATE_REVIEW', id, text})
    }
}

export default connect(null, mapDispatchToProps)(EditReview)
