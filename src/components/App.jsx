import React, { Component } from 'react';
import fetchCards from '../fetchCards';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  state = {
    articles: [],
  };

  render() {
    return <Searchbar></Searchbar>;
  }
}

export default App;
