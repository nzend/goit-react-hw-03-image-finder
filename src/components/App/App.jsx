import React, { Component } from 'react';
import fetchCards from '../../fetchCards';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    photos: {},
  };

  async componentDidMount() {
    const cards = await fetchCards('cat', 1);
    this.setState({ photos: cards });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Searchbar></Searchbar>
        {this.state.photos && (
          <ul>
            {/* {this.state.photos.map(photo => (
              <li> card
                <img src="#" alt="#" />
              </li>
            ))} */}
          </ul>
        )}
      </>
    );
  }
}

export default App;
