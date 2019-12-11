import React, { Component } from 'react';
import Login from './Login'

class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div>
        <Login onChange={this.handleOnChange} />
      </div>
    );
  }
}

export default LoginContainer;