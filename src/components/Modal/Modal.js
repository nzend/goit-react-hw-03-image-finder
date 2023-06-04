import css from './Modal.module.css';

import React, { Component } from 'react';
import { createPortal } from 'react-dom';


const modalPortal = document.querySelector('#modal__root');

export default class Modal extends Component {
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  render() {
    return createPortal(
      <div className={css.Modal__backdrop} onClick={this.hendleBackdropClick}>
        <div className={css.Modal__content}>
         
          <h1>Image</h1>
          <img src="#" alt="#" />
        </div>
      </div>,
      modalPortal
    );
  }
}
