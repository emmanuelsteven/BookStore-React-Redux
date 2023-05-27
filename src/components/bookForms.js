import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';

const Forms = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const eventTitle = (e) => {
    setTitle(e.target.value);
  };
  const eventAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const eventCategory = (e) => {
    setCategory(e.target.value);
  };
  const eventSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const formData = {
        item_id: nanoid(),
        title,
        author,
        category,
      };
      dispatch(addBook(formData));
      dispatch(postBooks(formData));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const Selectbk = [{
    value: '', label: 'category', disabled: true, selected: true,
  },
  { value: 'Action', label: 'Action' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'History', label: 'History' },
  { value: 'Science', label: 'Science' },
  { value: 'Medicine', label: 'Medicine' },
  ];
  return (
    <form onSubmit={eventSubmit} className="inputfield">

      <input type="text" placeholder="Book Title" required id="title" name="title" value={title} onChange={eventTitle} />

      <input type="text" placeholder="Book Author" required id="author" name="author" value={author} onChange={eventAuthor} />

      <select
        name="category"
        id="category"
        value={category}
        onChange={eventCategory}
      >
        {Selectbk.map((category) => (
          <option
            key={category.value}
            value={category.value}
            disabled={category.disabled}
            selected={category.selected}
          >
            {category.label}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Forms;
