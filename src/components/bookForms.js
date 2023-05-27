import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';
import './styles/nav.css';

const Forms = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'author') {
      setAuthor(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
      console.log(category);
    }
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
  return (
    <div className="addSection">
      <hr />
      <div className="addHeader">Add New Book</div>
      <div className="input-cont">
        <form onSubmit={eventSubmit} className="form-cont">
          <input type="text" className="input-field" placeholder="Book Title" required id="title" name="title" value={title} onChange={onChange} />

          <input type="text" className="input-field" placeholder="Book Author" required id="author" name="author" value={author} onChange={onChange} />

          <select
            name="category"
            id="category"
            className="input-cat"
            value={category}
            onChange={onChange}
          >
            <option value="Category">Category</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Adventure">Adventure</option>
          </select>
          <button type="submit" className="submit-btn">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
