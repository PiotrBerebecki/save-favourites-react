import React, { Component } from 'react';

import ItemList from './ItemList/index.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    this.setState({
      items: JSON.parse(localStorage.getItem('items')) || []
    });
  }

  render() {
    console.dir(this.state.items);
    return (

      <div className="wrapper">

        <h2>YOUR FAVOURITES</h2>
        {/* <p></p> */}

        <ItemList items={this.state.items} />

        {/* <ul className="plates">
          <li>Loading favourites...</li>
        </ul> */}

        <form className="add-items" autoComplete="off">
          <input type="text" name="item" placeholder="Item Name" required />
          <input type="submit" value="+ Add Item" />
        </form>

      </div>

    );
  }
}

export default App;
