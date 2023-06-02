import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li className={css.gallery__item}>
        <img className={css.gallery__item__image} src={webformatURL} alt="#" />
      </li>
    </>
  );
};
