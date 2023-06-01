import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.state);
  //   // this.setState({ name: '', number: '' });
  // };
 
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.props.onSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm__button}>
            <span className="#">Search</span>
          </button>

          <input
            // onChange={this.props.onChange}
            className={css.SearchForm__input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.props.onSubmit()}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
