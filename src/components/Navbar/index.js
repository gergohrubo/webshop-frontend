import React, { Component } from 'react';
import Navbar from './layout'
import { connect } from 'react-redux'

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(NavbarContainer);