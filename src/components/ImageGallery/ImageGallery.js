import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchCards from '../../fetchCards';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: null,
    error: false,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('Змінився запит');
      this.setState({ status: 'panding' });

      fetchCards(this.props.searchQuery, 1)
        .then(images => {
          console.log(images);
          if (images.total === 0) {
            return Promise.reject(
              new Error(`Немає картинок за запитом ${this.props.searchQuery}`)
            );
          }
          this.setState({ images: images.hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть запит</div>;
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }
    if (status === 'resolved') {
      return (
        <ul className={css.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              webformatURL={image.webformatURL}
            ></ImageGalleryItem>
          ))}
        </ul>
      );
    }
  }
}
export default ImageGallery;
