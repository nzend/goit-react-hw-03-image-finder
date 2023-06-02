import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
      </>
    );
  }
}

export default App;
