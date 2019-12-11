import React, { Component } from 'react';
import Signup from './Signup'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class SignupContainer extends Component {
  state = {
    username: '',
    password: ''
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.dispatch(signUp(this.state.username, this.state.password, this.props.history.push))
  }
  render() {
    return (
      <div>
        <Signup onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}


export default connect(null)(SignupContainer);