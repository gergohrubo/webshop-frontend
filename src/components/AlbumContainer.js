import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar'
import Footer from './Footer'
import Album from './Album'
import { connect } from 'react-redux'
import { getArticles, ARTICLES_FETCHED } from '../actions'

class AlbumContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getArticles())
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <main>
          {this.props.articles && <Album articles={this.props.articles} />}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

export default connect(mapStateToProps)(AlbumContainer);