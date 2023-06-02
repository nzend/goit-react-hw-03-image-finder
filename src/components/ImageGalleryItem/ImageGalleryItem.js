import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li className={css.gallery__item}>
        <img src={webformatURL} alt="#" />
      </li>
    </>
  );
};
