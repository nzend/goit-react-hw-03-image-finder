import React, { Component } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css';
import fetchImages from '../../fetchCards';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';

let page = 1;

class App extends Component {
  state = {
    status: 'idle',
    searchQuery: '',
    images: null,
    total: 0,
  };

  handleSubmit = async searchQuery => {
    page = 1;
    if (searchQuery.trim() === '') {
      alert('You cannot search by empty field, try again.');
      return;
    } else {
      try {
        this.setState({ status: 'pending' });
        const { total, hits } = await fetchImages(searchQuery, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        } else {
          this.setState({
            images: hits,
            searchQuery,
            total,
            status: 'resolved',
          });
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  };
  onNextPage = async () => {
    this.setState({ status: 'pending' });

    try {
      const { hits } = await fetchImages(this.state.searchQuery, (page += 1));
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  render() {
    const { total, status, images } = this.state;
    if (status === 'idle') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />

          <Loader />
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <p>Something wrong, try later</p>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={page} items={this.state.images} />
          {total > 12 && total > images.length && (
            <Button onClick={this.onNextPage} />
          )}
        </div>
      );
    }
  }
}
export default App;
