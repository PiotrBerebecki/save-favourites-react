import React, { Component } from 'react';

import ItemList from './../ItemList/ItemList.js';
import AddItem from './../AddItem/AddItem.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.toggleFav = this.toggleFav.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.state = {
      // items: null
      items: [
        { text: 'js', isFav: true },
        { text: 'swift', isFav: false }
      ]
    };
  }

  componentDidMount() {
    // this.setState({
    //   items: JSON.parse(localStorage.getItem('react-items')) || []
    // });
  }

  toggleFav(e) {
    const { items } = this.state;
    const index = parseInt(e.target.id, 10);

    const updatedItems = [
      ...items.slice(0, index),
      { ...items[index], isFav: !items[index].isFav},
      ...items.slice(index + 1)
    ];

    this.setState({
      items: updatedItems
    }, this.saveItems(updatedItems));
  }

  addNewItem(item) {
    console.log(item);
  }

  saveItems(items) {
    // console.log('saving');
    localStorage.setItem('items-react', JSON.stringify(items));
  }

  render() {
    // console.dir(this.state.items);
    return (

      <div className="wrapper">

        <h2>YOUR FAVOURITES</h2>

        <ItemList items={this.state.items} handleChange={this.toggleFav} />

        <AddItem handleNewItem={this.addNewItem} />
        <form className="add-items" autoComplete="off">
          <input type="text" name="item" placeholder="Item Name" required />
          <input type="submit" value="+ Add Item" />
        </form>

      </div>

    );
  }
}

export default App;
