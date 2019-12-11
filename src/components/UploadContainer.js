import React, { Component } from 'react';
import Upload from './Upload'
import { connect } from 'react-redux'
import { uploadArticle } from '../actions'

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
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.dispatch(uploadArticle({ ...this.state, user_id: this.props.user.jwt }, this.props.history.push))
  }
  render() {
    return (
      <div>
        <Upload onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(UploadContainer);