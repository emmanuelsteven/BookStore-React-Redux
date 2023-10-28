import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useEffect } from 'react';
import {
  getBooks, removeBook, deleteBooks,
} from '../redux/books/booksSlice';

const BookList = () => {
  const { book, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleremoveBook = (itemId) => {
    dispatch(removeBook(itemId));
    dispatch(deleteBooks(itemId));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="imp-book">
      {book.map((key) => (
        <div key={key.item_id} className="book-cont">
          <img src={key.bookImg} alt={key.title} className="book-image" />
          <div className="author-section">
            <div className="book-author">
              <p className="cat">{key.category}</p>
              <h4 className="aut">{key.title}</h4>
              <p className="tit">{key.author}</p>
            </div>
            <div className="book-btn">
              <button type="button" className="l-btn">comments</button>
              <button className="l-btn rem" type="button" onClick={() => handleremoveBook(key.item_id)}>remove</button>
              <button type="button" className="l-btn">edit</button>
            </div>
          </div>
          <div className="comp-icon">
            <div className="progress">
              <AiOutlineLoading3Quarters />
            </div>
            <div className="prog-details">
              <span className="comp-percent">64%</span>
              <span className="comp-status">completed</span>
            </div>
          </div>
          <div className="current-cont">
            <p className="current-chpt">CURRENT CHAPTER</p>
            <p className="chapter-1">
              Chapter 15
            </p>
            <button type="button" className="upBtn">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}

    </div>
  );
};
export default BookList;
