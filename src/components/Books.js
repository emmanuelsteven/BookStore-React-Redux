import React from 'react';
// import { Form } from 'react-router-dom';
import Forms from './Forms';

const Books = () => {
  const Displaybook = [
    { author: 'James Brown', title: 'Things Fall Apart', id: 243 },
    { author: 'Capt Brown', title: 'Things Fall together', id: 540 },
    { author: 'Capt Green', title: 'Things Fix together', id: 545 },
  ];
  return (
    <>
      <div>
        <h2>Books</h2>
        <ul>
          {Displaybook.map((book) => (
            <li key={book.id}>
              <div>{book.title}</div>
              <div>{book.category}</div>
              <button type="button">Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <Forms />
    </>
  );
};
export default Books;
