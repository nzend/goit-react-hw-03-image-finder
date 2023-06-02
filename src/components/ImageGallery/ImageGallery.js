import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchCards from '../../fetchCards';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = { images: null };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('Змінився запит');
      fetchCards(this.props.searchQuery, 1).then(images => {
        // console.log(images.hits[0]);
        this.setState({ images: images.hits });
      });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        {images && (
          <ul className={css.gallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                id={image.id}
                webformatURL={image.webformatURL}
              ></ImageGalleryItem>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default ImageGallery;
