import React, { Component } from 'react';
import Upload from './Upload'

class UploadContainer extends Component {
  state = {
    name: '',
    type: '',
    url: '',
    description: '',
    price: ''
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div>
        <Upload onChange={this.handleOnChange} />
      </div>
    );
  }
}

export default UploadContainer;