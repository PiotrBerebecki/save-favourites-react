import React from 'react';

export default function ItemList({items, handleChange}) {
  // console.log('items', items);
  let renderItems = <li>Loading items...</li>;
  if (items) {
    renderItems = items.map((item, index) => (
      <li key={index}>
        <input type="checkbox"
               id={index}
               checked={item.isFav}
               onChange={handleChange} />
        <label htmlFor={index}>
          {item.text}
        </label>
      </li>
    ));
  }

  return (
    <ul className="items">
      { renderItems }
    </ul>
  );
}
