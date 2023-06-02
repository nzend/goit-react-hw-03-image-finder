import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('Введіть пошуковий запит');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
