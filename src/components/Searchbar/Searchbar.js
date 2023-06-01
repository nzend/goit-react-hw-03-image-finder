import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchForm__button}>
            <span className="#">Search</span>
          </button>

          <input
            // onChange={this.props.onChange}
            className={css.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
