import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    largeImg: this.props.largeImageURL,
  };

  hendlImgClick = evt => {
    console.log(evt.currentTarget);
    console.log(this.state.largeImg);
  };

  render() {
    return (
      <>
        <li onClick={this.hendlImgClick} className={css.gallery__item}>
          <img
            className={css.gallery__item__image}
            src={this.props.webformatURL}
            alt="#"
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
