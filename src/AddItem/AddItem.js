import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: ''
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNewItem(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form className="add-items"
            autoComplete="off"
            onSubmit={this.state.text && this.handleSubmit}>
        <input type="text"
               name="item"
               placeholder="Item Name"
               required
               value={this.state.text}
               onChange={this.handleChange}/>
        <input type="submit" value="+ Add Item" />
      </form>
    );
  }
}
