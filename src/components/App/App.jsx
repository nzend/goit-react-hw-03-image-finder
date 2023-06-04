import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  toggleModal = evt => {
    console.log(evt.currentTarget);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          takeLargeImg={this.takeLargeImg}
          onCloseModal={this.toggleModal}
          searchQuery={this.state.searchQuery}
        ></ImageGallery>
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}></Modal>
        )}
      </>
    );
  }
}

export default App;
