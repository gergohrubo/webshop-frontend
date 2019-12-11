import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar'
import Footer from './Footer'
import Album from './Album'

class AlbumContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <main>
          <Album />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AlbumContainer;