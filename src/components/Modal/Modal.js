import css from './Modal.module.css';

export const Modal = () => {
  return (
    <div classNAme={css.overlay}>
      <div className={css.modal}>
        <img src="#" alt="#" />
      </div>
    </div>
  );
};
