import React, { Component } from 'react';
import Signup from './Signup'

class SignupContainer extends Component {
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
        <Signup onChange={this.handleOnChange} />
      </div>
    );
  }
}

export default SignupContainer;