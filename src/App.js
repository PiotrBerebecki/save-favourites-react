import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {
    return (

      <div className="wrapper">
        <h2>YOUR FAVOURITES</h2>
        <p></p>
        <ul className="plates">
          <li>Loading favourites...</li>
        </ul>
        <form className="add-items" autoComplete="off">
          <input type="text" name="item" placeholder="Item Name" required />
          <input type="submit" value="+ Add Item" />
        </form>
      </div>
      
    )
  }
}

export default App;
