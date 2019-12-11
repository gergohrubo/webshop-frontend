import React, { Component } from 'react';
import Login from './Login'
import { logIn } from '../actions'
import { connect } from 'react-redux'

class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.dispatch(logIn(this.state.username, this.state.password, this.props.history.push))
  }
  render() {
    return (
      <div>
        <Login onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default connect()(LoginContainer);