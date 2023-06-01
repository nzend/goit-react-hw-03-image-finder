import React, { Component } from 'react';
import fetchCards from '../../fetchCards';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    articles: [],
    search: '',
  };
  hendleSubmit = evt => {
    // evt.preventDefault();
    // this.setState({ search: this.handleChange() });
  };
  // handleChange = evt => {
  //   // console.log(evt.currentTarget.value);
  //   const value = evt.currentTarget.value;
  //   return value;
  // };

  render() {
    return (
      <Searchbar
        onChange={this.handleChange}
        onSubmit={this.hendleSubmit}
      ></Searchbar>
    );
  }
}

export default App;
